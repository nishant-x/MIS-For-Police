import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Achievement = () => {
    const [jawanId, setJawanId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dateOfIssue, setDateOfIssue] = useState("");
    const [certificateImage, setCertificateImage] = useState(null);
    const [awardedBy, setAwardedBy] = useState("");
    const [location, setLocation] = useState("");
    const [remarks, setRemarks] = useState("");
    const [status, setStatus] = useState("");

    const [achievements, setAchievements] = useState([]);

    const locations = useLocation();
    const user = locations.state?.user;
    console.log("User in Achievement JawanDashboard:", user);

    useEffect(() => {
        if (user) {
            setJawanId(user.id || user.officerId || "");
            fetchAchievements();
        }
    }, [user]);

    const fetchAchievements = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/achievement/view", {
                withCredentials: true,
            });
            setAchievements(res.data);
        } catch (err) {
            console.error(err);
            setStatus("❌ Failed to fetch achievements.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("officerId", jawanId);
            formData.append("title", title);
            formData.append("description", description);
            formData.append("date", dateOfIssue);
            formData.append("certificateImage", certificateImage);
            formData.append("awardedBy", awardedBy);
            formData.append("location", location);
            formData.append("remarks", remarks);

            await axios.post("http://localhost:5000/api/achievement", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            });

            setStatus("✅ Achievement added successfully!");
            setTitle("");
            setDescription("");
            setDateOfIssue("");
            setCertificateImage(null);
            setAwardedBy("");
            setLocation("");
            setRemarks("");

            fetchAchievements(); // Refresh list
        } catch (err) {
            console.error(err);
            setStatus("❌ Failed to add achievement.");
        }
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h2>Add Achievement</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={jawanId} disabled readOnly />

                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type="date" value={dateOfIssue} onChange={(e) => setDateOfIssue(e.target.value)} required />
                <input type="file" onChange={(e) => setCertificateImage(e.target.files[0])} />
                <input type="text" placeholder="Awarded By" value={awardedBy} onChange={(e) => setAwardedBy(e.target.value)} />
                <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
                <input type="text" placeholder="Remarks" value={remarks} onChange={(e) => setRemarks(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <p>{status}</p>

            <hr />
            <h3>Your Achievements</h3>
            {achievements.length === 0 ? (
                <p>No achievements found.</p>
            ) : (
                <ul>
                    {achievements.map((ach, index) => (
                        <li key={index} style={{ marginBottom: "1rem" }}>
                            <strong>{ach.title}</strong> - {new Date(ach.date).toLocaleDateString()}
                            <br />
                            {ach.description && <p>{ach.description}</p>}
                            {ach.awardedBy && <p><strong>Awarded By:</strong> {ach.awardedBy}</p>}
                            {ach.remarks && <p><strong>Remarks:</strong> {ach.remarks}</p>}
                            {ach.certificateImage && (
                                <img
                                    src={ach.certificateImage}
                                    alt="Certificate"
                                    style={{ maxWidth: "200px", marginTop: "0.5rem" }}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Achievement;
