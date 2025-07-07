import React from 'react';

const StationOrderPanel = () => (
  <div className="station_order" id="station_order">
    <h2>Order Panel</h2>
    <div className="order_message">
      <p>Send an order request to jawaan & station.</p>
      <button onClick={() => window.location.href = '/orderpanelforstation'}>Send Order</button>
      <p>Check your email to get the order details.</p>
      <button onClick={() => window.location.href = 'mailto:email@example.com'}>Check Order</button>
    </div>
  </div>
);

export default StationOrderPanel;