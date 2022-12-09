import React from 'react';
import { FaPaste } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { leftStyle1 } from '../Pages/HomePage/HomeStyle';

const Notifications = () => {
    return (
        <div className='w-[320px] top-20 right-10 z-30 fixed bg-gray-600 px-5 py-3'>
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
    );
};

export default Notifications;