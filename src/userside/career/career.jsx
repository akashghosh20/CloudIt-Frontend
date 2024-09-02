import React from 'react';
import Navber from '../navBer/navber';
import Footer from '../footer/footer';
import background from '/assets/under.png'


const Career = () => {
    return (
        <div className='h-screen'>
        <Navber/>
    
      
       
            <div className='flex flex-col  items-center h-screen'>
                <img src={background} className='mt-40'/>
                <p className='text-3xl mt-10 font-bold'>This page is under development</p></div>
           
 
          <Footer/>
        </div>
    );
};

export default Career;