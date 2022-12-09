import React from 'react';
import { FaPaste } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { leftStyle1 } from './HomeStyle';


const LeftSidebar = () => {
    return (
        <div className='w-[20%] sticky top-20 overflow-hidden overflow-y-auto h-screen'>
            <div className={leftStyle1}>
                <img className='w-10 h-10 rounded-full' src="/images/5.jpg" alt="" />
                <span>Sujon chambugong</span>
            </div>
            <div className=''>
                <Link to='/' className={leftStyle1}>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Nature</span>
                </Link>
                <Link to='/' className={leftStyle1}>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Hills</span>
                </Link>
                <Link to='/' className={leftStyle1}>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Sports</span>
                </Link>
                <Link to='/' className={leftStyle1}>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Family</span>
                </Link>
                <Link to='/' className={leftStyle1}>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Education</span>
                </Link>
                <Link to='/' className={leftStyle1}>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>LifeStyle</span>
                </Link>
                <Link to='/' className={leftStyle1}>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Entertainment</span>
                </Link>
                <Link to='/' className={leftStyle1}>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Celebrity</span>
                </Link>
                <Link to='/' className={leftStyle1}>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Hobbies</span>
                </Link>
            </div>
        </div>
    );
};

export default LeftSidebar;