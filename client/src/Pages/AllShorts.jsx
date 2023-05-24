import React from 'react'
import NewStory from '../Components/NewChirp'
import allPost from '../Data/stories.json'
import allNews from '../Data/newsData.json'
import StoryCard from '../Components/StoryCard'
import NewsCard from '../Components/NewsCard'
import { GiRiceCooker } from "react-icons/gi";
import { MdFastfood, MdHome } from "react-icons/md";
import { IoHome,IoVideocam,IoChatbox } from "react-icons/io5";
import { IoMdNotifications, } from "react-icons/io";
import { BsFillChatSquareTextFill,BsFillHeartFill,BsFillBookmarkFill} from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import { FaUser } from "react-icons/fa";






function AllStories() {
  return (
    <div className='mx-auto flex w-[80rem] sm:w-[75rem] mt-[8vh] sm:mt-[8vh]'>
        <div className='border-r w-[18%] py-6 px-3'>
            <ul className='text-xl flex flex-col gap-2'>
                <li className='flex  items-center  gap-2 p-2 hover:bg-gray-200'><IoHome/> Home</li>
                <li className='flex  items-center  gap-2 p-2 hover:bg-gray-200'><MdFastfood/>Recipies</li>
                <li className='flex  items-center  gap-2 p-2 hover:bg-gray-200'><IoVideocam/>Videos</li>
                <li className='flex  items-center  gap-2 p-2 hover:bg-gray-200'><IoMdNotifications/>Notifications</li>
                <li className='flex  items-center  gap-2 p-2 hover:bg-gray-200'><IoChatbox/>Messages</li>
                <li className='flex  items-center  gap-2 p-2 hover:bg-gray-200'><BsFillHeartFill/>Liked</li>
                <li className='flex  items-center  gap-2 p-2 hover:bg-gray-200'><BsFillBookmarkFill/>Bookmarks</li>
                <li className='flex  items-center  gap-2 p-2 hover:bg-gray-200'><FaUser/>Profile</li>
            </ul>
        </div>
        <div className=' w-[60%] p-6 bg-slate-50'>
            <h2 className='text-3xl font-bold'>Stories</h2>
            <NewStory/>
            <div className='flex flex-col gap-3'>
            {allPost.map((post,index) => <StoryCard key={index} post={post}/> )}
            </div>
        </div>
        <div className='border-l w-[22%] px-3 py-6 flex flex-col gap-2 '>
            <h2 className='text-lg font-bold'>News</h2>
            {allNews.map((item,index)=> <NewsCard post={item} />)}
        </div>
    </div>
  )
}

export default AllStories