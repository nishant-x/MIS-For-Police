import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchJawan } from '../api/api';

const TransferSearch = () => {
  const [badge, setBadge] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await searchJawan(badge);
      const foundBadge = res.data.badge;
      sessionStorage.setItem('badge', foundBadge); // optional if you want to store it temporarily
      navigate('/transfer/details'); // redirect to transfer form page
    } catch (err) {
      setError('Invalid Badge Number');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Jawan Transfer Order</h1>
      <form onSubmit={handleSearch}>
        <label className="block mb-2 font-semibold">Enter Jawan Badge Number</label>
        <input
          type="text"
          name="badge"
          value={badge}
          onChange={(e) => setBadge(e.target.value)}
          placeholder="Badge number"
          required
          className="w-full border border-gray-300 p-2 rounded mb-3"
        />
        {error && <div className="text-red-600 mb-3">{error}</div>}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-800 text-white w-full py-2 rounded"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default TransferSearch;
