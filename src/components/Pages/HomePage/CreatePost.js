import React from 'react';
import { FaGlobeAsia, FaLaugh, FaPaste } from "react-icons/fa";

const CreatePost = ({setOpen}) => {
    return (
        <div className="fixed z-10 overflow-y-auto top-0 w-full left-0" id="modal">
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-900 opacity-75" />
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <div className="inline-block align-center rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className="px-4 py-1 text-right">
                        <button type="button" className="text-white text-2xl" onClick={()=>setOpen(false)}><i className="fas fa-times"></i> x</button>
                    
                    </div>
                    <div className="px-5 w-[550px] h-[450px] py-5 bg-white overflow-y-auto">
                        
                        <div className=''>
                            <div className='flex justify-start items-center gap-3 pb-5'>
                                <img className='w-12 h-12 rounded-full' src="/images/5.jpg" alt="" />
                                <div className='flex flex-col justify-start gap-1'>
                                    <p>Modhurima chat</p>
                                    <div className='flex items-center gap-2'>
                                    <span>public</span>
                                    <FaGlobeAsia size={15} className='' />
                                    </div>
                                </div>
                            </div>
                            
                            <div className='w-full pb-10'>
                                <textarea type="text" placeholder="What's your mind, Sujon?" className='px-2 py-2 w-full border-2 rounded-lg'></textarea>
                            </div>
                        </div>
                        <div className='flex justify-between items-center py-3 border-b-2 border-gray-700'>
                            
                            <div className='flex justify-start items-center gap-2 hover:bg-gray-400 px-2 py-2 rounded-lg cursor-pointer'>
                                <span className='text-purple-700 rounded-full'><FaPaste size={20} /></span>
                                <span>Photo/Video</span>
                            </div>
                            <div className='flex justify-start items-center gap-2 hover:bg-gray-400 px-2 py-2 rounded-lg cursor-pointer'>
                                <span className='text-purple-700 rounded-full'><FaLaugh size={20} /></span>
                                <span>Felling/Activity</span>
                            </div>
                        </div>

                        <div className='pt-10'>
                            <button type='submit' className='bg-purple-500 px-2 py-2 rounded-lg'>Add Post</button>
                        </div>
                        
                    </div>
                    
                </div>
            </div> 
        </div>
    );
};

export default CreatePost;