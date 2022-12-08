import React from 'react';
import { FaPaste } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
    return (
        <div className='w-[25%]'>
            <div className='flex justify-start items-center'>
                <img className='w-14 h-14 rounded-full' src="/images/5.jpg" alt="" />
                <span>Sujon chambugong</span>
            </div>
            <div className=''>
                <Link to='/' className='flex justify-start items-center gap-3 px-3 py-3 rounded-lg mt-1 bg-gray-500 hover:bg-gray-600'>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Photo/Video</span>
                </Link>
                <Link to='/' className='flex justify-start items-center gap-3 px-3 py-3 rounded-lg mt-1 bg-gray-500 hover:bg-gray-600'>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Photo/Video</span>
                </Link>
                <Link to='/' className='flex justify-start items-center gap-3 px-3 py-3 rounded-lg mt-1 bg-gray-500 hover:bg-gray-600'>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Photo/Video</span>
                </Link>
                <Link to='/' className='flex justify-start items-center gap-3 px-3 py-3 rounded-lg mt-1 bg-gray-500 hover:bg-gray-600'>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Photo/Video</span>
                </Link>
                <Link to='/' className='flex justify-start items-center gap-3 px-3 py-3 rounded-lg mt-1 bg-gray-500 hover:bg-gray-600'>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Photo/Video</span>
                </Link>
                <Link to='/' className='flex justify-start items-center gap-3 px-3 py-3 rounded-lg mt-1 bg-gray-500 hover:bg-gray-600'>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Photo/Video</span>
                </Link>
                <Link to='/' className='flex justify-start items-center gap-3 px-3 py-3 rounded-lg mt-1 bg-gray-500 hover:bg-gray-600'>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Photo/Video</span>
                </Link>
                <Link to='/' className='flex justify-start items-center gap-3 px-3 py-3 rounded-lg mt-1 bg-gray-500 hover:bg-gray-600'>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Photo/Video</span>
                </Link>
                <Link to='/' className='flex justify-start items-center gap-3 px-3 py-3 rounded-lg mt-1 bg-gray-500 hover:bg-gray-600'>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Photo/Video</span>
                </Link>
            </div>
        </div>
    );
};

export default LeftSidebar;