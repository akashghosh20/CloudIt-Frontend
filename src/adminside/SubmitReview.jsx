// src/components/SubmitReview.js

import axios from 'axios';
import React, { useState } from 'react';

const SubmitReview = () => {
  const [content, setContent] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPrediction(null);
    setError(null);

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', {
        content: content,
      });
      setPrediction(response.data.prediction);
    } catch (err) {
      console.error(err);
      setError('Failed to get prediction.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="submit-review">
      <h2>Submit a Review for Prediction</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter your review here..."
          rows="4"
          cols="50"
          required
        ></textarea>
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Predicting...' : 'Get Prediction'}
        </button>
      </form>
      {prediction !== null && (
        <p>
          <strong>Prediction:</strong> {prediction} Stars
        </p>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default SubmitReview;
