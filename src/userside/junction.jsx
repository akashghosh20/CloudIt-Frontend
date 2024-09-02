import React from 'react';
import { NavLink } from 'react-router-dom';
const Junction = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen gap-4'>
          
          <NavLink className="btn btn-neutral" to="/admin">Admin part</NavLink>
          <NavLink className="btn btn-neutral" to="/home">User part</NavLink>
                
        </div>
    );
};

export default Junction;