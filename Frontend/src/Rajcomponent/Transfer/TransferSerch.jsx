import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitTransferOrder, getStationList, getJawanDetails } from '../api/api';

const TransferDetails = () => {
  const navigate = useNavigate();
  const [jawan, setJawan] = useState({});
  const [forstation, setForstation] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [reason, setReason] = useState('');
  const [stations, setStations] = useState([]);
  const [dateOfIssue] = useState(new Date().toISOString().slice(0, 10)); // today's date

  useEffect(() => {
    const badge = sessionStorage.getItem('badge');
    if (!badge) {
      navigate('/transfer/search');
    }

    // Fetch jawan details
    getJawanDetails(badge)
      .then((res) => setJawan(res.data))
      .catch(() => navigate('/transfer/search'));

    // Fetch station list
    getStationList()
      .then((res) => setStations(res.data))
      .catch((err) => console.log(err));
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      badge: jawan.badge_no,
      jawan_name: jawan.jawaan_name,
      tostation: jawan.station_name,
      forstation,
      joining_date: joiningDate,
      reason,
      email: jawan.email,
    };

    try {
      await submitTransferOrder(data);
      alert('Jawan Transfer Order Sent Successfully!');
      navigate('/phq-home');
    } catch (err) {
      alert('Error submitting transfer order');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Jawan Transfer Order</h1>
      <form onSubmit={handleSubmit}>
        <label className="block font-semibold">Badge Number</label>
        <input
          type="text"
          value={jawan.badge_no}
          disabled
          className="w-full border border-gray-300 p-2 rounded mb-3"
        />

        <label className="block font-semibold">Jawan Name</label>
        <input
          type="text"
          value={jawan.jawaan_name}
          disabled
          className="w-full border border-gray-300 p-2 rounded mb-3"
        />

        <label className="block font-semibold">Present Station</label>
        <input
          type="text"
          value={jawan.station_name}
          disabled
          className="w-full border border-gray-300 p-2 rounded mb-3"
        />

        <label className="block font-semibold">Transfer To Station</label>
        <select
          required
          value={forstation}
          onChange={(e) => setForstation(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded mb-3"
        >
          <option value="">Select Station</option>
          {stations
            .filter((s) => s.station_name !== jawan.station_name)
            .map((station) => (
              <option key={station.station_id} value={station.station_name}>
                {station.station_name}
              </option>
            ))}
        </select>

        <label className="block font-semibold">Joining Date</label>
        <input
          type="date"
          required
          value={joiningDate}
          onChange={(e) => setJoiningDate(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded mb-3"
        />

        <label className="block font-semibold">Date of Issue</label>
        <input
          type="date"
          value={dateOfIssue}
          disabled
          className="w-full border border-gray-300 p-2 rounded mb-3"
        />

        <label className="block font-semibold">Reason</label>
        <textarea
          required
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded mb-4"
          rows={5}
          placeholder="Reason for transfer"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-800 text-white w-full py-2 rounded"
        >
          Send Order
        </button>
      </form>
    </div>
  );
};

export default TransferDetails;
