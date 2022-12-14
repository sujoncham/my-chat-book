import React from 'react';
import { FaPlusCircle } from "react-icons/fa";

const CreateStory = () => {
    return (
        <div className='bg-white border-2 px-2 py-3 my-5 rounded-lg'>
            <div className='flex justify-start gap-2'>
                <div className='border-2 rounded-lg'>
                    <img className='w-32 h-44 rounded-lg' src="/images/5.jpg" alt="" />
                    <div className='flex flex-col items-center'>
                        <FaPlusCircle size={40} className='mt-[-20px]' />
                        <span>Create Story</span>
                    </div>
                </div>
                <div className='border-2 rounded-lg relative'>
                    <img className='w-32 h-[100%] rounded-lg' src="/images/post2.jpg" alt="" />
                    <img className='w-14 h-14 rounded-full absolute top-2 left-2 z-2 border-4 border-purple-500' src="/images/3.png" alt="" />
                        <span className='absolute left-3 bottom-4 text-purple-600 font-semibold'>Al Berubian</span>
                </div>
                <div className='border-2 rounded-lg relative'>
                    <img className='w-32 h-[100%] rounded-lg' src="/images/post4.jpg" alt="" />
                    <img className='w-14 h-14 rounded-full absolute top-2 left-2 z-2 border-4 border-purple-500' src="/images/4.png" alt="" />
                        <span className='absolute left-3 bottom-4 text-purple-600 font-semibold'>Al Berubian</span>
                </div>
                <div className='border-2 rounded-lg relative'>
                    <img className='w-32 h-[100%] rounded-lg' src="/images/post3.jpg" alt="" />
                    <img className='w-14 h-14 rounded-full absolute top-2 left-2 z-2 border-4 border-purple-500' src="/images/6.png" alt="" />
                        <span className='absolute left-3 bottom-4 text-purple-600 font-semibold'>Al Berubian</span>
                </div>
            </div>
        </div>
    );
};

export default CreateStory;