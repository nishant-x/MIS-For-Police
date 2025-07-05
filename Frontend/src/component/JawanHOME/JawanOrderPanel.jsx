import React from 'react';
import './OrderPanel.css';

const OrderPanel = () => {
    return (
        <div className="order_panel" id="order-panel">
            <h2>ORDER PANEL</h2>
            <div className="order_message">
                <p>Check your email to get the order details.</p>
                <button onClick={() => window.location.href = 'mailto:email@example.com'}>Check Order</button>
            </div>
        </div>
    );
};

export default OrderPanel;
