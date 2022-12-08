import React from 'react';
import CreateStory from './HomePage/CreateStory';
import LeftSidebar from './HomePage/LeftSidebar';
import MyPost from './HomePage/MyPost';
import MyStatus from './HomePage/MyStatus';

const Home = () => {
    return (
        <div className='bg-purple-300 px-3 py-4 flex justify-between items-start gap-10'>
            <LeftSidebar />
            <div className='w-[50%] px-10'>
                <div className='bg-gray-500 px-5 py-2 rounded-lg'>
                    <CreateStory />
                    <MyStatus />
                    <MyPost />
                </div>
            </div>
            <div className='w-[25%] flex justify-evenly items-center'>
                <img className='w-16 h-16 rounded-full' src="/images/5.jpg" alt="" />
                <span>Sujon chambugong</span>
            </div>
        </div>
    );
};

export default Home;