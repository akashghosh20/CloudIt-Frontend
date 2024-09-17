import axios from 'axios';
import React, { useState } from 'react';
import { FaRegQuestionCircle } from "react-icons/fa";
import Footer from '../footer/footer';
import Navber from '../navBer/navber';

const Requireddetails = () => {
    const [projectTitle, setProjectTitle] = useState('');
    const [projectBrief, setProjectBrief] = useState('');
    const [file, setFile] = useState(null);

    // Function to handle file input changes
    const handleFileChange = (e) => {
        setFile(e.target.files[0]); // Set the selected file to state
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('projectTitle', projectTitle);
        formData.append('projectBrief', projectBrief);
        formData.append('file', file); // Append the file itself
        formData.append('packageName', 'startup - basi');
        formData.append('price', 19.99);
        formData.append('total', 19.99);

        try {
            await axios.post('http://localhost:5000/orders', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Order submitted successfully!');
        } catch (error) {
            console.error('Error submitting order:', error);
            alert('Failed to submit order.');
        }
    };

    return (
        <div className='h-screen'>
            <Navber />
            <div className='w-full flex flex-row justify-center items-center align-middle mx-5'>
                <div className='lg:w-4/5 flex flex-row justify-center items-start align-middle mx-5'>
                    <div className='lg:w-2/3 w-auto shadow-lg p-10'>
                        <div className='text-4xl font-bold mb-5'>Project Details</div>
                        <div className='text-2xl font-bold mb-2'>start up-basi-express</div>
                        <div className='text-lg font-bold mb-1'>logo + 1000 page likes</div>
                        <form onSubmit={handleSubmit}>
                            <label className="form-control">
                                <div className="label flex flex-row justify-start">
                                    <span className="label-text font-bold">Requirements</span>
                                    <div className="tooltip" data-tip="You will need to add all the required details and files for best results">
                                        <FaRegQuestionCircle className='ml-2' />
                                    </div>
                                </div>
                                <div className="border-2 p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                                    Facere eos incidunt<br />inventore rem reiciendis?<br /> Officia ullam harum et numquam possimus<br />eligendi cum a iure nostrum non iusto<br /> ipsum, illo aliquid.</div>
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text font-bold">Project Title</span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full"
                                    value={projectTitle}
                                    onChange={(e) => setProjectTitle(e.target.value)}
                                />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text font-bold">Project Brief</span>
                                </div>
                                <textarea
                                    className="textarea textarea-bordered"
                                    placeholder="Bio"
                                    value={projectBrief}
                                    onChange={(e) => setProjectBrief(e.target.value)}
                                ></textarea>
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Pick a file</span>
                                </div>
                                <input
                                    type="file"
                                    className="file-input file-input-bordered w-full max-w-xs"
                                    onChange={handleFileChange} // Attach handler here
                                />
                            </label>
                            <div className='w-full flex my-4 justify-center items-center'>
                                <button type="submit" className="btn btn-wide bg-black text-white">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className='lg:w-1/3 w-full bg-blue-50 flex flex-row justify-center items-center mx-5'>
                        <div className='lg:w-full w-auto shadow-lg p-10'>
                            <div className='text-4xl font-bold mb-10'>Bill</div>
                            <div className='flex flex-row justify-between font-bold mb-4'><p>Package name</p><p>Price</p></div>
                            <div className='flex flex-row justify-between font-bold mb-4'><p>startup - basi</p><p>19.99</p></div>
                            <hr />
                            <div className='flex flex-row justify-between mb-4'><p>Total:</p><p className='font-bold'>$19.99</p></div>
                            <div className='flex flex-row justify-between mb-4'><p>Startup - basi</p><p className='font-bold'>19.99</p></div>
                            <div className='flex flex-row justify-between mb-4'>
                                <button className="bg-black text-white p-2 rounded-lg">Go Express</button>
                            </div>
                            <div className='mb-4'>
                                <label className="input input-bordered flex items-center pl-2 pr-1">
                                    <input type="text" className="grow" placeholder="Coupon code" />
                                    <button className="bg-black text-white p-2 rounded-lg">Apply Coupon</button>
                                </label>
                            </div>
                            <hr />
                            <div className='flex flex-row justify-between mb-4'><p>Net total:</p><p className='font-bold'>$19.99</p></div>
                            <div className='flex flex-row justify-between mb-10'><p>You save:</p><p className=''>($19.99)</p></div>
                            <div><button className="bg-black text-white p-2 rounded-lg">Pay with Paytm</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Requireddetails;
