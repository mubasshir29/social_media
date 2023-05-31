import React from 'react'
import Navbar from './../Components/Navbar';
import Sidebar from './../Components/Sidebar';
import NewsFeed from './../Pages/NewsFeed';

import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div className='bg-white min-h-screen w-screen flex flex-col relative p-0 m-0'>
      <span className='z-20'><Navbar/></span>

      <div className='flex w-[1296px] mx-auto mt-16'>
        
        <div className='relative w-[22%] hidden md:flex justify-end z-10'>
          <Sidebar/>
        </div>

        <div className='w-[54%] '>
          <div className='w-[95%] mx-auto bg-indigo-50/50 border border-slate-100 p-3'>
            <Outlet/>
          </div>
        </div>
        
        <div className='w-[22%] hidden md:block '>
          <NewsFeed/>
        </div>

      </div>
    </div>
  )
}

export default Home