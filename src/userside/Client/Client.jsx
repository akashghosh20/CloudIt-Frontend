import { useLocation } from 'react-router-dom';

const Client = () => {
    const location = useLocation();
    const { user } = location.state || {}; // Extract user from the passed state

    if (!user) {
        return <div>No user data found.</div>;
    }

    return (
        <div>
            <h1>Welcome, {user.name}!</h1>
            <p>Email: {user.email}</p>
            {/* Render more user info as needed */}
        </div>
    );
};

export default Client;
