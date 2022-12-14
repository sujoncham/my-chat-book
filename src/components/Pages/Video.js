import React, { useState } from 'react';
import VideoLeft from './VideosComponents/VideoLeft';
import VideoRight from './VideosComponents/VideoRight';

const Video = () => {
    const [newArr, setNewArr] = useState([]);
    const [updated, setUpdated] = useState(newArr);
    

    const handleChange =(e)=>{
        setNewArr(e.target.value)
    }

    const handleData =()=>{
      
        setUpdated(newArr);
    }
    return (
        <div className='bg-purple-300 px-2 py-5 flex justify-between items-start gap-10'>
            <VideoLeft />
            <div className='w-[50%]'>
                <div className='bg-gray-100 py-5 rounded-lg'>
                    <video src="/images/video-1.mp4?autoplay=0" controls></video>
                </div>
                <div className='py-16'>
                    <input className='px-2 py-2 rounded-lg' onChange={handleChange} type="text" value={newArr} name='newArr' />
                    <button onClick={handleData} className='bg-purple-500 rounded-lg px-2 py-2' type='submit'>add</button>
                </div>
                <p className='py-5'>{updated}</p>
            </div>
            <VideoRight />
        </div>
    );
};

export default Video;