import React, { useState } from 'react';
import { FaLaugh, FaPaste } from "react-icons/fa";
import CreatePost from './CreatePost';

const MyStatus = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='bg-white px-3 py-3 mt-5 rounded-lg'>
            <div className='flex justify-between items-center gap-3 border-b-2 pb-5 border-gray-700'>
                <img className='w-14 h-14 rounded-full' src="/images/5.jpg" alt="" />
                <div className='w-full'>
                    <input type="text" onClick={()=>setOpen(!open)} placeholder="What's your mind, Sujon?" className='px-2 py-2 w-full border-2 rounded-full' />
                </div>
            </div>
            <div className='flex justify-around items-center py-3'>
                <div onClick={()=>setOpen(!open)} className='flex justify-start items-center gap-2 hover:bg-gray-400 px-2 py-2 rounded-lg cursor-pointer'>
                    <span className='text-purple-700 rounded-full'><FaPaste size={20} /></span>
                    <span>Photo/Video</span>
                </div>
                <div onClick={()=>setOpen(!open)} className='flex justify-start items-center gap-2 hover:bg-gray-400 px-2 py-2 rounded-lg cursor-pointer'>
                    <span className='text-purple-700 rounded-full'><FaLaugh size={20} /></span>
                    <span>Felling/Activity</span>
                </div>
            </div>
            {open && <CreatePost open={open} setOpen={setOpen} />}
        </div>
    );
};

export default MyStatus;