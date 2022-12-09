import React from 'react';
import CreateStory from './HomePage/CreateStory';
import LeftSidebar from './HomePage/LeftSidebar';
import MyPost from './HomePage/MyPost';
import MyStatus from './HomePage/MyStatus';
import RightSidebar from './HomePage/RightSidebar';

const Home = () => {
    return (
        <div className='bg-purple-100 px-2 flex justify-between items-start gap-10'>
            <LeftSidebar />
            <div className='w-[60%] px-10'>
                <div className='bg-purple-200 px-5 rounded-lg'>
                    <CreateStory />
                    <MyStatus />
                    <MyPost />
                </div>
            </div>
            <RightSidebar />
        </div>
    );
};

export default Home;