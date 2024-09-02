import Navber from '../navBer/navber';
import Footer from '../footer/footer';
import { FaRegAddressBook ,FaPhoneAlt ,FaUser } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
const Requireddetails = () => {
    return (
        <div className='h-screen '>
        <Navber/>
      
            <div className='w-full flex flex-row justify-center  items-center align-middle mx-5'>
               <div className='lg:w-4/5 flex flex-row justify-center items-start align-middle mx-5'>
            <div className='lg:w-2/3 w-auto  shadow-lg  p-10'>
                
            <div className='text-4xl font-bold mb-5'>Projet details </div>
            <div className='text-2xl font-bold mb-2'>start up-basi-express</div> 
             <div className='text-lg font-bold mb-1'>logo + 1000 page likes </div>
                <label className="form-control">
                    <div className="label flex flex-row justify-start">
                        <span className="label-text font-bold">Requirments</span><div className="tooltip" data-tip="you will need to add all the required details and files for best results">
 <FaRegQuestionCircle  className='ml-2' />
</div>
                    </div>
                    <div className="border-2 p-2 " >asdasd asd w Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                    Facere eos incidunt <br/>inventore rem reiciendis?<br/> Officia ullam harum et numquam possimus <br/>eligendi cum a iure nostrum non iusto<br/> ipsum, illo aliquid.a</div>
                </label>
                <label className="form-control w-full ">
  <div className="label">
    <span className="label-text font-bold">Projet title</span>
  
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full " />
 
</label>
             
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text font-bold">Project brief</span>
                    </div>
                    <textarea className="textarea textarea-bordered disabled" placeholder="Bio"></textarea>
                </label>
                <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Pick a file</span>
  </div>
  <input type="file"  className="file-input file-input-bordered w-full max-w-xs" />
  </label>
<div className='w-full flex my-4 justify-center items-center'><button className="btn btn-wide bg-black text-white">Wide</button></div>
                <div>
                </div>
            </div>
            <div className=' lg:w-1/3 w-full bg-blue-50 flex flex-row justify-center items-center mx-5'>  
            <div className='lg:w-full w-auto  shadow-lg  p-10'>
            <div className='text-4xl font-bold mb-10'>Bill</div>
            <div className='flex flex-row justify-between font-bold mb-4'><p>pakage name</p><p>Prie</p></div>
            <div className='flex flex-row justify-between font-bold mb-4'><p>startup - basi</p><p>19.99</p></div>
            <hr/>
            <div className='flex flex-row justify-between mb-4'><p>total:</p><p className='font-bold'>$19.99</p></div>
            <div className='flex flex-row justify-between mb-4'><p>startup - basi</p><p className='font-bold'> 19.99</p></div>
            <div className='flex flex-row justify-between mb-4'><button className="bg-black text-white p-2 rounded-lg">go express</button></div>
            <div className='mb-4'><label className="input input-bordered flex items-center pl-2 pr-1">
  <input type="text" className="grow" placeholder="oupon ode" />
  <button className="bg-black text-white p-2 rounded-lg ">apply oupon</button>
  

</label></div>
              <hr/>
              <div className='flex flex-row justify-between mb-4'><p> Net total:</p><p className='font-bold'>$19.99</p></div>
              <div className='flex flex-row justify-between mb-10'><p>you save:</p><p className=''>($19.99)</p></div>
<div><button className="bg-black text-white p-2 rounded-lg ">Pay with Paytm</button></div>

            </div></div>
           </div></div> 
     
          <Footer/>
        </div>
    );
};

export default Requireddetails;