import React from 'react';
import { FaGlobeAsia, FaHeart, FaShare } from "react-icons/fa";

const PostCreate = () => {
    return (
        <div>
            <div className='bg-white border-2 py-3 my-5 rounded-lg'>
                <div className='flex justify-start items-center gap-3 px-3'>
                    <img className='w-14 h-14 rounded-full' src="/images/5.jpg" alt="" />
                    <div className='flex flex-col justify-start gap-1'>
                        <p>Modhurima chat</p>
                        <div className='flex items-center gap-2'>
                        <span>1h</span>
                        <FaGlobeAsia size={15} className='' />
                        </div>
                    </div>
                </div>
                <div className=' pt-5 h-[450px]'>
                    <img className='w-[100%] h-[100%]' src="/images/3.jpg" alt="" />
                </div>
                <div className='flex justify-between items-center px-3 py-2 border-b-2 border-gray-700'>
                    <div className='flex justify-start items-center gap-2'>
                        <span className='text-purple-700 rounded-full'>1</span>
                        <FaHeart size={15} />
                    </div>
                    <div className=''>
                        <span>100 Comments</span>
                    </div>
                    <div className=''>
                        <span>8 Share</span>
                    </div>
                </div>
                <div className='flex justify-between items-center px-3'>
                    <div className=''>
                        <span>Like</span>
                    </div>
                    <div className=''>
                        <span>Comments</span>
                    </div>
                    <div className='flex justify-start items-center gap-3'>
                        <FaShare size={20} />
                        <span>Share</span>
                    </div>
                </div>
            </div>
            <div className='bg-white border-2 my-5 rounded-lg'>
                <div className='flex justify-start items-center gap-3 px-3'>
                    <img className='w-14 h-14 rounded-full' src="/images/5.jpg" alt="" />
                    <div className='flex flex-col justify-start gap-1'>
                        <p>Modhurima chat</p>
                        <div className='flex items-center gap-2'>
                        <span>1h</span>
                        <FaGlobeAsia size={15} className='' />
                        </div>
                    </div>
                </div>
                <div className=' pt-5 h-[450px]'>
                    <img className='w-[100%] h-[100%]' src="/images/3.jpg" alt="" />
                </div>
                <div className='flex justify-between items-center px-3 py-2 border-b-2 border-gray-700'>
                    <div className='flex justify-start items-center gap-2'>
                        <span className='text-purple-700 rounded-full'>1</span>
                        <FaHeart size={15} />
                    </div>
                    <div className=''>
                        <span>100 Comments</span>
                    </div>
                    <div className=''>
                        <span>8 Share</span>
                    </div>
                </div>
                <div className='flex justify-between items-center px-3'>
                    <div className=''>
                        <span>Like</span>
                    </div>
                    <div className=''>
                        <span>Comments</span>
                    </div>
                    <div className='flex justify-start items-center gap-3'>
                        <FaShare size={20} />
                        <span>Share</span>
                    </div>
                </div>
            </div>
            <div className='bg-white border-2 my-5 rounded-lg'>
                <div className='flex justify-start items-center gap-3 px-3'>
                    <img className='w-14 h-14 rounded-full' src="/images/5.jpg" alt="" />
                    <div className='flex flex-col justify-start gap-1'>
                        <p>Modhurima chat</p>
                        <div className='flex items-center gap-2'>
                        <span>1h</span>
                        <FaGlobeAsia size={15} className='' />
                        </div>
                    </div>
                </div>
                <div className=' pt-5 h-[450px]'>
                    <img className='w-[100%] h-[100%]' src="/images/3.jpg" alt="" />
                </div>
                <div className='flex justify-between items-center px-3 py-2 border-b-2 border-gray-700'>
                    <div className='flex justify-start items-center gap-2'>
                        <span className='text-purple-700 rounded-full'>1</span>
                        <FaHeart size={15} />
                    </div>
                    <div className=''>
                        <span>100 Comments</span>
                    </div>
                    <div className=''>
                        <span>8 Share</span>
                    </div>
                </div>
                <div className='flex justify-between items-center px-3'>
                    <div className=''>
                        <span>Like</span>
                    </div>
                    <div className=''>
                        <span>Comments</span>
                    </div>
                    <div className='flex justify-start items-center gap-3'>
                        <FaShare size={20} />
                        <span>Share</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PostCreate;