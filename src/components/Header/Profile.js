import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const username = localStorage.getItem("username");
    console.log(username)

   
    const handleLogout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("userToken");
        navigate('/login')

    }
    return (
        <div className='w-[180px] fixed top-16 right-5 z-50 bg-white px-3 py-3 border-2 border-purple-500 flex flex-col rounded-lg'>
            <Link to='/' className='border-b-[1px] border-purple-500 py-2 font-bold text-purple-500'>{username ? username : "no name"}</Link>
            <Link to='/' className='border-b-[1px] border-purple-500 py-2 hover:text-purple-500'>Profile</Link>
            <Link to='/' className='border-b-[1px] border-purple-500 py-2 hover:text-purple-500'>Accounting Setting</Link>
            <button onClick={handleLogout} className='border-[1px] border-purple-500 py-2 mt-2 rounded-lg hover:bg-purple-500 hover:text-white'>Logout</button>
        </div>
    );
};

export default Profile;