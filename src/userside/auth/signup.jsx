import { useState } from 'react';
import { FaPhoneAlt, FaRegAddressBook, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Footer from '../footer/footer';
import Navber from '../navBer/navber';

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    retypePassword: '',
    country: '',
    address: '',
    phone: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.retypePassword) {
      setError('Passwords do not match');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError('Invalid email format');
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        setForm({
          name: '',
          email: '',
          password: '',
          retypePassword: '',
          country: '',
          address: '',
          phone: ''
        });
      } else {
        setError(data.message || 'An error occurred');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Network error. Please try again.');
    }
  };

  return (
    <div className='h-screen'>
      <Navber />
      <div className='w-full flex lg:flex-row flex-col items-center'>
        <div className='lg:w-1/2 w-full h-full flex flex-row justify-center items-center'>
          <div className='lg:w-1/2 w-auto bg-white shadow-md h-auto my-20 p-10'>
            <div className='text-4xl font-bold mb-10'>Sign Up</div>
            <form onSubmit={handleSubmit}>
              {error && <div className='text-red-500 mb-4'>{error}</div>}
              <label htmlFor="name" className="input input-bordered flex items-center gap-2 mb-4">
                <FaUser />
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="grow"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="email" className="input input-bordered flex items-center gap-2 mb-4">
                <MdEmail />
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="grow"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="password" className="input input-bordered flex items-center gap-2 mb-4">
                <RiLockPasswordLine />
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="grow"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="retypePassword" className="input input-bordered flex items-center gap-2 mb-4">
                <RiLockPasswordLine />
                <input
                  type="password"
                  id="retypePassword"
                  name="retypePassword"
                  className="grow"
                  placeholder="Retype password"
                  value={form.retypePassword}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="country" className="input input-bordered flex items-center gap-2 mb-4">
                <FaLocationDot />
                <input
                  type="text"
                  id="country"
                  name="country"
                  className="grow"
                  placeholder="Country"
                  value={form.country}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="address" className="input input-bordered flex items-center gap-2 mb-4">
                <FaRegAddressBook />
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="grow"
                  placeholder="Address"
                  value={form.address}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="phone" className="input input-bordered flex items-center gap-2 mb-4">
                <FaPhoneAlt />
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="grow"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </label>
              <div className='text-end my-2 text-blue-500'>Forgot your password?</div>
              <div>
                <button
                  type="submit"
                  className='btn w-full bg-blue-500 text-white hover:bg-blue-600 transition-colors'
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='lg:block hidden'>Image</div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
