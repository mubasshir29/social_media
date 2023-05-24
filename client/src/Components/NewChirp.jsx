import React, { useRef } from 'react'
import add_image from './../Images/Add_image.png'
import { RiImageAddFill } from "react-icons/ri";
import profilePic from './../Images/man.png'
import { HiOutlineGif } from "react-icons/hi2";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { BsEmojiSmile, BsCardImage } from "react-icons/bs";

import { CiImageOn } from "react-icons/ci";

function NewChirp() {
  
  return (
    <div className='w-full  rounded-xl p-3 flex flex-col gap-2 bg-white'>
      <div className='flex border-2 border-slate-100 p-3'>
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
  )
}

export default NewChirp