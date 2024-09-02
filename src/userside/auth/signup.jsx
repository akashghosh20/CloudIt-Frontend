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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.retypePassword) {
      alert('Passwords do not match');
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
      alert(data.message);
    } catch (error) {
      console.error('Error:', error);
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
              <label className="input input-bordered flex items-center gap-2 mb-4">
                <FaUser />
                <input type="text" name="name" className="grow" placeholder="Enter your name" value={form.name} onChange={handleChange} />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-4">
                <MdEmail />
                <input type="text" name="email" className="grow" placeholder="Enter your email" value={form.email} onChange={handleChange} />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-4">
                <RiLockPasswordLine />
                <input type="password" name="password" className="grow" placeholder="password" value={form.password} onChange={handleChange} />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-4">
                <RiLockPasswordLine />
                <input type="password" name="retypePassword" className="grow" placeholder="retype password" value={form.retypePassword} onChange={handleChange} />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-4">
                <FaLocationDot />
                <input type="text" name="country" className="grow" placeholder="Country" value={form.country} onChange={handleChange} />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-4">
                <FaRegAddressBook />
                <input type="text" name="address" className="grow" placeholder="Address" value={form.address} onChange={handleChange} />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-4">
                <FaPhoneAlt />
                <input type="text" name="phone" className="grow" placeholder="Phone" value={form.phone} onChange={handleChange} />
              </label>
              <div className='text-end my-2 text-blue-500'>forgot your password?</div>
              <div>
                <button type="submit" className='btn w-full bg-blue-500 text-white'>Sign up</button>
              </div>
            </form>
          </div>
        </div>
        <div className='lg:block hidden'>image</div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
