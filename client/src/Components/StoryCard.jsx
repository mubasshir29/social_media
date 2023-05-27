import React from 'react'
import { FaRegComment, FaRegHeart, FaRegShareSquare } from "react-icons/fa";
import profilePic from './../Images/man.png'
import { RiShareForward2Line,RiShareForwardLine } from "react-icons/ri";



function StoryCard({post}) {
    console.log(post)
  return (
    <div className='border rounded-md p-6 flex gap-3 bg-white shadow-md hover:bg-slate-50 hover:shadow-lg'>
        <div className='w-[15%]'>
            <img  className='w-12 border rounded-full' src={profilePic} />
        </div>
        <div className='flex flex-col gap-3'>
            <div><span className='font-bold'>{post.user.name}</span><span className='text-slate-500'> @{post.user.handle}</span></div>
            <div className='flex flex-col gap-3'>
                <p>{post.post_text}</p>
                {post.media.map(item => <img className='rounded-lg border border-slate-300' src={item.url} />)}
            </div>
            <div className='flex justify-between '>
                
                <div className='flex gap-6 items-center text-base text-slate-500'>
                    <span className='flex gap-2 items-center'><FaRegHeart/>{post.likes}</span>
                    <span className='flex gap-2 items-center'><FaRegComment/>{post.comments.length}</span>
                    <span className='text-xl'><RiShareForwardLine/></span>
                </div>
                <span className='text-sm text-slate-500'>{post.time}</span>
            </div>
        </div>
    </div>
  )
}

export default StoryCard