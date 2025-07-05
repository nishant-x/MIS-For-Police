import React from 'react';
import './AchievementSection.css';

const AchievementSection = ({ achievements }) => {
    return (
        <div className="achievement" id="achievements">
            <h2>ACHIEVEMENT</h2>
            {achievements.length > 0 ? (
                <div className="past_achievements" id="past_achievements">
                    <table id="achievementTable">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Certificate</th>
                            </tr>
                        </thead>
                        <tbody id="achievementList">
                            {achievements.map((achievement, index) => (
                                <tr key={index}>
                                    <td>{achievement.title}</td>
                                    <td>{achievement.date}</td>
                                    <td><a href={`uploads/${achievement.file}`} target="_blank" rel="noopener noreferrer">View Certificate</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>No achievements found.</p>
            )}
        </div>
    );
};

export default AchievementSection;
