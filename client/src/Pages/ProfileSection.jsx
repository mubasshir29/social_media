import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Profile from './../Images/Profile.png'

function ProfileSection() {
    return (
        <div className='mt-[8vh] sm:mt-[8vh] min-h-[92vh] w-screen sm:w-screen bg-slate-50'>
            <div className='w-full sm:w-[70rem] sm:h-screen max-w-screen-xl mx-auto  flex gap-[2rem] py-6'>
                <div className='flex flex-col gap-4 py-4  sm:w-[15rem] bg-slate-100 self-start rounded-xl'>
                    <div className='flex justify-center'>
                        <img src={Profile} className='w-48' />
                    </div>
                    <ul className='text-base flex flex-col gap-2  text-gray-700 p-3 rounded-sm'>
                        <NavLink to='recipes'><li>Recipes</li></NavLink>
                        <NavLink to='stories'><li>Stories</li></NavLink>
                        <NavLink to='videos'><li>Videos</li></NavLink>
                        <NavLink to='liked'><li>Liked</li></NavLink>
                        <NavLink to='favorites'><li>Favorites</li></NavLink>
                        <NavLink to='info'><li>Personal info</li></NavLink>
                        <span>Logout</span>
                    </ul>
                </div>
                <div className='flex-1 '>
                    <Outlet/>
                </div>
            </div>
        </div>
  )
}

export default ProfileSection