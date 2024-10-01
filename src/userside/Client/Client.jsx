import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Client = () => {
    const location = useLocation();
    const { user } = location.state || {}; // Extract user from the passed state

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (user) {
            // Fetch the user's orders using their email
            fetch(`http://localhost:5000/ordersMatch?email=${user.email}`, {
                headers: {
                    'Cache-Control': 'no-cache',
                }
            })
            .then(response => {
                console.log('Raw response:', response);

                if (!response.ok) {
                    // If response status is not OK, throw an error
                    throw new Error(`Failed to fetch orders: ${response.statusText}`);
                }
                
                return response.json(); // Ensure you're converting the response to JSON
            })
            .then(data => {
                console.log('Parsed data:', data);
                setOrders(data.orders); // Ensure 'orders' exists in the data
                setLoading(false);
            })
            .catch(error => {
                console.error('Fetch error:', error); // Log the error for more information
                setError('Failed to fetch orders');
                setLoading(false);
            });
        }
    }, [user]);

    if (!user) {
        return <div>No user data found.</div>;
    }

    if (loading) {
        return <div>Loading your orders...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Welcome, {user.name}!</h1>
            <p>Email: {user.email}</p>

            <h2>Your Orders:</h2>
            {orders.length > 0 ? (
                <ul>
                    {orders.map((order) => (
                        <li key={order.id}>
                            <strong>Project Title:</strong> {order.projectName}<br />
                            <strong>Price:</strong> ${order.price.toFixed(2)}<br />
                            <strong>Date:</strong> {order.createdAt}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>You have no orders.</p>
            )}
        </div>
    );
};

export default Client;
