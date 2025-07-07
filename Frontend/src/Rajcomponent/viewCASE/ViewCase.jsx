import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const CaseReport = () => {
  const [caseDetails, setCaseDetails] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const caseNumber = new URLSearchParams(location.search).get('case_number');

  useEffect(() => {
    if (!caseNumber) {
      alert('No case number provided');
      return navigate('/case_list_station');
    }

    axios
      .post('/api/case/details', { case_number: caseNumber })
      .then((res) => setCaseDetails(res.data))
      .catch((err) => {
        alert('Case not found');
        navigate('/case_list_station');
      });
  }, [caseNumber, navigate]);

  const handleComplete = async () => {
    try {
      await axios.post('/api/case/complete', { case_number: caseNumber });
      alert('Case marked as completed.');
      navigate('/station_home');
    } catch (err) {
      alert('Failed to complete the case');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-5 bg-white rounded shadow-lg mt-6">
      <h2 className="text-2xl font-bold text-center mb-6">CASE REPORT</h2>
      <div className="space-y-4">
        <p><strong>Case Number:</strong> {caseNumber}</p>

        <div>
          <h3 className="text-lg font-semibold">Incident Report</h3>
          <p className="bg-gray-100 p-3 rounded">{caseDetails.incident_report}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Investigation Notes</h3>
          <p className="bg-gray-100 p-3 rounded">{caseDetails.investigation_notes}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Witness Statement</h3>
          <p className="bg-gray-100 p-3 rounded">{caseDetails.witness_statement}</p>
        </div>

        <p className="text-red-600 font-medium">
          *Note: Once you mark the case as completed, it cannot be undone.
        </p>

        <button
          onClick={handleComplete}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded mt-4"
        >
          Mark Case as Completed
        </button>
      </div>
    </div>
  );
};

export default CaseReport;
