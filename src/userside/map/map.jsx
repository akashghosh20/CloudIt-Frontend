import  { useState } from 'react';

import worldMap from '/assets/world.svg'
import { IoIosLocate } from "react-icons/io";





const Map = () => {

  const [hoverStates, setHoverStates] = useState({
    icon1: false,
    icon2: false,
  });

  const handleMouseEnterIcon = (iconId) => {
    setHoverStates({ ...hoverStates, [iconId]: true });
  };

  const handleMouseLeaveIcon = (iconId) => {
    setHoverStates({ ...hoverStates, [iconId]: false });
  };

    return (
        <div className='w-screen h-screen  flex flex-col overflow-x-auto items-center justify-center my-3'>
           
            
            <div className="relative  h-[500px] w-[1200px] "> 
            <img src={worldMap} alt="World Map - Technologies We Offer" className="h-[500px] w-[1200px] absolute top-0 left-0" />
            <div className="h-500 w-1200 relative top-0 left-0 z-40">
          <IoIosLocate
            onMouseEnter={() => handleMouseEnterIcon('icon1')}
            onMouseLeave={() => handleMouseLeaveIcon('icon1')}
            className="h-6 w-6 relative inline-block text-blue-700 top-[100px] left-[780px] "
          />
            {hoverStates.icon1 && (
              <div className="tooltip absolute flex flex-row justify-start items-center bg-white shadow-xl rounded-lg top-[100px] left-[810px] h-20 w-60">
              <div> 
                  <img className="avatar ml-2 w-14 h-14 rounded" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                  </div>   
                      <div className='flex flex-col ml-2 justify-center items-start'>
                <div>stars</div>
                <div className='text-sm font-bold'>Nial Armstrom</div>
                <div className='text-sm '>dsasad</div>
              </div>
              

              </div>
            )}

            <IoIosLocate
              onMouseEnter={() => handleMouseEnterIcon('icon2')} onMouseLeave={() => handleMouseLeaveIcon('icon2')}
              className="h-6 w-6 relative inline-block text-blue-700 top-[200px] left-[880px] "
            />
            {hoverStates.icon2 && (
              <div className="tooltip absolute flex flex-row justify-start items-center bg-white shadow-xl rounded-lg top-[200px] left-[930px] h-20 w-60">
              <div> 
                <img className="avatar ml-2 w-14 h-14 rounded" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                </div>   
                    <div className='flex flex-col ml-2 justify-center items-start'>
              <div>stars</div>
              <div className='text-sm font-bold'>Nial Armstrom</div>
              <div className='text-sm '>dsasad</div>
            </div>
            

            </div>
            )}
          </div>
            </div>
            </div>
       
      )
};

export default Map;