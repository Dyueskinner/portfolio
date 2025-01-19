import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    //array for nav items
    const navItems = [
        {id: 1, text: 'HOME', to:"home"},
        {id: 2, text: 'ABOUT', to:"about"},
        {id: 3, text: 'PROJECTS', to:"project"},
        {id: 4, text: 'CONTACT', to:"contact"}
    ];

    return (
        <div className="bg-[#1C1C1C] bg-opacity-80 flex justify-between items-end h-18 max-w mx-auto px-10 text-white font-josefin sticky top-0 z-50">
            {/* Logo */}
            <h1 className="w-full p-2 m-1 text-3xl font-bold text-[#FFAE00]">DYS</h1>

            {/* desktop nav */}
            <ul className="hidden md:flex font-josefin text-lg font-bold">
                {navItems.map(item => (
                    <motion.li 
                    key={item.id}
                    className="p-4 cursor-pointer"
                    whileHover={{
                      scale: 1.2,
                      color: "#FFAE00",
                      transition: { type: "spring", stiffness: 300},
                    }}
                    >
                      <Link to={item.to} smooth={true} duration={1000}>
                      {item.text}
                      </Link>
                    </motion.li>
                ))}
            </ul>

            {/* mobile nav icon  */}
            <div onClick={handleNav} className="block md:hidden pb-6">
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>

            {/* mobile nav menu  */}
            <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#FFAE00] m-4 '>DYS</h1> 

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 duration-300 hover:text-[#FFAE00] cursor-pointer'
          >
            {item.text}
          </li>
        ))}
      </ul>
        </div>
    )
}

export default Navbar;