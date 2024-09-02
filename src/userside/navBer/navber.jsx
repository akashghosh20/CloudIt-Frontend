import logo from '/assets/logo.png'
import { AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import './navber.css';
const Navber = () => {
    return (
        <nav className="relative navbar bg-base-100">
        <div className="navbar-start">
<img className='w-24  lg:w-40 ml-2' src={logo} alt={logo} />
        </div>
        <div className="navbar-end hidden  lg:flex">
          <ul className="px-1 ">
                <NavLink className='text-lg w-40 mx-5' to="/home">Home</NavLink>
                <NavLink className='text-lg  w-40 mx-5' to="/aboutus">About us</NavLink>
                <NavLink className='text-lg  w-40 mx-5' to="/ourteam">Our Team</NavLink>
                <NavLink className='text-lg  w-40 mx-5' to="/career">Career</NavLink>
                <NavLink className='text-lg  w-40 mx-5' to="/signin">Sign In</NavLink>
          </ul>
        </div>
        <div className="navbar-end drawer drawer-end lg:hidden">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
  
    <label htmlFor="my-drawer-4" className="drawer-button btn "><AiOutlineMenu></AiOutlineMenu></label>
  </div> 
  <div className="drawer-side z-30">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-40 min-h-full bg-base-200 text-base-content">
     
    <li><a>Home</a></li>
            <li><a>About us</a></li>
            <li><a>Plans</a></li>
            <li><a>Teams</a></li>
            <li><a>Services</a></li>
            <li><NavLink  to="/signin">Sign In</NavLink></li>
    </ul>
  </div>
</div>
       
      </nav>
    );
};

export default Navber;