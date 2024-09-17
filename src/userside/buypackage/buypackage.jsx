import React, { useEffect, useState } from 'react';
import { FaPhoneAlt, FaRegAddressBook, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Navber from '../navBer/navber';

const Buypackage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    // Check if the user is logged in and check for auto-logout after 1 day
    useEffect(() => {
        const userInfo = localStorage.getItem('user');
        const loginTime = localStorage.getItem('loginTime');

        if (userInfo && loginTime) {
            const currentTime = new Date().getTime();
            const loginTimeMillis = new Date(loginTime).getTime();
            
            // Check if more than 1 day has passed
            if (currentTime - loginTimeMillis > 24 * 60 * 60 * 1000) {
                // Log the user out after 1 day
                localStorage.removeItem('user');
                localStorage.removeItem('loginTime');
                setIsLoggedIn(false);
                navigate('/login');  // Redirect to login
            } else {
                setIsLoggedIn(true);
            }
        } else {
            setIsLoggedIn(false);
        }
    }, [navigate]);

    // If the user is logged in, redirect them to another screen (e.g., dashboard or required details page)
    useEffect(() => {
        if (isLoggedIn) {
            navigate('/requireddetails');
        }
    }, [isLoggedIn, navigate]);

    const handleSignUp = () => {
        // After successful sign-up, save user data to localStorage and the current time
        const userData = {
            name: 'User Name',  // Replace with real data
            email: 'user@example.com',  // Replace with real data
            // Other user details...
        };

        // Save user info and login time in localStorage
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('loginTime', new Date().toISOString());

        // Redirect to the required details page after sign up
        navigate('/requireddetails');
    };

    return (
        <div className='h-screen'>
            <Navber />
            <div>
                <div className='lg:w-1/2 w-full h-full flex flex-row justify-center items-center'>
                    <div className='lg:w-1/2 w-auto bg-white shadow-md h-auto my-20 p-10'>
                        <div className='text-4xl font-bold mb-10'>Sign Up</div>
                        <label className="input input-bordered flex items-center gap-2 mb-4">
                            <FaUser /> <input type="text" className="grow" placeholder="Enter your name" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4">
                            <MdEmail /><input type="text" className="grow" placeholder="Enter your email" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4">
                            <RiLockPasswordLine /> <input type="password" className="grow" placeholder="Password" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4">
                            <RiLockPasswordLine /> <input type="password" className="grow" placeholder="Retype password" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4">
                            <FaLocationDot />
                            <input type="text" className="grow" placeholder="Country" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4">
                            <FaRegAddressBook /> <input type="text" className="grow" placeholder="Address" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mb-4">
                            <FaPhoneAlt /> <input type="text" className="grow" placeholder="Phone" />
                        </label>

                        <div className='text-end my-2 text-blue-500'>
                            Already have an account? <Link to='/login' className='text-blue-600 underline'>Sign In</Link>
                        </div>

                        <div>
                            <button onClick={handleSignUp} className='btn w-full bg-blue-500 text-white'>
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Buypackage;
