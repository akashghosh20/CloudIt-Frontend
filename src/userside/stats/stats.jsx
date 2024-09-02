/* eslint-disable no-unused-vars */
import React from 'react';

const Stats = () => {
    return (
        <div className='w-screen  flex flex-col items-center justify-center my-3'>
            <div className='text-4xl font-bold my-8'>Statistics in a view </div>
            <div className='w-screen flex flex-row flex-wrap justify-center my-3 '>
                <div className="card p-3 w-1/2   lg:w-96  flex flex-col  items-center text-center">
                    <div className='w-24 mb-3 h-24 border-[10px] lg:w-40 lg:h-40 rounded-full lg:border-[15px] border-blue-400 font-bold lg:text-[40px] flex flex-row items-center justify-center'>3410+</div>
                    <h2 className="font-bold mb-3 lg:font-bold lg:text-2xl">Clients worldwide</h2>
                    <p className='w-3/4'>If a dog chews shoes whose shoes does he choose?</p>
              </div>
                <div className="card p-3 w-1/2   lg:w-96  flex flex-col  items-center text-center">
                    <div className='w-24 mb-3 h-24 border-[10px] lg:w-40 lg:h-40 rounded-full lg:border-[15px] border-blue-400 font-bold lg:text-[40px] flex flex-row items-center justify-center'>310+</div>
                    <h2 className="font-bold mb-3 lg:font-bold lg:text-2xl">Packages sold</h2>
                    <p className='w-3/4'>If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <div className="card p-3 w-1/2   lg:w-96  flex flex-col  items-center text-center">
                    <div className='w-24 mb-3 h-24 border-[10px] lg:w-40 lg:h-40 rounded-full lg:border-[15px] border-blue-400 font-bold lg:text-[40px] flex flex-row items-center justify-center'>240+</div>
                   <h2 className="font-bold mb-3 lg:font-bold lg:text-2xl">Reviews</h2>
                    <p className='w-3/4'>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                <div className="card p-3 w-1/2   lg:w-96  flex flex-col  items-center text-center">
                    <div className='w-24 mb-3 h-24 border-[10px] lg:w-40 lg:h-40 rounded-full lg:border-[15px] border-blue-400 font-bold lg:text-[40px] flex flex-row items-center justify-center'>1.2M</div>
                    <h2 className="font-bold mb-3 lg:font-bold lg:text-2xl">Website views </h2>
                    <p className='w-3/4'>If a dog chews shoes whose shoes does he choose?</p>


                </div>
            </div>
        </div>

    );
};

export default Stats;