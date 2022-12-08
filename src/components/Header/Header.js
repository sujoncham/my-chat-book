import React from 'react';
import { FaBell, FaFacebook, FaFacebookMessenger, FaHome, FaPlay, FaRegBuilding, FaTh, FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-purple-300 px-3 py-2 flex justify-between border-b-2 sticky top-0 z-20'>
            <div className='w-[25%] flex justify-start items-center'>
                <span className='bg-purple-500 text-purple-700 rounded-full'><FaFacebook size={30} /></span>
                <input type="text" placeholder='search' className='px-2 py-2 rounded-full ml-2' />
            </div>
            <div className='w-[50%] flex justify-evenly items-center'>
                <Link to='/' className='px-3'><FaHome size={30} title='home' /></Link>
                <Link to='/' className='px-3'><FaPlay size={30} title='watch' /></Link>
                <Link to='/' className='px-3'><FaRegBuilding size={30} title='marketplace' /></Link>
                <Link to='/' className='px-3'><FaUsers size={30} title='groups' /></Link>
            </div>
            <div className='w-[25%] flex justify-evenly items-center'>
                <Link to='/' className='px-3'><FaTh size={20} title='home' /></Link>
                <Link to='/' className='px-3'><FaFacebookMessenger size={20} title='home' /></Link>
                <Link to='/' className='px-3'><FaBell size={20} title='home' /></Link>
                <Link to='/' className='px-3'>
                    <img className='w-12 h-12 rounded-full' src="/images/5.jpg" alt="" />
                </Link>
            </div>
        </div>
    );
};

export default Header;