import React from 'react';
import { FaLaugh, FaPaste, FaVideo } from "react-icons/fa";

const MyStatus = () => {
    return (
        <div className='bg-gray-500 px-3 py-3 mt-5 rounded-lg'>
            <div className='flex justify-between items-center gap-3 border-b-2 pb-5 border-gray-700'>
                <img className='w-16 h-16 rounded-full' src="/images/5.jpg" alt="" />
                <div className='w-full'>
                    <input type="text" placeholder="What's your mind, Sujon?" className='px-2 py-2 w-full rounded-full' />
                </div>
            </div>
            <div className='flex justify-between items-center py-3'>
                <div className='flex justify-start items-center gap-3'>
                    <span className='text-purple-700 rounded-full'><FaVideo size={30} /></span>
                    <span>Live Video</span>
                </div>
                <div className='flex justify-start items-center gap-3'>
                    <span className='text-purple-700 rounded-full'><FaPaste size={30} /></span>
                    <span>Photo/Video</span>
                </div>
                <div className='flex justify-start items-center gap-3'>
                    <span className='text-purple-700 rounded-full'><FaLaugh size={30} /></span>
                    <span>Felling/Activity</span>
                </div>
            </div>
        </div>
    );
};

export default MyStatus;