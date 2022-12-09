import React from 'react';

const ProfileEdit = ({setEditing}) => {
    return (
        <div className="fixed z-50 overflow-y-auto top-0 w-full left-0" id="modal">
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute z-40 inset-0 bg-gray-900 opacity-75" />
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <div className="inline-block align-center rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className="pt-5 text-right">
                        <button type="button" className="text-white text-2xl" onClick={()=>setEditing(false)}><i className="fas fa-times"></i> x</button>
                    
                    </div>
                    <div className="px-5 w-[600px] h-[650px] py-5 bg-white overflow-y-auto">
                        <div className='flex justify-start items-center gap-3 py-2'>
                            <img className='w-12 h-12 rounded-full' src="/images/5.jpg" alt="" />
                        </div>
                        <div className='w-full py-2'>
                            <label htmlFor="about">About me</label>
                            <textarea type="text" placeholder="about me" className='px-2 py-2 w-full border-2 rounded-lg'></textarea>
                        </div>
                        <div className='w-full py-2'>
                            <label htmlFor="about">Education</label>
                            <input type="text" placeholder="Last educational history" className='px-2 py-2 w-full border-2 rounded-lg' />
                        </div>
                        <div className='w-full py-2'>
                            <label htmlFor="about">Hobbies</label>
                            <input type="text" placeholder="your hobbies" className='px-2 py-2 w-full border-2 rounded-lg' />
                        </div>
                        <div className='w-full py-2'>
                            <label htmlFor="about">Food</label>
                            <input type="text" placeholder="your food" className='px-2 py-2 w-full border-2 rounded-lg' />
                        </div>
                        <div className='w-full py-2'>
                            <label htmlFor="about">Sports</label>
                            <input type="text" placeholder="your sports" className='px-2 py-2 w-full border-2 rounded-lg' />
                        </div>

                        <div className='py-3'>
                            <button type='submit' className='bg-purple-500 px-2 py-2 rounded-lg'>Add Post</button>
                        </div>
                        
                    </div>
                    
                </div>
            </div> 
        </div>
    );
};

export default ProfileEdit;