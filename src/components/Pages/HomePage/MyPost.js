import React, { useEffect, useState } from 'react';
import { FaCommentAlt, FaGlobeAsia, FaHeart, FaShare, FaThumbsUp } from "react-icons/fa";
import useSWR from 'swr';

const fetcher = async() => {
   const res = await fetch('post.json');
   const data = await res.json();
   return data;
}

const PostCreate = () => {
    const { data, error } = useSWR('posts', fetcher);
    const [reply, setReply] = useState(false);
    useEffect(()=>{
        setReply(true)
    }, [])
    
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    console.log(data);

    

    return (
        <div>
            {data.map(post =><div key={post.id} className='bg-white border-2 py-3 my-5 rounded-lg'>
                <div className='flex justify-start items-center gap-3 px-3'>
                    <img className='w-14 h-14 rounded-full' src="/images/5.jpg" alt="" />
                    <div className='flex flex-col justify-start gap-1'>
                        <p>{post.username}</p>
                        <div className='flex items-center gap-2'>
                        <span>{post.category[0]}</span>
                        <FaGlobeAsia size={15} className='' />
                        </div>
                    </div>
                </div>
                <div className='px-3 pt-5'>
                    <p className='pb-2'>{post.post}</p>
                    <img className='w-[100%] h-[450px]' src="/images/3.jpg" alt="" />
                </div>
                <div className='flex justify-between items-center px-3 py-2 border-b-[1px] border-gray-500'>
                    <div className='flex justify-start items-center gap-2'>
                    {post.like <= 0 ? "" : <span className="text-purple-700">{post.like}</span>}
                        {post.like >= 1 ? <FaHeart className='text-red-500' size={15} /> : ""}
                    </div>
                    <div className=''>
                    {post.comments <= 0 ? "" : <span className="text-purple-700">{post.comments} {post.comments >1 ? "Comments" : "Comment"}</span>}
                    </div>
                    <div className=''>
                    {post.share <= 0 ? "" : <span className="text-purple-700">{post.share} {post.share >1 ? "shares" : "share"}</span>}
                    </div>
                </div>
                <div className='flex justify-between items-center px-3 pt-2'>
                    <button className='flex justify-between items-center gap-1 hover:bg-gray-300 px-2 py-1 rounded-lg'>
                        <FaThumbsUp size={15} className='' />
                        <span>Like</span>
                    </button>
                    <button className='flex justify-between items-center gap-1 hover:bg-gray-300 px-2 py-1 rounded-lg'>
                        <FaCommentAlt size={15} className='' />
                        <span>Comments</span>
                    </button>
                    <button className='flex justify-start items-center gap-1 hover:bg-gray-300 px-2 py-1 rounded-lg'>
                        <FaShare size={20} />
                        <span>Share</span>
                    </button>
                </div>
                <div className='px-3 py-3'>
                    <div className='flex justify-start items-center gap-3 pb-5'>
                        <div className='flex justify-start items-center gap-1 w-full'>
                            <img className='w-12 h-12 rounded-full' src="/images/5.jpg" alt="" />
                            <input type="text" className='px-3 py-1 w-full border-2 rounded-lg' placeholder='write a comment' />
                        </div>
                    </div>
                    <div className='pb-5'>
                        <div className='flex justify-start gap-3 '>
                            <img className='w-12 h-12 rounded-full' src="/images/5.jpg" alt="" />
                            <div className='flex flex-col justify-start gap-1'>
                                <p className='font-bold'>Modhurima chat</p>
                                <p>I want to create a sticky side bar, which should not be scrollable with main content.</p>
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
                    <div className='flex justify-start items-center gap-3 pb-5'>
                        <img className='w-12 h-12 rounded-full' src="/images/5.jpg" alt="" />
                        <div className='flex flex-col justify-start gap-1'>
                            <p className='font-bold'>Modhurima chat</p>
                            <div className='flex justify-start items-center gap-2'>
                                <input type="text" className='px-2 py-1 w-full border-2 rounded-lg' placeholder='write a comment' />
                                <button className='bg-gray-500 px-1 py-1 rounded-lg'>post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>

    );
};

export default PostCreate;