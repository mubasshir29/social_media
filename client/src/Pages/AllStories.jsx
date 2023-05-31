import React from 'react'
import NewChirp from '../Components/NewBuzz'
import allPost from './../Data/stories.json'
import profilePic from './../Images/man.png'
import { HiOutlineGif } from "react-icons/hi2";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { BsEmojiSmile, BsCardImage, BsPlusSquare } from "react-icons/bs";
import StoryCard from '../Components/StoryCard'

function AllStories() {
  return (
        
        <div className=' w-full mx-auto p-3 flex flex-col gap-3'>
            <h2 className='text-3xl font-bold'>Posts</h2>
            <div className='w-full rounded-md p-3 flex flex-col gap-2 bg-white border border-slate-200 shadow-md'>
              <div className='flex  p-3'>
                <span><img className='self-start w-14 rounded-full' src={profilePic} /></span>
                <textarea placeholder='Share your story here' className='flex-1 resize-none w-full px-3 text-xl placeholder-indigo-400/40 text-indigo-700 focus:outline-none' rows='3' />
              </div>

              <div className=''>
                <div className='w-full flex justify-between'>
                  <div className='flex gap-2 items-center px-3'>
                    <span className='text-xl'><BsCardImage/></span>
                    <span className='text-2xl'><HiOutlineGif/></span>
                    <span className='text-xl'><BsEmojiSmile/></span>
                  </div>
                  <button className='bg-indigo-400 text-white py-1 px-4 rounded-full'>Buzzerr</button>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-6'>
            {allPost.map((post,index) => <StoryCard key={index} post={post}/> )}
            </div>
        </div>
  )
}

export default AllStories