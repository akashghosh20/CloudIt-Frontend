import { useState } from "react";
import ListLink from "./ListLink";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";



const Navbar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/admin/home' },
        { id: 2, name: 'About', path: '#' },
        { id: 3, name: 'Plans', path: '#' },
        { id: 4, name: 'Team', path: '#' },
        { id: 5, name: 'Services', path: '#' },
        { id: 6, name: 'Sign out', path: '#' },
    ];

    return (
        <nav className="p-5 flex flex-row justify-between items-center ">

            <div className="px-3">

                <div onClick={() => { setOpen(!open) }} className="text-2xl  md:hidden ">
                    {
                        open === true
                            ? <AiOutlineClose></AiOutlineClose>
                            : <AiOutlineMenu></AiOutlineMenu>

                    }
                </div>

                <div className="">
                    <ul className={`flex flex-col md:flex-row lg:flex-row ${open === true ? 'top-20 bg-white  z-[1]' : '-top-80'}   duration-1000 gap-5 absolute md:static text-black rounded-xl `}>
                         {
                            routes.map(route => <ListLink  key={route.id} route={route} listClass={''}></ListLink>)
                        }
                    </ul>
                </div>
            </div>

        </nav>
    );
};


export default Navbar;