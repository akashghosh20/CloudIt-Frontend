import  { useState } from 'react';
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { BsPatchQuestion } from "react-icons/bs";
import React from 'react';
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Link } from 'react-router-dom';


const Packages = () => {
    const [openDialogs, setOpenDialogs] = React.useState({
        d1: false,
        d2: false,
        dialog3: false,
        dialog4: false,
        dialog5: false,
        dialog6: false,
        dialog7: false,
        dialog8: false,
        dialog9: false,
        d10: false,
      });
    const [activeDiv, setActiveDiv] = useState('div1');
    const [activeBut, setActiveBut] = useState('b1');
    const handleClose = (dialogId) => {
        setOpenDialogs({ ...openDialogs, [dialogId]: false });
      };
    
      const openDialogBox = (dialogId) => {
        setOpenDialogs({ ...openDialogs, [dialogId]: true });
      };
   

    const handleButtonClick = (divId,butId) => {
      setActiveDiv(divId);
      setActiveBut(butId);
    };
    return (
        <div className='w-screen h-auto flex flex-col items-center justify-center my-3'>
        <div className='text-4xl font-bold my-8'>Packages that We offer </div>
        <div className='flex flex-row mb-7'>
                <div id='b1' className={`lg:w-40 h-10 bg-blue-400 text-center p-2 hover:bg-blue-500 ${ activeBut === 'b1' ? 'bg-blue-700' : '' }`} onClick={() => handleButtonClick('div1','b1')}>Startup </div>
                <div id='b2' className={`lg:w-40 h-10 bg-blue-400 text-center p-2 hover:bg-blue-500 ${ activeBut === 'b2' ? 'bg-blue-700' : '' }`} onClick={() => handleButtonClick('div2','b2')}>Startup2 </div>
                <div id='b3' className={`lg:w-40 h-10 bg-blue-400 text-center p-2 hover:bg-blue-500 ${ activeBut === 'b3' ? 'bg-blue-700' : '' }`} onClick={() => handleButtonClick('div3','b3')}>Startup3 </div>
                <div id='b4' className={`lg:w-40 h-10 bg-blue-400 text-center p-2 hover:bg-blue-500 ${ activeBut === 'b4' ? 'bg-blue-700' : '' }`} onClick={() => handleButtonClick('div4','b4')}>Startup4 </div>
                </div>
        <div  id="div1" style={{ display: activeDiv === 'div1' ? 'flex' : 'none' }} className='flex flex-row  flex-wrap justify-center  w-screen'>
            <div className='h-[580px] m-4 max-w-96 min-w-80 shadow-lg bg-white rounded-[20px]'>
                <div className='flex flex-row justify-between items-center m-3'>
                    <p className='text-2xl font-bold'>Basic1</p>
                    <BsPatchQuestion className="tooltip tooltip-open" data-tip="hello" onClick={() => openDialogBox('d1')} />
                
                </div>
                {openDialogs.d1 && (
        <Dialog  onClose={() => handleClose('d1')} open={openDialogs.d1}>
          <DialogTitle>Basic Package details</DialogTitle>
          <div className='h-full w-full p-5'>Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur, adipisicing elit. AspeLorem ipsum dolor sit amet consectetur, adipisicing elit. AspeLorem ipsum dolor sit amet consectetur, adipisicing elit. AspeLorem ipsum dolor sit amet consectetur, adipisicing elit. AspeLorem ipsum dolor sit amet consectetur, adipisicing elit. AspeLorem ipsum dolor sit amet consectetur, adipisicing elit. Aspe adipisicing elit. Asperiores provident expedita voluptatem delectus impedit! Fugiat praesentium, minima porro placeat rerum facilis repudiandae quam ipsa dicta quia cum, voluptates temporibus fuga!</div>
        </Dialog>
      )}
                <div className='border-b-2 pb-4'>
                <div className='font-bold leading-none text-blue-500 text-center '><span className='text-3xl'>$</span><span className='text-[100px]'>19</span><span className='text-3xl'>.99</span></div>
                <p className=' text-blue-700 text-center'><span className='text-sm'>for Express: </span><span className='text-lg font-bold'>$29</span></p>
                </div>
                <div className='m-2 h-[230px]'>
                    <ul >
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    </ul>
                </div>
                <div className='flex flex-row justify-center'><p ><span className='text-sm font-bold'>Regular Delivery:</span><span className='text-blue-400 font-bold'>3 days</span></p></div>
                <div className='flex flex-row justify-center'><p><span  className='text-sm font-bold'>Express Delivery:</span><span className='text-blue-400 font-bold'>1 day</span></p></div>
                <div className='flex flex-row justify-center m-4'><Link to="/buypackage" className='btn bg-blue-500 text-white p-3 hover:bg-blue-600'>Purchase now</Link></div>
           
           
            </div>
            <div className='h-[580px] m-4 max-w-96 min-w-80  shadow-lg bg-white rounded-[20px]'>
                <div className='flex flex-row justify-between items-center m-3'>
                    <p className='text-2xl font-bold'>Basic</p>
                    <BsPatchQuestion onClick={() => openDialogBox('d2')} />
                </div>
                {openDialogs.d2 && (
        <Dialog  onClose={() => handleClose('d2')} open={openDialogs.d2}>
          <DialogTitle>Basic2 Package details</DialogTitle>
          <div className='h-full w-full p-5'>Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur, adipisicing elit. AspeLorem ipsum dolor sit amet consectetur, adipisicing elit. AspeLorem ipsum dolor sit amet consectetur, adipisicing elit. AspeLorem ipsum dolor sit amet consectetur, adipisicing elit. AspeLorem ipsum dolor sit amet consectetur, adipisicing elit. AspeLorem ipsum dolor sit amet consectetur, adipisicing elit. Aspe adipisicing elit. Asperiores provident expedita voluptatem delectus impedit! Fugiat praesentium, minima porro placeat rerum facilis repudiandae quam ipsa dicta quia cum, voluptates temporibus fuga!</div>
        </Dialog>
      )}
                <div className='border-b-2 pb-4'>
                <div className='font-bold leading-none text-blue-500 text-center '><span className='text-3xl'>$</span><span className='text-[100px]'>19</span><span className='text-3xl'>.99</span></div>
                <p className=' text-blue-700 text-center'><span className='text-sm'>for Express: </span><span className='text-lg font-bold'>$29</span></p>
                </div>
                <div className='m-2 h-[230px]'>
                    <ul >
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    </ul>
                </div>
                <div className='flex flex-row justify-center'><p ><span className='text-sm font-bold'>Regular Delivery:</span><span className='text-blue-400 font-bold'>3 days</span></p></div>
                <div className='flex flex-row justify-center'><p><span  className='text-sm font-bold'>Express Delivery:</span><span className='text-blue-400 font-bold'>1 day</span></p></div>
                <div className='flex flex-row justify-center m-4'><button className='btn bg-blue-500 text-white p-3 hover:bg-blue-600'>Purchase now</button></div>
            </div>
            <div className='h-[580px] m-4 max-w-96 min-w-80  shadow-lg bg-white rounded-[20px]'>
                <div className='flex flex-row justify-between items-center m-3'>
                    <p className='text-2xl font-bold'>Basic</p>
                    <BsPatchQuestion />
                </div>
                <div className='border-b-2 pb-4'>
                <div className='font-bold leading-none text-blue-500 text-center '><span className='text-3xl'>$</span><span className='text-[100px]'>19</span><span className='text-3xl'>.99</span></div>
                <p className=' text-blue-700 text-center'><span className='text-sm'>for Express: </span><span className='text-lg font-bold'>$29</span></p>
                </div>
                <div className='m-2 h-[230px]'>
                    <ul >
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    </ul>
                </div>
                <div className='flex flex-row justify-center'><p ><span className='text-sm font-bold'>Regular Delivery:</span><span className='text-blue-400 font-bold'>3 days</span></p></div>
                <div className='flex flex-row justify-center'><p><span  className='text-sm font-bold'>Express Delivery:</span><span className='text-blue-400 font-bold'>1 day</span></p></div>
                <div className='flex flex-row justify-center m-4'><button className='btn bg-blue-500 text-white p-3 hover:bg-blue-600'>Purchase now</button></div>
            </div>
            <div className='h-[580px] m-4 max-w-96 min-w-80  shadow-lg bg-white rounded-[20px]'>
                <div className='flex flex-row justify-between items-center m-3'>
                    <p className='text-2xl font-bold'>Basic</p>
                    <BsPatchQuestion />
                </div>
                <div className='border-b-2 pb-4'>
                <div className='font-bold leading-none text-blue-500 text-center '><span className='text-3xl'>$</span><span className='text-[100px]'>19</span><span className='text-3xl'>.99</span></div>
                <p className=' text-blue-700 text-center'><span className='text-sm'>for Express: </span><span className='text-lg font-bold'>$29</span></p>
                </div>
                <div className='m-2 h-[230px]'>
                    <ul >
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    </ul>
                </div>
                <div className='flex flex-row justify-center'><p ><span className='text-sm font-bold'>Regular Delivery:</span><span className='text-blue-400 font-bold'>3 days</span></p></div>
                <div className='flex flex-row justify-center'><p><span  className='text-sm font-bold'>Express Delivery:</span><span className='text-blue-400 font-bold'>1 day</span></p></div>
                <div className='flex flex-row justify-center m-4'><button className='btn bg-blue-500 text-white p-3 hover:bg-blue-600'>Purchase now</button></div>
            </div>
        </div> 
        <div  id="div2" style={{ display: activeDiv === 'div2' ? 'flex' : 'none' }} className='flex flex-row flex-wrap justify-center  '>
            <div className='h-[580px] m-4 max-w-96 min-w-80 shadow-lg bg-white rounded-[20px]'>
                <div className='flex flex-row justify-between items-center m-3'>
                    <p className='text-2xl font-bold'>Basic2</p>
                    <BsPatchQuestion />
                </div>
                <div className='border-b-2 pb-4'>
                <div className='font-bold leading-none text-blue-500 text-center '><span className='text-3xl'>$</span><span className='text-[100px]'>19</span><span className='text-3xl'>.99</span></div>
                <p className=' text-blue-700 text-center'><span className='text-sm'>for Express: </span><span className='text-lg font-bold'>$29</span></p>
                </div>
                <div className='m-2 h-[230px]'>
                    <ul >
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    </ul>
                </div>
                <div className='flex flex-row justify-center'><p ><span className='text-sm font-bold'>Regular Delivery:</span><span className='text-blue-400 font-bold'>3 days</span></p></div>
                <div className='flex flex-row justify-center'><p><span  className='text-sm font-bold'>Express Delivery:</span><span className='text-blue-400 font-bold'>1 day</span></p></div>
                <div className='flex flex-row justify-center m-4'><button className='btn bg-blue-500 text-white p-3 hover:bg-blue-600'>Purchase now</button></div>
            </div>
            <div className='h-[580px] m-4 max-w-96 min-w-80 shadow-lg bg-white rounded-[20px]'>
                <div className='flex flex-row justify-between items-center m-3'>
                    <p className='text-2xl font-bold'>Basic</p>
                    <BsPatchQuestion />
                </div>
                <div className='border-b-2 pb-4'>
                <div className='font-bold leading-none text-blue-500 text-center '><span className='text-3xl'>$</span><span className='text-[100px]'>19</span><span className='text-3xl'>.99</span></div>
                <p className=' text-blue-700 text-center'><span className='text-sm'>for Express: </span><span className='text-lg font-bold'>$29</span></p>
                </div>
                <div className='m-2 h-[230px]'>
                    <ul >
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    </ul>
                </div>
                <div className='flex flex-row justify-center'><p ><span className='text-sm font-bold'>Regular Delivery:</span><span className='text-blue-400 font-bold'>3 days</span></p></div>
                <div className='flex flex-row justify-center'><p><span  className='text-sm font-bold'>Express Delivery:</span><span className='text-blue-400 font-bold'>1 day</span></p></div>
                <div className='flex flex-row justify-center m-4'><button className='btn bg-blue-500 text-white p-3 hover:bg-blue-600'>Purchase now</button></div>
            </div>
            <div className='h-[580px] m-4 max-w-96 min-w-80 shadow-lg bg-white rounded-[20px]'>
                <div className='flex flex-row justify-between items-center m-3'>
                    <p className='text-2xl font-bold'>Basic</p>
                    <BsPatchQuestion />
                </div>
                <div className='border-b-2 pb-4'>
                <div className='font-bold leading-none text-blue-500 text-center '><span className='text-3xl'>$</span><span className='text-[100px]'>19</span><span className='text-3xl'>.99</span></div>
                <p className=' text-blue-700 text-center'><span className='text-sm'>for Express: </span><span className='text-lg font-bold'>$29</span></p>
                </div>
                <div className='m-2 h-[230px]'>
                    <ul >
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    </ul>
                </div>
                <div className='flex flex-row justify-center'><p ><span className='text-sm font-bold'>Regular Delivery:</span><span className='text-blue-400 font-bold'>3 days</span></p></div>
                <div className='flex flex-row justify-center'><p><span  className='text-sm font-bold'>Express Delivery:</span><span className='text-blue-400 font-bold'>1 day</span></p></div>
                <div className='flex flex-row justify-center m-4'><button className='btn bg-blue-500 text-white p-3 hover:bg-blue-600'>Purchase now</button></div>
            </div>
            <div className='h-[580px] m-4 max-w-96 min-w-80 shadow-lg bg-white rounded-[20px]'>
                <div className='flex flex-row justify-between items-center m-3'>
                    <p className='text-2xl font-bold'>Basic</p>
                    <BsPatchQuestion />
                </div>
                <div className='border-b-2 pb-4'>
                <div className='font-bold leading-none text-blue-500 text-center '><span className='text-3xl'>$</span><span className='text-[100px]'>19</span><span className='text-3xl'>.99</span></div>
                <p className=' text-blue-700 text-center'><span className='text-sm'>for Express: </span><span className='text-lg font-bold'>$29</span></p>
                </div>
                <div className='m-2 h-[230px]'>
                    <ul >
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    </ul>
                </div>
                <div className='flex flex-row justify-center'><p ><span className='text-sm font-bold'>Regular Delivery:</span><span className='text-blue-400 font-bold'>3 days</span></p></div>
                <div className='flex flex-row justify-center'><p><span  className='text-sm font-bold'>Express Delivery:</span><span className='text-blue-400 font-bold'>1 day</span></p></div>
                <div className='flex flex-row justify-center m-4'><button className='btn bg-blue-500 text-white p-3 hover:bg-blue-600'>Purchase now</button></div>
            </div>
        </div> 
        <div  id="div3" style={{ display: activeDiv === 'div3' ? 'flex' : 'none' }} className='flex flex-row flex-wrap justify-center '>
            <div className='h-[580px] m-4 max-w-96 min-w-80 shadow-lg bg-white rounded-[20px]'>
                <div className='flex flex-row justify-between items-center m-3'>
                    <p className='text-2xl font-bold'>Basic3</p>
                    <BsPatchQuestion />
                </div>
                <div className='border-b-2 pb-4'>
                <div className='font-bold leading-none text-blue-500 text-center '><span className='text-3xl'>$</span><span className='text-[100px]'>19</span><span className='text-3xl'>.99</span></div>
                <p className=' text-blue-700 text-center'><span className='text-sm'>for Express: </span><span className='text-lg font-bold'>$29</span></p>
                </div>
                <div className='m-2 h-[230px]'>
                    <ul >
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    </ul>
                </div>
                <div className='flex flex-row justify-center'><p ><span className='text-sm font-bold'>Regular Delivery:</span><span className='text-blue-400 font-bold'>3 days</span></p></div>
                <div className='flex flex-row justify-center'><p><span  className='text-sm font-bold'>Express Delivery:</span><span className='text-blue-400 font-bold'>1 day</span></p></div>
                <div className='flex flex-row justify-center m-4'><button className='btn bg-blue-500 text-white p-3 hover:bg-blue-600'>Purchase now</button></div>
            </div>
            <div className='h-[580px] m-4 max-w-96 min-w-80 shadow-lg bg-white rounded-[20px]'>
                <div className='flex flex-row justify-between items-center m-3'>
                    <p className='text-2xl font-bold'>Basic</p>
                    <BsPatchQuestion />
                </div>
                <div className='border-b-2 pb-4'>
                <div className='font-bold leading-none text-blue-500 text-center '><span className='text-3xl'>$</span><span className='text-[100px]'>19</span><span className='text-3xl'>.99</span></div>
                <p className=' text-blue-700 text-center'><span className='text-sm'>for Express: </span><span className='text-lg font-bold'>$29</span></p>
                </div>
                <div className='m-2 h-[230px]'>
                    <ul >
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    </ul>
                </div>
                <div className='flex flex-row justify-center'><p ><span className='text-sm font-bold'>Regular Delivery:</span><span className='text-blue-400 font-bold'>3 days</span></p></div>
                <div className='flex flex-row justify-center'><p><span  className='text-sm font-bold'>Express Delivery:</span><span className='text-blue-400 font-bold'>1 day</span></p></div>
                <div className='flex flex-row justify-center m-4'><button className='btn bg-blue-500 text-white p-3 hover:bg-blue-600'>Purchase now</button></div>
            </div>
            <div className='h-[580px] m-4 max-w-96 min-w-80 shadow-lg bg-white rounded-[20px]'>
                <div className='flex flex-row justify-between items-center m-3'>
                    <p className='text-2xl font-bold'>Basic</p>
                    <BsPatchQuestion />
                </div>
                <div className='border-b-2 pb-4'>
                <div className='font-bold leading-none text-blue-500 text-center '><span className='text-3xl'>$</span><span className='text-[100px]'>19</span><span className='text-3xl'>.99</span></div>
                <p className=' text-blue-700 text-center'><span className='text-sm'>for Express: </span><span className='text-lg font-bold'>$29</span></p>
                </div>
                <div className='m-2 h-[230px]'>
                    <ul >
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    </ul>
                </div>
                <div className='flex flex-row justify-center'><p ><span className='text-sm font-bold'>Regular Delivery:</span><span className='text-blue-400 font-bold'>3 days</span></p></div>
                <div className='flex flex-row justify-center'><p><span  className='text-sm font-bold'>Express Delivery:</span><span className='text-blue-400 font-bold'>1 day</span></p></div>
                <div className='flex flex-row justify-center m-4'><button className='btn bg-blue-500 text-white p-3 hover:bg-blue-600'>Purchase now</button></div>
            </div>
            <div className='h-[580px] m-4 max-w-96 min-w-80 shadow-lg bg-white rounded-[20px]'>
                <div className='flex flex-row justify-between items-center m-3'>
                    <p className='text-2xl font-bold'>Basic</p>
                    <BsPatchQuestion />
                </div>
                <div className='border-b-2 pb-4'>
                <div className='font-bold leading-none text-blue-500 text-center '><span className='text-3xl'>$</span><span className='text-[100px]'>19</span><span className='text-3xl'>.99</span></div>
                <p className=' text-blue-700 text-center'><span className='text-sm'>for Express: </span><span className='text-lg font-bold'>$29</span></p>
                </div>
                <div className='m-2 h-[230px]'>
                    <ul >
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    </ul>
                </div>
                <div className='flex flex-row justify-center'><p ><span className='text-sm font-bold'>Regular Delivery:</span><span className='text-blue-400 font-bold'>3 days</span></p></div>
                <div className='flex flex-row justify-center'><p><span  className='text-sm font-bold'>Express Delivery:</span><span className='text-blue-400 font-bold'>1 day</span></p></div>
                <div className='flex flex-row justify-center m-4'><button className='btn bg-blue-500 text-white p-3 hover:bg-blue-600'>Purchase now</button></div>
            </div>
        </div> 
        <div  id="div4" style={{ display: activeDiv === 'div4' ? 'flex' : 'none' }} className='flex flex-row flex-wrap justify-center '>
            <div className='h-[580px] m-4 max-w-96 min-w-80 shadow-lg bg-white rounded-[20px]'>
                <div className='flex flex-row justify-between items-center m-3'>
                    <p className='text-2xl font-bold'>Basic4</p>
                    <BsPatchQuestion />
                </div>
                <div className='border-b-2 pb-4'>
                <div className='font-bold leading-none text-blue-500 text-center '><span className='text-3xl'>$</span><span className='text-[100px]'>19</span><span className='text-3xl'>.99</span></div>
                <p className=' text-blue-700 text-center'><span className='text-sm'>for Express: </span><span className='text-lg font-bold'>$29</span></p>
                </div>
                <div className='m-2 h-[230px]'>
                    <ul >
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    </ul>
                </div>
                <div className='flex flex-row justify-center'><p ><span className='text-sm font-bold'>Regular Delivery:</span><span className='text-blue-400 font-bold'>3 days</span></p></div>
                <div className='flex flex-row justify-center'><p><span  className='text-sm font-bold'>Express Delivery:</span><span className='text-blue-400 font-bold'>1 day</span></p></div>
                <div className='flex flex-row justify-center m-4'><button className='btn bg-blue-500 text-white p-3 hover:bg-blue-600'>Purchase now</button></div>
            </div>
            <div className='h-[580px] m-4 max-w-96 min-w-80 shadow-lg bg-white rounded-[20px]'>
                <div className='flex flex-row justify-between items-center m-3'>
                    <p className='text-2xl font-bold'>Basic</p>
                    <BsPatchQuestion />
                </div>
                <div className='border-b-2 pb-4'>
                <div className='font-bold leading-none text-blue-500 text-center '><span className='text-3xl'>$</span><span className='text-[100px]'>19</span><span className='text-3xl'>.99</span></div>
                <p className=' text-blue-700 text-center'><span className='text-sm'>for Express: </span><span className='text-lg font-bold'>$29</span></p>
                </div>
                <div className='m-2 h-[230px]'>
                    <ul >
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    </ul>
                </div>
                <div className='flex flex-row justify-center'><p ><span className='text-sm font-bold'>Regular Delivery:</span><span className='text-blue-400 font-bold'>3 days</span></p></div>
                <div className='flex flex-row justify-center'><p><span  className='text-sm font-bold'>Express Delivery:</span><span className='text-blue-400 font-bold'>1 day</span></p></div>
                <div className='flex flex-row justify-center m-4'><button className='btn bg-blue-500 text-white p-3 hover:bg-blue-600'>Purchase now</button></div>
            </div>
            <div className='h-[580px] m-4 max-w-96 min-w-80 shadow-lg bg-white rounded-[20px]'>
                <div className='flex flex-row justify-between items-center m-3'>
                    <p className='text-2xl font-bold'>Basic</p>
                    <BsPatchQuestion />
                </div>
                <div className='border-b-2 pb-4'>
                <div className='font-bold leading-none text-blue-500 text-center '><span className='text-3xl'>$</span><span className='text-[100px]'>19</span><span className='text-3xl'>.99</span></div>
                <p className=' text-blue-700 text-center'><span className='text-sm'>for Express: </span><span className='text-lg font-bold'>$29</span></p>
                </div>
                <div className='m-2 h-[230px]'>
                    <ul >
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    </ul>
                </div>
                <div className='flex flex-row justify-center'><p ><span className='text-sm font-bold'>Regular Delivery:</span><span className='text-blue-400 font-bold'>3 days</span></p></div>
                <div className='flex flex-row justify-center'><p><span  className='text-sm font-bold'>Express Delivery:</span><span className='text-blue-400 font-bold'>1 day</span></p></div>
                <div className='flex flex-row justify-center m-4'><button className='btn bg-blue-500 text-white p-3 hover:bg-blue-600'>Purchase now</button></div>
            </div>
            <div className='h-[580px] m-4 max-w-96 min-w-80 shadow-lg bg-white rounded-[20px]'>
                <div className='flex flex-row justify-between items-center m-3'>
                    <p className='text-2xl font-bold'>Basic</p>
                    <BsPatchQuestion />
                </div>
                <div className='border-b-2 pb-4'>
                <div className='font-bold leading-none text-blue-500 text-center '><span className='text-3xl'>$</span><span className='text-[100px]'>19</span><span className='text-3xl'>.99</span></div>
                <p className=' text-blue-700 text-center'><span className='text-sm'>for Express: </span><span className='text-lg font-bold'>$29</span></p>
                </div>
                <div className='m-2 h-[230px]'>
                    <ul >
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    <li className='flex flex-row items-center'><IoCheckmarkDoneOutline className='w-5 h-5 text-blue-400 mr-4' /> <span>5 cups chopped</span></li>
                    </ul>
                </div>
                <div className='flex flex-row justify-center'><p ><span className='text-sm font-bold'>Regular Delivery:</span><span className='text-blue-400 font-bold'>3 days</span></p></div>
                <div className='flex flex-row justify-center'><p><span  className='text-sm font-bold'>Express Delivery:</span><span className='text-blue-400 font-bold'>1 day</span></p></div>
                <div className='flex flex-row justify-center m-4'><button className='btn bg-blue-500 text-white p-3 hover:bg-blue-600'>Purchase now</button></div>
            </div>
        </div> 
        
      

        </div>
    );
};

export default Packages;