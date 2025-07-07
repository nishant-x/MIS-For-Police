import React from 'react';
import './ActiveStatus.css';

const ActiveStatus = ({ status, setStatus }) => {
    return (
        <div className="active_status" id="active-status">
            <h2>ACTIVE STATUS</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="radio"
                    name="active"
                    id="active"
                    value="active"
                    checked={status === 'active'}
                    onChange={() => setStatus('active')}
                />
                <label htmlFor="active">ACTIVE AND AVAILABLE IN STATION</label>
                <input
                    type="radio"
                    name="active"
                    id="active-unavailable"
                    value="active-unavailable"
                    checked={status === 'active-unavailable'}
                    onChange={() => setStatus('active-unavailable')}
                />
                <label htmlFor="active-unavailable">ACTIVE AND UNAVAILABLE IN STATION</label>
                <input
                    type="radio"
                    name="active"
                    id="unactive"
                    value="unactive"
                    checked={status === 'unactive'}
                    onChange={() => setStatus('unactive')}
                />
                <label htmlFor="unactive">INACTIVE</label>
                <div className="order_message">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ActiveStatus;
