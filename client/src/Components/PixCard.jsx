import React from 'react'
import { FaRegComment, FaRegHeart, FaRegShareSquare,FaRegBookmark } from "react-icons/fa";
import { RiShareForward2Line,RiShareForwardLine } from "react-icons/ri";

function PixCard({item}) {
  return (
    <div className='flex flex-col w-full border border-slate-300 rounded-md shadow-md bg-white'>
                        <div className='p-2 flex items-center gap-2'>
                            <div className='rounded-full w-10 h-10 bg-slate-400'></div>
                            <div className='flex flex-col gap-0 justify-center'>
                                <p className='font-bold'>touseef.raza</p>
                                <p className='text-slate-500 text-sm'>{item.user_id}</p>
                            </div>
                            
                        </div>
                        
                        <div className='relative group w-full justify-between items-center  text-xl text-slate-500'>
                            <img className='w-full object-cover' src={item.pix_url} />
                            <div className='hidden group-hover:block absolute z-10 w-full h-full top-0 left-0 bg-gradient-to-r from-gray-900/90  via-gray-700/10 to-gray-900/90'></div>
                            <div className='hidden z-20 group-hover:flex absolute top-[50%] -translate-y-[50%]  right-6 flex-col gap-4 text-white'>
                                <span className='flex gap-1 items-center'><FaRegHeart/></span>
                                <span className='flex gap-1 items-center'><FaRegComment/></span>
                                <span className='flex items-center'><RiShareForwardLine/></span>
                                <span ><FaRegBookmark/></span>
                            </div> 
                        </div>
                        <div className='p-3 flex flex-col gap-1 '>
                            <p className='text-sm text-gray-700 font-bold'>175 Likes</p>
                            <p className='text-xs text-gray-500'>View all 35 comments</p>
                        </div>
                        
                    </div>
  )
}

export default PixCard