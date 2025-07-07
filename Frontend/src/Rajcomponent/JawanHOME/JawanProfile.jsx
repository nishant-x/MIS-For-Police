import React from 'react';
import './UserProfile.css';

const UserProfile = ({ userDetails }) => {
    return (
        <div className="jawan_details">
            <div className="personal" id="user-profile">
                <div className="img">
                    <img src={userDetails.jawaan_img} alt="Profile" />
                </div>
                <div className="info">
                    <h3 className="name">NAME: <span className="jawan_name">{userDetails.jawaan_name}</span></h3>
                    <h3 className="id">JAWAN ID: <span className="jawan_id">{userDetails.jawaan_id}</span></h3>
                    <h3 className="regement_no">BADGE NO.: <span className="jawan_reg">{userDetails.jawaan_reg}</span></h3>
                    <h3 className="post">POST: <span className="jawan_post">{userDetails.jawaan_post}</span></h3>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
