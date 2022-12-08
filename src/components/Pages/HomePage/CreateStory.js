import React from 'react';
import { FaPlusCircle } from "react-icons/fa";

const CreateStory = () => {
    return (
        <div className='bg-white border-2 py-3 my-5 rounded-lg'>
            <div className='flex justify-start gap-2'>
                <div className='border-2 px-2 py-2 rounded-lg'>
                    <img className='w-36 h-44 rounded-lg' src="/images/5.jpg" alt="" />
                    <div className='flex flex-col items-center'>
                        <FaPlusCircle size={40} className='mt-[-20px]' />
                        <span>Create Story</span>
                    </div>
                </div>
                <div className='border-2 px-2 py-2 rounded-lg relative'>
                    <img className='w-36 h-56 rounded-lg' src="/images/3.jpg" alt="" />
                    <img className='w-14 h-14 rounded-full absolute top-5 left-5 z-10 border-4 border-purple-500' src="/images/5.jpg" alt="" />
                        <span className='absolute left-3 bottom-4 text-purple-600 font-semibold'>Al Berubian</span>
                </div>
                <div className='border-2 px-2 py-2 rounded-lg relative'>
                    <img className='w-36 h-56 rounded-lg' src="/images/3.jpg" alt="" />
                    <img className='w-14 h-14 rounded-full absolute top-5 left-5 z-10 border-4 border-purple-500' src="/images/5.jpg" alt="" />
                        <span className='absolute left-3 bottom-4 text-purple-600 font-semibold'>Al Berubian</span>
                </div>
                <div className='border-2 px-2 py-2 rounded-lg relative'>
                    <img className='w-36 h-56 rounded-lg' src="/images/3.jpg" alt="" />
                    <img className='w-14 h-14 rounded-full absolute top-5 left-5 z-10 border-4 border-purple-500' src="/images/5.jpg" alt="" />
                        <span className='absolute left-3 bottom-4 text-purple-600 font-semibold'>Al Berubian</span>
                </div>
            </div>
        </div>
    );
};

export default CreateStory;