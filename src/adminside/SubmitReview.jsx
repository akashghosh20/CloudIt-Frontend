// src/SubmitReview.jsx

import axios from 'axios';
import React, { useState } from 'react';
import './App.css'; // Optional: For custom styling

const SubmitReview = () => {
    // State for Churn Prediction
    const [churnData, setChurnData] = useState({
        age: '',
        gender: 'Male',
        total_purchases: '',
        membership_duration_months: '',
        avg_purchase_value: ''
    });
    const [churnResult, setChurnResult] = useState(null);
    const [churnError, setChurnError] = useState(null);

    // State for Review Sentiment Analysis
    const [reviewContent, setReviewContent] = useState('');
    const [reviewResult, setReviewResult] = useState(null);
    const [reviewError, setReviewError] = useState(null);

    // State for Sales Forecasting
    const [dateInput, setDateInput] = useState('');
    const [dateResult, setDateResult] = useState(null);
    const [dateError, setDateError] = useState(null);

    // Handler for Churn Prediction Form
    const handleChurnChange = (e) => {
        const { name, value } = e.target;
        setChurnData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleChurnSubmit = async (e) => {
        e.preventDefault();
        setChurnResult(null);
        setChurnError(null);

        // Validate inputs
        const { age, gender, total_purchases, membership_duration_months, avg_purchase_value } = churnData;
        if (!age || !gender || !total_purchases || !membership_duration_months || !avg_purchase_value) {
            setChurnError('Please fill in all fields.');
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/predict/churn/', {
                age: parseFloat(age),
                gender,
                total_purchases: parseInt(total_purchases),
                membership_duration_months: parseInt(membership_duration_months),
                avg_purchase_value: parseFloat(avg_purchase_value)
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            setChurnResult(response.data.prediction);
        } catch (error) {
            console.error('Churn Prediction Error:', error);
            if (error.response && error.response.data && error.response.data.detail) {
                setChurnError(JSON.stringify(error.response.data.detail));
            } else {
                setChurnError('An error occurred while predicting churn.');
            }
        }
    };

    // Handler for Review Sentiment Analysis Form
    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        setReviewResult(null);
        setReviewError(null);

        if (!reviewContent.trim()) {
            setReviewError('Please enter a review.');
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/predict/review', {
                content: reviewContent
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const prediction = response.data.prediction;
            let sentiment = '';
            if (prediction >= 4) {
                sentiment = 'Positive';
            } else if (prediction >= 2) {
                sentiment = 'Neutral';
            } else {
                sentiment = 'Negative';
            }

            setReviewResult(`${sentiment} (${prediction} Stars)`);
        } catch (error) {
            console.error('Review Prediction Error:', error);
            if (error.response && error.response.data && error.response.data.detail) {
                setReviewError(JSON.stringify(error.response.data.detail));
            } else {
                setReviewError('An error occurred while predicting review sentiment.');
            }
        }
    };

    // Handler for Sales Forecasting Form
    const handleDateSubmit = async (e) => {
        e.preventDefault();
        setDateResult(null);
        setDateError(null);

        // Validate inputs
        if (!dateInput) {
            setDateError('Please enter a date.');
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/forecast/sales/', {
                date: dateInput
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const forecast = response.data.forecast;
            setDateResult(`Predicted Sales: ${forecast.toFixed(2)}`);
        } catch (error) {
            console.error('Sales Forecasting Error:', error);
            if (error.response && error.response.data && error.response.data.detail) {
                setDateError(JSON.stringify(error.response.data.detail));
            } else {
                setDateError('An error occurred while fetching the forecast.');
            }
        }
    };

    return (
        <div className="container">
            <h1>Churn Prediction, Review Sentiment Analysis, and Sales Forecasting</h1>

            {/* Churn Prediction Section */}
            <div className="section">
                <h2>Churn Prediction</h2>
                <form onSubmit={handleChurnSubmit}>
                    <div className="form-group">
                        <label>Age:</label>
                        <input
                            type="number"
                            name="age"
                            value={churnData.age}
                            onChange={handleChurnChange}
                            step="0.1"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Gender:</label>
                        <select
                            name="gender"
                            value={churnData.gender}
                            onChange={handleChurnChange}
                            required
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Total Purchases:</label>
                        <input
                            type="number"
                            name="total_purchases"
                            value={churnData.total_purchases}
                            onChange={handleChurnChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Membership Duration (Months):</label>
                        <input
                            type="number"
                            name="membership_duration_months"
                            value={churnData.membership_duration_months}
                            onChange={handleChurnChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Average Purchase Value:</label>
                        <input
                            type="number"
                            name="avg_purchase_value"
                            value={churnData.avg_purchase_value}
                            onChange={handleChurnChange}
                            step="0.01"
                            required
                        />
                    </div>

                    <button type="submit">Predict Churn</button>
                </form>

                {churnResult && <div className="result">Prediction: {churnResult}</div>}
                {churnError && <div className="error">{churnError}</div>}
            </div>

            {/* Review Sentiment Analysis Section */}
            <div className="section">
                <h2>Review Sentiment Analysis</h2>
                <form onSubmit={handleReviewSubmit}>
                    <div className="form-group">
                        <label>Review Content:</label>
                        <textarea
                            value={reviewContent}
                            onChange={(e) => setReviewContent(e.target.value)}
                            placeholder="Enter your review here..."
                            rows="4"
                            required
                        />
                    </div>
                    <button type="submit">Analyze Review</button>
                </form>

                {reviewResult && <div className="result">Sentiment: {reviewResult}</div>}
                {reviewError && <div className="error">{reviewError}</div>}
            </div>

            {/* Sales Forecasting Section */}
            <div className="section">
                <h2>Sales Forecasting</h2>
                <form onSubmit={handleDateSubmit}>
                    <div className="form-group">
                        <label>Date:</label>
                        <input
                            type="date"
                            value={dateInput}
                            onChange={(e) => setDateInput(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Submit Date</button>
                </form>

                {dateResult && <div className="result">{dateResult}</div>}
                {dateError && <div className="error">{dateError}</div>}
            </div>
        </div>
    );

};

export default SubmitReview;
