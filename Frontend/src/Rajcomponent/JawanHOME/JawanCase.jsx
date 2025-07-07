import React from 'react';
import './CaseSection.css';

const CaseSection = ({ cases }) => {
    return (
        <div className="case" id="case">
            <h2>Case Under Jawan</h2>
            <div className="cases_details">
                <div className="total_case cases">Total Cases <span>{cases.total}</span></div>
                <div className="complete_case cases">Completed Cases <span>{cases.completed}</span></div>
                <div className="incomplete_case cases">Incomplete Cases <span>{cases.incomplete}</span></div>
            </div>
        </div>
    );
};

export default CaseSection;
