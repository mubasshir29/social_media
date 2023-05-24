import React from 'react'
import { FaRegComment, FaRegHeart, FaRegShareSquare,FaRegBookmark } from "react-icons/fa";
import { RiShareForward2Line,RiShareForwardLine } from "react-icons/ri";

function PixCard({item}) {
  return (
    <div className='flex flex-col w-full border border-slate-300 rounded-xl shadow-md bg-white'>
                        <div className='p-2 flex items-center gap-2'>
                            <div className='rounded-full w-10 h-10 bg-slate-400'></div>
                            <div className='flex flex-col gap-0 justify-center'>
                                <p className='font-bold'>touseef.raza</p>
                                <p className='text-slate-500 text-sm'>{item.user_id}</p>
                            </div>
                            
                        </div>
                        <img className='w-full' src={item.pix_url} />
                        <div className='flex w-full p-3 justify-between items-center  text-xl text-slate-500'>
                            <div className='flex gap-4'>
                                <span className='flex gap-1 items-center'><FaRegHeart/></span>
                                <span className='flex gap-1 items-center'><FaRegComment/></span>
                                <span className='flex items-center'><RiShareForwardLine/></span>
                            </div>
                            <span ><FaRegBookmark/></span>
                        </div>
                        <div className='px-3 pb-3 flex flex-col gap-1 '>
                            <p className='text-sm text-gray-700 font-bold'>175 Likes</p>
                            <p className='text-xs text-gray-500'>View all 35 comments</p>
                        </div>
                        
                    </div>
  )
}

export default PixCard