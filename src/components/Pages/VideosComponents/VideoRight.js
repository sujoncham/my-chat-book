import React from 'react';

const VideoRight = () => {
    return (
        <div className='w-[25%] bg-white sticky top-0 overflow-y-auto h-screen rounded-lg'>
            <div className='flex flex-col gap-2 px-3 py-3'>
                <div>
                    <video src="/images/video-1.mp4?autoplay=0" controls></video>
                </div>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur</p>
                    <div className='flex items-center gap-2'>
                        <img className='w-10 h-10 rounded-full' src="/images/5.jpg" alt="" />
                        <span>Sujon chambugong</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2 px-3 py-3'>
                <div>
                    <video src="/images/video-1.mp4?autoplay=0" controls></video>
                </div>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur</p>
                    <div className='flex items-center gap-2'>
                        <img className='w-10 h-10 rounded-full' src="/images/5.jpg" alt="" />
                        <span>Sujon chambugong</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2 px-3 py-3'>
                <div>
                    <video src="/images/video-1.mp4?autoplay=0" controls></video>
                    
                </div>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur</p>
                    <div className='flex items-center gap-2'>
                        <img className='w-10 h-10 rounded-full' src="/images/5.jpg" alt="" />
                        <span>Sujon chambugong</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoRight;