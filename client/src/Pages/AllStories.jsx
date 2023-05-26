import React from 'react'
import NewChirp from '../Components/NewChirp'
import allPost from './../Data/stories.json'
import profilePic from './../Images/man.png'
import { HiOutlineGif } from "react-icons/hi2";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { BsEmojiSmile, BsCardImage, BsPlusSquare } from "react-icons/bs";
import StoryCard from '../Components/StoryCard'

function AllStories() {
  return (
        
        <div className=' w-full mx-auto p-3 flex flex-col gap-3 '>
            <h2 className='text-3xl font-bold'>Stories</h2>
            <div className='w-full rounded-xl p-3 flex flex-col gap-2 bg-white border border-slate-200 shadow-md'>
              <div className='flex  p-3'>
                <img className='self-start w-14 border rounded-full' src={profilePic} />
                <textarea placeholder='Share your story here' className='flex-1 resize-none w-full px-3 text-xl focus:outline-none' rows='3' />
              </div>

              <div className=''>
                <div className='w-full flex justify-between'>
                  <div className='flex gap-2 items-center px-3'>
                    <span className='text-xl text-purple-700'><BsCardImage/></span>
                    <span className='text-2xl text-purple-700'><HiOutlineGif/></span>
                    <span className='text-xl text-purple-700'><BsEmojiSmile/></span>
                  </div>
                  <button className='bg-purple-700 text-white py-1 px-4 rounded-full'>Share</button>
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