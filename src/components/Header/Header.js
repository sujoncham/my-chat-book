import React, { useEffect, useState } from 'react';
import { FaBell, FaFacebookMessenger, FaHome, FaPlay, FaRegBuilding, FaTh, FaUsers } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import Notifications from './Notifications';
import Profile from './Profile';

const Header = () => {
    const [openTab, setOpenTab] = useState(null);
    const [show, setShow] = useState(false);
    const [profile, setProfile] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setOpenTab(location.pathname);
    }, [location]);
    return (
        <div className='h-[70px]'>
            <div className='bg-purple-300 px-3 flex justify-between border-b-2 fixed w-full top-0 z-20'>
                <div className='w-[25%] flex justify-start items-center'>
                    <span className='bg-purple-500 rounded-full px-1 text-white uppercase py-2 font-bold'>Tarun</span>
                    <input type="text" placeholder='search' className='px-2 py-2 rounded-full ml-2' />
                </div>
                <div className='w-[50%] flex justify-evenly items-center'>
                    <Link to='/' className={" text-purple-600 px-5 py-3" + (openTab === "/" ?" active bg-purple-400 px-5 py-3 text-[#3B3442]" : "")}><FaHome size={30} title='home' /></Link>
                    <Link to='/videos' className={" text-purple-600 px-5 py-3" + (openTab === "/videos" ?" active bg-purple-400 px-5 py-3 text-[#3B3442]" : "")}><FaPlay size={30} title='watch' /></Link>
                    <Link to='/marketPlace' className={" text-purple-600 px-5 py-3" + (openTab === "/marketPlace" ?" active bg-purple-400 px-5 py-3 text-[#3B3442]" : "")}><FaRegBuilding size={30} title='marketplace' /></Link>
                    <Link to='/groups' className={" text-purple-600 px-5 py-3" + (openTab === "/groups" ?" active bg-purple-400 px-5 py-3 text-[#3B3442]" : "")}><FaUsers size={30} title='groups' /></Link>
                </div>
                <div className='w-[25%] flex justify-end items-center gap-2'>
                    <Link to='/' className='px-3 border-2 rounded-full py-3'><FaTh size={20} title='home' /></Link>
                    <Link to='/' className='px-3 border-2 rounded-full py-3'><FaFacebookMessenger size={20} title='home' /></Link>
                    <Link onClick={()=>setShow(!show)} to='/' className={`px-3 border-2 rounded-full py-3 relative"+ ${!show ? "bg-purple-300 text-purple-900" : "text-white bg-purple-500 border-purple-900"}`}><FaBell size={20} title='home' /></Link>
                    <Link  to='/' className='px-2 py-2'>
                        <img onClick={()=>setProfile(!profile)} className={"relative" + (!profile ? "w-12 h-12 border-2 border-white rounded-full": "w-12 h-12 border-2 border-purple-900 rounded-full")} src="/images/5.jpg" alt="" />
                    </Link>
                </div>

            </div>
            {show ? <Notifications /> : ""}
            {profile ? <Profile /> : ""}
        </div>
    );
};

export default Header;