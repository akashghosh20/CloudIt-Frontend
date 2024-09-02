import { Outlet } from 'react-router-dom';
import Logo from './Header/Logo';
import Sidebar from './Header/Sidebar';

const admin = () => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-7 lg:grid-cols-7 mx-5'>
                <div className='col-span-1'>
                <Logo></Logo>
                <Sidebar></Sidebar>
                </div>
                <div className='col-span-6 py-10'>
                <Outlet></Outlet>                    
                </div>

            </div>
        </>
    );
};

export default admin;