import axios from 'axios';
import React, { useState } from 'react';
import { FaGlobeAsia } from "react-icons/fa";
import { toast } from 'react-toastify';

const CreatePost = ({setOpen, open}) => {
    const [image, setImage] = useState("");
    const [userText, setUserText] = useState("");
    const [category, setCategory] = useState("");

    // const timePost = new Date().toLocaleTimeString();
    // const datePost = new Date().toLocaleDateString();

	const changeHandler = (event) => {
        // console.log(event.target.files)
		setImage(event.target.files[0]);
        setOpen(true);
	};

    const handlerText = (event) =>{
        // console.log(event.target.value)
		setUserText(event.target.value);
    }
    const handleCategory = (event) =>{
        // console.log(event.target.value)
		setCategory(event.target.value);
    }

	const handleSubmission = (event) => {
        event.preventDefault();
        const formData = new FormData();
		formData.append('image', image);
		formData.append('userText', userText);
		formData.append('category', category);
      
        if(image=== '' || userText === '' || category===''){
            console.log('must not be  empty');
            
            setOpen(false);
            return;
        }
        const url = "http://localhost:5000/chatPost";

		axios.post(url, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            }})
			.then((res) => {
                console.log(res)
                if(res){
                    toast("Inserted Successfully");
                }
			})

            setOpen(false)
	};
	
  
    
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
                        </div>
                        <div>
                            <img className={"w-[100%] h-56" + (image === "" ? "hidden" : "block" )} src={image === "" ? "" : URL.createObjectURL(image)} alt="" />
                        </div>
                        <form onSubmit={handleSubmission } className='flex flex-col py-3 border-gray-700' method="post" encType="multipart/form-data">
                            <div className='w-full pb-10'>
                                <textarea type="text" name='userText' onChange={handlerText} placeholder="What's your mind, Sujon?" className='px-2 py-2 w-full border-2 rounded-lg'></textarea>
                            </div>
                            <select onChange={handleCategory} name="category" className='border border-purple-500 py-2 mb-5 rounded w-full'>
                                <option>select one</option>
                                <option value='nature'>nature</option>
                                <option value='hills'>hills</option>
                                <option value='personal'>personal</option>
                                <option value='group'>group</option>
                                <option value='food'>Food</option>
                                <option value='family'>family</option>
                            </select>
                            
                            <div className='py-2 rounded-lg'>
                                <input type="file" name='image'  onChange={changeHandler} />
                                {/* <input 
                                    className="form-control-file mb-3" 
                                    type="file" name="photo"
                                    onChange={changeHandler}
                                    /> */}
                            </div>
                            <div className='pt-10'>
                                <button type='submit' className='bg-purple-500 hover:bg-purple-600 w-full px-2 py-2 rounded-lg'>Add Post</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div> 
        </div>
    );
};

export default CreatePost;