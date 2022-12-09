import React from 'react';
import VideoLeft from './VideosComponents/VideoLeft';
import VideoRight from './VideosComponents/VideoRight';

const Video = () => {
    return (
        <div className='bg-purple-300 px-2 py-5 flex justify-between items-start gap-10'>
            <VideoLeft />
            <div className='w-[50%]'>
                <div className='bg-gray-100 py-5 rounded-lg'>
                    <video src="/images/video-1.mp4?autoplay=0" controls></video>
                </div>
            </div>
            <VideoRight />
        </div>
    );
};

export default Video;