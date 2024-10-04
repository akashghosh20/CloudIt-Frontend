// src/SalesForecast.js

import axios from 'axios';
import React, { useState } from 'react';

const SalesForecast = () => {
    const [periods, setPeriods] = useState(1); // Default to 1 period
    const [forecast, setForecast] = useState([]);
    const [error, setError] = useState('');

    const handleForecast = async () => {
        setError('');
        try {
            const response = await axios.post('http://10.170.248.195:8000/forecast/sales', {
                periods: periods,
            });
            setForecast(response.data.forecast);
        } catch (err) {
            setError('Error fetching forecast: ' + (err.response?.data?.detail || err.message));
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Sales Forecasting</h1>
            <label>
                Number of Periods:
                <input
                    type="number"
                    value={periods}
                    onChange={(e) => setPeriods(e.target.value)}
                    min="1"
                />
            </label>
            <button onClick={handleForecast}>Get Forecast</button>

            {error && <div style={{ color: 'red' }}>{error}</div>}

            {forecast.length > 0 && (
                <div>
                    <h2>Forecast Results</h2>
                    <ul>
                        {forecast.map((amount, index) => (
                            <li key={index}>Period {index + 1}: {amount}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SalesForecast;
