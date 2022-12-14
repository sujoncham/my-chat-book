import React from 'react';
import { leftStyle1 } from '../Pages/HomePage/HomeStyle';

const Notifications = () => {
    return (
        <div className='w-[330px] top-16 right-5 z-30 fixed bg-white px-5 py-3 rounded-lg'>
            <div className={leftStyle1}>
                <img className='w-10 h-10 rounded-full' src="/images/5.jpg" alt="" />
                <div>
                    <span className='text-[14px] font-bold'>Sujon chambugong</span> <span className='text-[14px]'>comments your post</span> <span className='text-[14px] font-bold'>1h ago</span>
                </div>
            </div>
            <div className={leftStyle1}>
                <img className='w-10 h-10 rounded-full' src="/images/5.jpg" alt="" />
                <div>
                    <span className='text-[14px] font-bold'>Sujon chambugong</span> <span className='text-[14px]'>comments your post</span> <span className='text-[14px] font-bold'>1h ago</span>
                </div>
            </div>
            <div className={leftStyle1}>
                <img className='w-10 h-10 rounded-full' src="/images/5.jpg" alt="" />
                <div>
                    <span className='text-[14px] font-bold'>Sujon chambugong</span> <span className='text-[14px]'>comments your post</span> <span className='text-[14px] font-bold'>1h ago</span>
                </div>
            </div>
        </div>
    );
};

export default Notifications;