import React from 'react';

const StationProfile = ({ station }) => {
  const { name, id, address, pincode, image } = station || {};
  return (
    <div className="station_profile" id="station_profile">
      <div className="img">
        {image && <img src={`data:image/jpeg;base64,${image}`} alt="Station" />}
      </div>
      <div className="info">
        <h3 className="name">Name: <span className="jawan_name">{name}</span></h3>
        <h3 className="id">Station ID: <span className="jawan_id">{id}</span></h3>
        <h3 className="regement_no">Location: <span className="jawan_reg">{address}</span></h3>
        <h3 className="post">Pincode: <span className="jawan_post">{pincode}</span></h3>
      </div>
    </div>
  );
};

export default StationProfile;
