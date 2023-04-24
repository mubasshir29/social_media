import React from 'react'
import logo from './../Images/logo.png'
import {NavLink} from 'react-router-dom'
import { HiHome } from "react-icons/hi";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { MdAmpStories, MdOutlineVideoCameraFront } from "react-icons/md";
import { MdOutlineAddCircle } from "react-icons/md";




function Navbar() {
  return (
    <div className=' sm:h-[8vh] sm:max-h-[8vh] bg-white w-screen py-1 shadow-md z-10 fixed'>
        <section className='w-full h-full max-w-screen py-2 px-3 sm:px-6 mx-auto flex justify-between items-center'>
        <div className='w-full sm:flex-1'>
          <NavLink to='/'>
            <div className='flex gap-2 flex-row items-center justify-start'>
              <img className='w-12 opacity-90' src={logo} />
              <h1 className='text-2xl font-bold sm:text-3xl sm:font-bold text-slate-600'>PAKWAN-SHALA</h1>
            </div>
          </NavLink>
        </div>

        <ul className=' hidden sm:visible flex-1  sm:flex flex-col text-center text-2xl text-slate-500 sm:flex-row justify-center items-center gap-4 sm:gap-6'>
            <li className='border border-white hover:border-slate-200 hover:bg-slate-100 p-2 rounded-xl'><NavLink><HiHome/></NavLink></li>
            <li className='border border-white hover:border-slate-200 hover:bg-slate-100 p-2 rounded-xl'><NavLink><MdAmpStories/></NavLink></li>
            <li className='border border-white hover:border-slate-200 hover:bg-slate-100 p-2 rounded-xl'><NavLink><MdOutlineVideoCameraFront/></NavLink></li>
        </ul>
        <ul className='sm:flex-1 sm:flex text-center text-3xl sm:text-3xl text-slate-500 sm:justify-end sm:items-center sm:gap-4'>
          <button className='relative group flex items-center gap-2 w-24 text-lg  bg-slate-500 text-white px-6 py-2 rounded-lg '>Post <span><MdOutlineAddCircle/></span>
          <ul className='absolute hidden group-hover:block w-24 text-slate-900 left-0 top-11'>
            <li className='px-6 py-1 hover:text-white bg-slate-300 hover:bg-slate-500 rounded-t-lg'><NavLink to='/new/recipe'>Recipe</NavLink></li>
            <li className='px-6 py-1 hover:text-white bg-slate-300 hover:bg-slate-500'><NavLink to='/new/story'>Story</NavLink></li>
            <li className='px-6 py-1 hover:text-white bg-slate-300 hover:bg-slate-500 rounded-b-lg'><NavLink to='/new/video'>Video</NavLink></li>
          </ul>
          </button>
          <li className='hidden sm:block border border-white hover:border-slate-200 hover:bg-slate-100 p-2 rounded-xl'><NavLink><IoIosNotifications/></NavLink></li>
          <li className='border border-white hover:border-slate-200 hover:bg-slate-100 rounded-xl'><NavLink><RiAccountPinCircleFill/></NavLink></li>
        </ul>
        </section>
    </div>
  )
}

export default Navbar