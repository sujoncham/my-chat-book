import React, { useEffect, useState } from 'react';
import { FaBell, FaFacebook, FaFacebookMessenger, FaHome, FaPlay, FaRegBuilding, FaTh, FaUsers } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [openTab, setOpenTab] = useState(null);
    const location = useLocation();
    useEffect(() => {
        setOpenTab(location.pathname);
    }, [location]);
    return (
        <div className='bg-purple-300 px-3 py-2 flex justify-between h-[70px] border-b-2 sticky top-0 z-20'>
            <div className='w-[25%] flex justify-start items-center'>
                <span className='bg-purple-500 text-purple-700 rounded-full'><FaFacebook size={30} /></span>
                <input type="text" placeholder='search' className='px-2 py-2 rounded-full ml-2' />
            </div>
            <div className='w-[50%] flex justify-evenly items-center'>
                <Link to='/' className={" text-[#dc7672] px-5 py-3" + (openTab === "/" ?" active bg-[#ff8] px-5 py-3 text-[#3B3442]" : "")}><FaHome size={30} title='home' /></Link>
                <Link to='/videos' className={" text-[#dc7672] px-5 py-3" + (openTab === "/videos" ?" active bg-[#ff8] px-5 py-3 text-[#3B3442]" : "")}><FaPlay size={30} title='watch' /></Link>
                <Link to='/marketPlace' className={" text-[#dc7672] px-5 py-3" + (openTab === "/marketPlace" ?" active bg-[#ff8] px-5 py-3 text-[#3B3442]" : "")}><FaRegBuilding size={30} title='marketplace' /></Link>
                <Link to='/groups' className={" text-[#dc7672] px-5 py-3" + (openTab === "/groups" ?" active bg-[#ff8] px-5 py-3 text-[#3B3442]" : "")}><FaUsers size={30} title='groups' /></Link>
            </div>
            <div className='w-[25%] flex justify-end items-center gap-2'>
                <Link to='/' className='px-3 border-2 rounded-full py-3'><FaTh size={20} title='home' /></Link>
                <Link to='/' className='px-3 border-2 rounded-full py-3'><FaFacebookMessenger size={20} title='home' /></Link>
                <Link to='/' className='px-3 border-2 rounded-full py-3'><FaBell size={20} title='home' /></Link>
                <Link to='/' className='px-2'>
                    <img className='w-12 h-12 rounded-full border-2' src="/images/5.jpg" alt="" />
                </Link>
            </div>
        </div>
    );
};

export default Header;