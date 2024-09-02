import Logo from './Logo';
import Navbar from './Navbar';


const Header = () => {
    return (
        <>
        <div className='flex flex-row justify-between px-5'>
            <Logo></Logo>
            <Navbar></Navbar>
        </div>
        </>
    );
};

export default Header;