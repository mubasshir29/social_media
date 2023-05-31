import React from 'react'

function NewsCard({post}) {
  return (
    <div className='bg-indigo-50/50 p-2  rounded-md flex flex-col gap-2'>
        <h3 className='text-sm font-bold'>{post.title}</h3>
        <p className='text-xs text-slate-700'>{post.news_content}</p>
        <div className='flex w-full justify-between text-[10px] text-slate-500'>
            <span>{post.time}</span>
            <span>{post.date}</span>
        </div>
        <div className='text-[10px] text-slate-500 flex flex-col gap-1 w-full'>
            <p>News by <span className='font-bold italic'>{post.author}</span></p>
            <p>On <span className='font-bold'>{post.source}</span></p>
        </div>
    </div>
  )
}

export default NewsCard