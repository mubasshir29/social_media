import React from 'react'
import NewsCard from '../Components/NewsCard'
import allNews from './../Data/newsData.json'
function NewsFeed() {
  return (
    <div className='w-full py-6 flex flex-col gap-2 '>
        <h2 className='text-lg font-bold'>News</h2>
        {allNews.map((item,index)=> <NewsCard post={item} />)}
    </div>
  )
}

export default NewsFeed