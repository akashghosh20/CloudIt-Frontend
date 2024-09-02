import React from 'react';

const Services = () => {
    return (
        <div className='w-screen flex flex-col items-center justify-center my-3'>
        <div className='text-4xl font-bold my-8'>We Offer a Wide range of Online Services </div>
        <div className='w-screen flex flex-row flex-wrap justify-evenly '>
            <div className="card w-96 bg-base-100 shadow-xl image-full mb-4 lg:mb-10">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body flex flex-col justify-center items-center text-center">
                    <h2 className="card-title">Graphic designing</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div> 
            <div className="card w-96 bg-base-100 shadow-xl image-full mb-4 lg:mb-10">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body flex flex-col justify-center items-center text-center">
                    <h2 className="card-title">Social Media Marketing</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div> 
            <div className="card w-96 bg-base-100 shadow-xl image-full mb-4 lg:mb-10">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body flex flex-col justify-center items-center text-center">
                    <h2 className="card-title">App Development</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div> 
        </div> 
        <div className='w-screen flex flex-row flex-wrap justify-evenly  '>
            <div className="card w-96 bg-base-100 shadow-xl image-full mb-4 lg:mb-10">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body flex flex-col justify-center items-center text-center">
                    <h2 className="card-title">Web Development</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div> 
            <div className="card w-96 bg-base-100 shadow-xl image-full mb-4 lg:mb-10">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body flex flex-col justify-center items-center text-center">
                    <h2 className="card-title">Video Editing And Advertising</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div> 
          
        </div> 
        
        </div> 
    );
};

export default Services;