
import Navber from '../navBer/navber';
import Footer from '../footer/footer';
import { FaRegSquare } from "react-icons/fa";
import { FaRegAddressBook ,FaPhoneAlt ,FaUser } from "react-icons/fa";
import { FaRegSquareCheck } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import Cchat from '../chat/clientchat';
import { GrEdit } from "react-icons/gr";
import { AiFillEdit } from "react-icons/ai";
import { MdOutlineOpenInFull } from "react-icons/md";
import { HiOutlineCloudDownload } from "react-icons/hi";





const Client = () => {
    return (
        <div >
        <Navber/>
       <div className=' lg:w-full flex lg:flex-row flex-col justify-center h-full '>
        <div className='lg:w-1/5 lg:h-[700px] bg-blue-50  shadow-lg m-4 rounded-xl'>
          
        <div className='w-full flex flex-row justify-evenly items-start gap-4 my-4 '>
           <img className="avatar  w-24 h-24 rounded " src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
        <div className='w-[200px] '>
        <div className='flex flex-row items-center justify-between   text-lg font-semibold'><div>ID: </div><div>#527</div></div>
        <div className='flex flex-row items-center justify-between    '><div>Total Spent: </div><div>40$</div></div>
        <div className='flex flex-row items-center justify-between  '><div>Packages bought: </div><div>21</div></div>
        </div>
        </div> 
       
            
            <div className='hidden md:block lg:block mt-4 px-4 h-96 '>
            <div className='my-2 text-xl font-bold flex flex-row items-center justify-between '><p>Personal details</p><AiFillEdit />
            </div> 
                <div className='flex flex-row items-center my-2'><FaUser /><p className='ml-4'>Fazle rabbi</p></div>
                <div className='flex flex-row items-center my-2'><MdEmail />    <p className='ml-4'>fazlerabbibindu@gmail.com</p></div>
                <div className='flex flex-row items-center my-2'> <FaPhoneAlt/> <p className='ml-4'>+880168246925</p></div>
                <div className='flex flex-row items-center my-2'> <FaLocationDot />  <p className='ml-4'>mahakhali,house no-34 , dhaka-1216</p></div>
                <div className='flex flex-row items-center my-2'><FaRegAddressBook /> <p className='ml-4'>Bangladesh </p></div>
                <div className='flex flex-row items-center my-2'>  <RiLockPasswordLine />  <p className='ml-4'>Samia Jahan</p></div>
                
                <div className='my-2 text-xl font-bold flex flex-row items-center justify-between mr-4'><p>Invoies</p>
</div> 
                <div className=' w-full bg-blue-200 p-2 rounded-md flex flex-row items-center justify-between'> <p>#p12-basi-12.02.2024 </p><p className='flex flex-row gap-2'><HiOutlineCloudDownload />

<MdOutlineOpenInFull /></p>

</div>
            </div>
        </div>
   <Cchat></Cchat>
   <div className='lg:w-1/5 md:-[700px] lg:h-[700px] bg-blue-50  shadow-lg m-4 rounded-xl'>
    <div className='bg-gradient-to-r from-sky-500 to-indigo-600  md:h-40 lg:h-40 p-2 rounded-t-xl m-1 text-white'><div className='font-bold text-lg'>Current Package</div>
    <div className='md:mt-8 lg:mt-8 font-bold text-4xl text-center '>Basic</div>
    </div>
   
     <div className="collapse ">
  <input type="checkbox" /> 
  <div className="collapse-title text-lg font-bold">
  Package contents
  </div>
  <div className="collapse-content"> 
  <ul className='ml-6'>
                    <li className='flex flex-row items-center'><FaRegSquareCheck className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><FaRegSquareCheck className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><FaRegSquareCheck className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><FaRegSquareCheck className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><FaRegSquareCheck className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><FaRegSquareCheck className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><FaRegSquareCheck className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><FaRegSquare className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><FaRegSquare className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    </ul>
  </div>
</div>
                <div className='font-bold m-2 text-lg'>Time remaining:</div>
    <div className='flex flex-row items-center justify-center'>
    
        <div className="grid grid-flow-col lg:gap-5 text-center auto-cols-max mb-5">
  <div className="flex flex-col p-2 bg-white rounded-sm bordered text-black ">
    <span className="countdown font-mono text-5xl bg-white text-black">
      <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div className="flex flex-col p-2 bg-white rounded-sm bordered text-black ">
    <span className="countdown font-mono text-5xl bg-white text-black">
      <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div className="flex flex-col p-2 bg-white rounded-sm bordered text-black ">
    <span className="countdown font-mono text-5xl bg-white text-black">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div className="flex flex-col p-2 bg-white rounded-sm bordered text-black ">
    <span className="countdown font-mono text-5xl bg-white text-black">
      <span style={{"--value":1}}></span>
    </span>
    sec
  </div>
        </div>
    </div>
    <div className=' p-2 rounded-xl bg-gradient-to-b from-sky-500 to-indigo-600 text-white font-bold text-center mx-5 hover:bg-gradient-to-t'>close the deal</div>
   </div>
       </div>
          <Footer  />
        </div>
    );
};

export default Client;