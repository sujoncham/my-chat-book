import React, { useState } from 'react';
import { FaEdit, FaPaste } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ProfileEdit from '../../DashboardComponents/Profile/ProfileEdit';
import { leftStyle1 } from './HomeStyle';

const RightSidebar = () => {
    const [editing, setEditing] = useState(false)
    return (
        <div className='w-[20%] bg-white sticky top-20 overflow-y-auto h-screen rounded-lg'>
            <div className='flex flex-col items-center px-3 py-3 relative'>
                <img className='w-[50%] rounded-full' src="/images/5.jpg" alt="" />
                <span className='text-xl font-bold'>Sujon chambugong</span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas dicta voluptate est fugiat quod optio nobis aliquam a soluta quis.</p>
                <span onClick={()=>setEditing(!editing)} className='absolute top-2 right-2 cursor-pointer'><FaEdit /></span>
            </div>
            <div className='px-2'>
                <Link to='/' className={leftStyle1}>
                    <span className='text-purple-700 rounded-full'><FaPaste size={20} /></span>
                    <span>View media, Files</span>
                </Link>
                <Link to='/' className={leftStyle1}>
                    <span className='text-purple-700 rounded-full'><FaPaste size={20} /></span>
                    <span>Education -</span>
                    <p>Graduated</p>
                </Link>
                <Link to='/' className={leftStyle1}>
                    <div className='flex items-center gap-2'>
                        <span className='text-purple-700 rounded-full'><FaPaste size={20} /></span>
                        <span>Hobbies -</span>
                    </div>
                    <p>Coding, Travel</p>
                </Link>
                <Link to='/' className={leftStyle1}>
                    <div className='flex items-center gap-2'>
                        <span className='text-purple-700 rounded-full'><FaPaste size={20} /></span>
                        <span>Food -</span>
                    </div>
                    <p>Beef, Elish</p>
                </Link>
                <Link to='/' className={leftStyle1}>
                    <div className='flex items-center gap-2'>
                        <span className='text-purple-700 rounded-full'><FaPaste size={20} /></span>
                        <span>Live in -</span>
                    </div>
                    <p>Dhaka, Bangladesh</p>
                </Link>
                <Link to='/' className={leftStyle1}>
                    <div className='flex items-center gap-2'>
                        <span className='text-purple-700 rounded-full'><FaPaste size={20} /></span>
                        <span>Sports -</span>
                    </div>
                    <p>Football, Cricket</p>
                </Link>
                
            </div>
            { editing && <ProfileEdit setEditing={setEditing} />}
        </div>
    );
};

export default RightSidebar;