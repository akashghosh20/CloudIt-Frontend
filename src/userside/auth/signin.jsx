import { Link  } from 'react-router-dom';
import Navber from '../navBer/navber';
import Footer from '../footer/footer';
const Signin = () => {
    return (
        <div className='h-screen'>
        <Navber/>
       <div className=' w-full flex lg:flex-row flex-col items-center h-2/3'>
        <div className='lg:w-1/2 w-fullh-full flex flex-row justify-center items-center'>
            <div className='lg:w-1/2 w-auto bg-white shadow-md h-96 p-10'>
                <div className='text-4xl font-bold mb-10'>Sign In</div>
                        <label className="input input-bordered flex items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <input type="text" className="grow" placeholder="Email" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                <input type="password" className="grow" placeholder="password" />
                </label>
                <div className='text-end my-2 text-blue-500'>forgot your password? </div>
                <div>
                <Link to="/client" className='btn w-full  bg-blue-500 text-white'>Sign in</Link>
                </div>
                <div className='text-center my-2 '>{`Don't have an account`} <Link to="/signup" className='text-blue-500'>Sign up</Link></div>
               
            </div>
        </div>
        <div className='lg:block hidden'>image</div>
       </div>
          <Footer/>
        </div>
    );
};

export default Signin;
