import React, { useRef } from 'react'
import add_image from './../Images/Add_image.png'
import { RiImageAddFill } from "react-icons/ri";

function NewStory() {
  
  return (
    <div className='w-screen h-screen bg-slate-100'>
    <div className='mt-[4rem] sm:mt-[4rem] w-screen sm:w-screen sm:h-[calc(100% - 4rem)]  py-6'>
        
          <form className='w-full sm:w-[70rem] max-w-screen-xl mx-auto bg-slate-300/30 flex flex-col gap-6 px-10 py-12 rounded-xl'>
            <h3 className='font-bold text-2xl text-slate-500'>Add Story</h3>
            <input type='text' placeholder='Title' className='p-2 rounded-lg '></input>
            <textarea id="message" rows="4" className="block resize-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your story here..."></textarea>
            <div className=' flex flex-col gap-2'>
              <div className='added_images flex'>
                <div className='relative bg-white w-28 h-28 flex items-center justify-center rounded-lg' >
                  <span className='text-6xl text-slate-500/50'><RiImageAddFill/></span>
                </div>
              </div>
            </div>
            <button className='bg-blue-500 self-center py-3 px-6 rounded-lg text-white'>Save</button>
          </form>
        
    </div>
    </div>
  )
}

export default NewStory