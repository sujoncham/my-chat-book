import React from 'react';
import { FaPaste } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { leftStyle1 } from './HomeStyle';


const LeftSidebar = () => {
    return (
        <div className='w-[25%]'>
            <div className={leftStyle1}>
                <img className='w-10 h-10 rounded-full' src="/images/5.jpg" alt="" />
                <span>Sujon chambugong</span>
            </div>
            <div className=''>
                <Link to='/' className={leftStyle1}>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Photo/Video</span>
                </Link>
                <Link to='/' className={leftStyle1}>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Photo/Video</span>
                </Link>
                <Link to='/' className={leftStyle1}>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Photo/Video</span>
                </Link>
                <Link to='/' className={leftStyle1}>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Photo/Video</span>
                </Link>
                <Link to='/' className={leftStyle1}>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Photo/Video</span>
                </Link>
                <Link to='/' className={leftStyle1}>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Photo/Video</span>
                </Link>
                <Link to='/' className={leftStyle1}>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Photo/Video</span>
                </Link>
                <Link to='/' className={leftStyle1}>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Photo/Video</span>
                </Link>
                <Link to='/' className={leftStyle1}>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Photo/Video</span>
                </Link>
            </div>
            <div className=''>
                <h1 className='px-5 py-3 text-xl'>Create Pages&Groups</h1>
                <div className=''>
                    <Link to='/' className={leftStyle1}>
                        <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                        <span>Photo/Video</span>
                    </Link>
                    <Link to='/' className={leftStyle1}>
                        <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                        <span>Photo/Video</span>
                    </Link>
                    <Link to='/' className={leftStyle1}>
                        <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                        <span>Photo/Video</span>
                    </Link>
                    <Link to='/' className={leftStyle1}>
                        <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                        <span>Photo/Video</span>
                    </Link>
                    <Link to='/' className={leftStyle1}>
                        <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                        <span>Photo/Video</span>
                    </Link>
                    <Link to='/' className={leftStyle1}>
                        <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                        <span>Photo/Video</span>
                    </Link>
                    <Link to='/' className={leftStyle1}>
                        <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                        <span>Photo/Video</span>
                    </Link>
                    <Link to='/' className={leftStyle1}>
                        <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                        <span>Photo/Video</span>
                    </Link>
                    <Link to='/' className={leftStyle1}>
                        <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                        <span>Photo/Video</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;