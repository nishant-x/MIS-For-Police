import React from 'react';
import './Profile.css';

const Profile = ({ phqId, phqPincode, phqAddress, phqImage }) => {
  return (
    <div className="station_profile">
      <div className="img">
        {phqImage && <img src={`data:image/jpeg;base64,${phqImage}`} alt="PHQ" />}
      </div>
      <div className="info">
        <h3 className="name">PHQ ID: <span className="phq_id">{phqId}</span></h3>
        <h3 className="pin_code">PINCODE: <span className="phq_pincode">{phqPincode}</span></h3>
        <h3 className="post">Address: <span className="phq_address">{phqAddress}</span></h3>
      </div>
    </div>
  );
};

export default Profile;
