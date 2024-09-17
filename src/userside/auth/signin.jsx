import axios from 'axios'; // For making API calls
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Navber from '../navBer/navber';

const Signin = () => {
    const [email, setEmail] = useState(''); // Email state
    const [password, setPassword] = useState(''); // Password state
    const [error, setError] = useState(''); // Error message state
    const [loading, setLoading] = useState(false); // Loading state
    const navigate = useNavigate(); // Navigation hook

    // Handle login functionality
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            const { token, user } = response.data; // Assuming response includes user data

            // Store the token in localStorage with an expiration time (24 hours)
            const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now
            localStorage.setItem('token', token);
            localStorage.setItem('token_expiration', expirationTime);

            // Reset the form after successful login
            setEmail('');
            setPassword('');

            // Navigate to the Client page with user data
            navigate('/client', { state: { user } });
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Invalid credentials. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Function to check token expiration and clear it if expired
    const checkTokenExpiration = () => {
        const expiration = localStorage.getItem('token_expiration');
        const now = new Date().getTime();

        if (expiration && now > expiration) {
            localStorage.removeItem('token');
            localStorage.removeItem('token_expiration');
            setEmail(''); // Clear input if token expired
            setPassword('');
        }
    };

    // Call checkTokenExpiration to validate token on page load
    useEffect(() => {
        checkTokenExpiration();
    }, []);

    return (
        <div className='h-screen flex flex-col'>
            <Navber />
            <div className='flex flex-grow lg:flex-row flex-col items-center justify-center'>
                <div className='lg:w-1/2 w-full flex justify-center items-center p-4'>
                    <div className='lg:w-1/2 w-full bg-white shadow-md p-10 rounded'>
                        <h2 className='text-4xl font-bold mb-6'>Sign In</h2>
                        <form onSubmit={handleLogin}>
                            {/* Email input */}
                            <label className="input input-bordered flex items-center gap-2 mb-4" aria-label="Email">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input
                                    type="email"
                                    className="grow"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </label>

                            {/* Password input */}
                            <label className="input input-bordered flex items-center gap-2 mb-4" aria-label="Password">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                    <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                                </svg>
                                <input
                                    type="password"
                                    className="grow"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </label>

                            {/* Error message */}
                            {error && <div className="text-red-500 my-2">{error}</div>}

                            <div className='text-end my-2 text-blue-500'>Forgot your password?</div>

                            {/* Display loading spinner when logging in */}
                            <button type="submit" className='btn w-full bg-blue-500 text-white' disabled={loading}>
                                {loading ? 'Signing in...' : 'Sign In'}
                            </button>
                        </form>

                        {/* Link to signup */}
                        <div className='text-center my-2'>
                            {`Don't have an account?`} <Link to="/signup" className='text-blue-500'>Sign Up</Link>
                        </div>
                    </div>
                </div>

                {/* Placeholder for an image */}
                <div className='lg:block hidden lg:w-1/2 w-full'>
                    <div className='h-full bg-cover bg-center' style={{ backgroundImage: 'url(https://example.com/image.jpg)' }} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Signin;
