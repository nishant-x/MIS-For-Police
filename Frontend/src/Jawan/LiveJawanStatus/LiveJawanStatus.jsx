import React, { useState,useEffect } from 'react';
import axios from "axios"
import { useLocation } from 'react-router-dom';
// import './home.css';

const StatusTracker = () => {
  
  const [status, setStatus] = useState('unavailable'); 
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(true); 

    const locations = useLocation();
    const user = locations.state?.user;
    const jawanId = user.id;
    // console.log("User in Status JawanDashboard:", user.id);

    
  useEffect(() => {
    const fetchJawanStatus = async () => {
      setIsFetching(true);
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_LINK}/api/livestatus/${jawanId}`);

        console.log("responce data" , response.data);        
        // Set the status from backend data
        if (response.data.data) {
          setStatus(response.data.data.status);
          
          // Set location if available
          if (response.data.data.location) {
            setLocation({
              lat: response.data.data.location.coordinates[1],
              lng: response.data.data.location.coordinates[0],
              address: response.data.data.location.address,
              timestamp: new Date(response.data.data.timestamp)
            });
          }
        }
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch status');
        // Keep default status if fetch fails
      } finally {
        setIsFetching(false);
      }
    };

    if (jawanId) {
      fetchJawanStatus();
    }
  }, [jawanId]); 

      
  // Get address from coordinates
  const getAddressFromCoords = async (lat, lng) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_LINK}/api/livestatus/geocode?lat=${lat}&lon=${lng}`);
  const data = await response.json();


  // console.log("data" , data)
  return data.display_name;
};

  // Get current position
  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        });
      } else {
        reject(new Error("Geolocation not supported"));
      }
    });
  };

  // Handle status change
  const handleStatusChange = async (newStatus) => {
    if (status === newStatus) return; // Skip if same status selected
    
    setStatus(newStatus);
    setError('');

    if (newStatus === 'active_unavailable') {
      setIsLoading(true);
      try {
        const position = await getCurrentPosition();
        const { latitude, longitude } = position.coords;
        const address = await getAddressFromCoords(latitude, longitude);

        setLocation({
          lat: latitude,
          lng: longitude,
          address,
          timestamp: new Date()
        });

        await updateBackendStatus(newStatus, latitude, longitude, address);
      } catch (err) {
        setError("Failed to get location. Enable GPS and try again.");
        setStatus('unavailable'); // Revert to unavailable on error
      } finally {
        setIsLoading(false);
      }
    } else {
      await updateBackendStatus(newStatus);
    }
  };

 

  // Send data to backend
  const updateBackendStatus = async (status, lat, lng, address) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_LINK}/api/livestatus/update`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jawanId: user.id, 
          status,
          location: lat && lng ? { lat, lng, address } : null
        })
      });
      if (!response.ok) throw new Error("Failed to update status");
    } catch (err) {
      setError("Network error. Status not saved.");
    }
  };

  return (
    <div className="status-tracker">
      <h2>Police Jawan Status Tracker</h2>
      
      <div className="status-options">
        <label className={`radio-option ${status === 'active_available' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="jawanStatus"
            value="active_available"
            checked={status === 'active_available'}
            onChange={() => handleStatusChange('active_available')}
            disabled={isLoading}
          />
          <span className="radio-indicator"></span>
          <span className="radio-label"> Active & Available</span>
        </label>

        <label className={`radio-option ${status === 'active_unavailable' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="jawanStatus"
            value="active_unavailable"
            checked={status === 'active_unavailable'}
            onChange={() => handleStatusChange('active_unavailable')}
            disabled={isLoading}
          />
          <span className="radio-indicator"></span>
          <span className="radio-label">
            {isLoading && status === 'active_unavailable' ? '🔄 Getting Location...' : ' Active & Unavailable'}
          </span>
        </label>

        <label className={`radio-option ${status === 'unavailable' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="jawanStatus"
            value="unavailable"
            checked={status === 'unavailable'}
            onChange={() => handleStatusChange('unavailable')}
            disabled={isLoading}
          />
          <span className="radio-indicator"></span>
          <span className="radio-label"> Unavailable</span>
        </label>
      </div>

      {error && <p className="error">{error}</p>}

      {status === 'active_unavailable' && location && (
        <div className="location-details">
          <h3>📍 Current Location</h3>
          <p><strong>Time:</strong> {location.timestamp.toLocaleString()}</p>
          <p><strong>Coordinates:</strong> {location.lat.toFixed(4)}, {location.lng.toFixed(4)}</p>
          <p><strong>Address:</strong> {location.address}</p>
          <a 
            href={`https://www.openstreetmap.org/?mlat=${location.lat}&mlon=${location.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            View on OpenStreetMap →
          </a>
        </div>
      )}
    </div>
  );
};

export default StatusTracker;