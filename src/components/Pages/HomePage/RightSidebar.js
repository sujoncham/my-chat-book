import React, { useState } from 'react';
import { FaEdit, FaPaste } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ProfileEdit from '../../DashboardComponents/Profile/ProfileEdit';
import { leftStyle1, leftStyle2, leftStyle3 } from './HomeStyle';

const RightSidebar = () => {
    const [editing, setEditing] = useState(false)
    return (
        <div className='w-[20%] sticky top-20 overflow-y-auto h-screen rounded-lg'>
            <div className='flex flex-col items-center px-3 py-3 relative'>
                <img className='w-[50%] rounded-full' src="/images/5.jpg" alt="" />
                <span className='text-xl font-bold'>Sujon chambugong</span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas dicta voluptate.</p>
                <span onClick={()=>setEditing(!editing)} className='absolute top-2 right-2 cursor-pointer'><FaEdit /></span>
            </div>
            <div className='px-2'>
                <Link to='/' className={leftStyle1}>
                    <span className='text-purple-700 rounded-full'><FaPaste size={20} /></span>
                    <span>View media, Files</span>
                </Link>
                <Link to='/' className={leftStyle2}>
                    <div className={leftStyle3}>
                        <span className='text-purple-700 rounded-full'><FaPaste size={20} /></span>
                        <span className='font-bold'>Education -</span>
                    </div>
                    <p>Graduated</p>
                </Link>
                <Link to='/' className={leftStyle2}>
                    <div className={leftStyle3}>
                        <span className='text-purple-700 rounded-full'><FaPaste size={20} /></span>
                        <span className='font-bold'>Hobbies -</span>
                    </div>
                    <p>Coding, Travel</p>
                </Link>
                <Link to='/' className={leftStyle2}>
                    <div className={leftStyle3}>
                        <span className='text-purple-700 rounded-full'><FaPaste size={20} /></span>
                        <span className='font-bold'>Food -</span>
                    </div>
                    <p>Beef, Elish</p>
                </Link>
                <Link to='/' className={leftStyle2}>
                    <div className={leftStyle3}>
                        <span className='text-purple-700 rounded-full'><FaPaste size={20} /></span>
                        <span className='font-bold'>Live in -</span>
                    </div>
                    <p>Dhaka, Bangladesh</p>
                </Link>
                <Link to='/' className={leftStyle2}>
                    <div className={leftStyle3}>
                        <span className='text-purple-700 rounded-full'><FaPaste size={20} /></span>
                        <span className='font-bold'>Sports -</span>
                    </div>
                    <p>Football, Cricket</p>
                </Link>
                
            </div>
            { editing && <ProfileEdit setEditing={setEditing} />}
        </div>
    );
};

export default RightSidebar;