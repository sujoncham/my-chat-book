import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCommentAlt, FaGlobeAsia, FaHeart, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { toast } from 'react-toastify';
import useSWR from 'swr';

const fetcher = async() => {
   const res = await fetch('http://localhost:5000/chatPost');
   const data = await res.json();
   return data;
}

const PostCreate = () => {
    const { data, error } = useSWR('chatPost', fetcher);
    const [reply, setReply] = useState(false);
    const [like, setLike] = useState(0);
    const [comment, setComment] = useState(0);
    const [addComment, setAddComment] = useState([]);

    const username = localStorage.getItem("username")
    // console.log(addComment)
    useEffect(()=>{
        setReply(true)
    }, [])
    
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    // console.log(data);

    const handleUnlike = () =>{
        setLike(like-1)
    }

    const handleComments =()=>{
        setComment(comment + 1)
    }
 
    const handleAddComment = (e) =>{
        e.preventDefault();
        setAddComment(e.target.addComment.value)
        e.target.addComment.value = "";
    }

    const handleLike = (event) => {
        event.preventDefault();
        const formData = new FormData();
		formData.append('like', like);
      
        const url = "http://localhost:5000/chatPost/userLike";

		axios.post(url, formData)
			.then((res) => {
                console.log(res)
                if(res){
                    console.log('liked you')
                    toast("like Successfully");
                }
			})

	};

  
    return (
        <div>
            {data?.map(post =><div key={post._id} className='bg-white border-2 py-3 my-5 rounded-lg'>
                <div className='flex justify-start items-center gap-3 px-3'>
                    <img className='w-14 h-14 rounded-full' src={post.avatar} alt="" />
                    <div className='flex flex-col justify-start gap-1'>
                        <p>{username}</p>
                        <div className='flex items-center gap-2'>
                        <span>{post.createdAt}</span>
                        <span>{post.category}</span>
                        <FaGlobeAsia size={15} className='' />
                        </div>
                    </div>
                </div>
                <div className='px-3 pt-5'>
                    <p className='pb-2'>{post.userText}</p>
                    <img className='w-[100%] h-[450px]' src={`http://localhost:5000/image/${post.image}`} alt="" />
                </div>
                <div className='flex justify-between items-center px-3 py-2 h-[40px] border-b-[1px] border-gray-500'>
                    <div className='flex justify-start items-center gap-2'>
                        {like <= 0 ? "" : <span className="text-purple-700">{like}</span>}
                        {like >= 1 ? <FaHeart className='text-red-500' size={15} /> : ""}
                    </div>
                    <div className=''>
                        {comment <= 0 ? "" : <span className="text-purple-700">{comment} {comment >1 ? "Comments" : "Comment"}</span>}
                    </div>
                </div>
                <div className='flex justify-between items-center px-3 pt-2'>
                    <span className='flex justify-between items-center gap-1 hover:bg-gray-300 px-2 py-1 rounded-lg'>
                        
                        {!like ? <button onClick={handleLike} className='flex items-center gap-1'><FaThumbsUp size={15} className='' /><span onChange={(e)=>setLike(e.target.value)} value={like}>Like</span></button>:
                        <button onClick={handleUnlike} className='flex items-center gap-1'><FaThumbsDown size={15} className='' /><span>Unlike</span></button>}
                    </span>
                    <button onClick={handleComments} className='flex justify-between items-center gap-1 hover:bg-gray-300 px-2 py-1 rounded-lg'>
                        <FaCommentAlt size={15} className='' />
                        <span>Comments</span>
                    </button>
                </div>
                <div className='px-3 py-3'>
                    <div className='flex justify-start items-center gap-3 pb-5'>
                        <div className='flex justify-start items-center gap-1 w-full'>
                            <img className='w-12 h-12 rounded-full' src={post.avatar} alt="" />
                            <form className='flex w-full items-center gap-1' onSubmit={handleAddComment}>
                                <textarea type="text" name='addComment' className='px-3 py-1 w-full border-2 rounded-lg' placeholder='write a comment'></textarea>
                                <button type='submit' className='bg-purple-500 px-1 py-1 rounded-lg'>post</button>
                            </form>
                        </div>
                    </div>
                    <div className='pb-5'>
                        <div className='flex justify-start gap-3 '>
                            <img className='w-12 h-12 rounded-full' src="/images/5.jpg" alt="" />
                            <div className='flex flex-col justify-start gap-1'>
                                <p className='font-bold'>Modhurima chat</p>
                                <p>{addComment}</p>
                                <div className='flex justify-start items-center'>
                                    <div className='hover:underline px-2 py-2 rounded-lg cursor-pointer'>
                                        <span>Like</span>
                                    </div>
                                    <div className='hover:underline px-2 py-2 rounded-lg cursor-pointer'>
                                        <span onClick={()=>setReply(!reply)}>Reply</span>
                                    </div>
                                    <div className='hover:underline px-2 py-2 rounded-lg cursor-pointer'>
                                        <span>1h</span>
                                    </div>
                                </div>
                                {!reply ? <div className='flex justify-start items-center gap-3 pb-5'>
                                    <img className='w-12 h-12 rounded-full' src="/images/5.jpg" alt="" />
                                    <div className='flex flex-col justify-start gap-1'>
                                        <p className='font-bold'>Modhurima chat</p>
                                        <div className='flex justify-start items-center gap-2'>
                                            <input type="text" className='px-2 py-1 w-full border-2 rounded-lg' placeholder='write a comment' />
                                            <button className='bg-gray-500 px-1 py-1 rounded-lg'>post</button>
                                        </div>
                                    </div>
                                </div> : ""}
                            </div>
                        </div>

                    </div>
                </div>
            </div>)}
        </div>

    );
};

export default PostCreate;