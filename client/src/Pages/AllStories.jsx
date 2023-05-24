import React from 'react'
import NewChirp from '../Components/NewChirp'
import allPost from './../Data/stories.json'

import StoryCard from '../Components/StoryCard'








function AllStories() {
  return (
        
        <div className=' w-full p-3 bg-slate-50'>
            <h2 className='text-3xl font-bold'>Stories</h2>
            <NewChirp/>
            <div className='flex flex-col gap-3'>
            {allPost.map((post,index) => <StoryCard key={index} post={post}/> )}
            </div>
        </div>
  )
}

export default AllStories