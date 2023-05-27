import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';
import {MdCamera } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { IoMdNotifications, } from "react-icons/io";
import { FaTape,FaInbox,FaHeart,FaBookmark,FaUserAlt } from "react-icons/fa";
import {showChirp, hideChirp} from '../Redux/ButtonsSlice.js'

function Sidebar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {showNewChirp} = useSelector((state)=>state.buttonsReducer)

    const showNew = ()=>{
        dispatch(showChirp)
        navigate('/new/chirp')
    }
  return (
    <div className='w-[220px] py-6 px-3 fixed min-h-screen bg-white '>
        <ul className='text-xl flex flex-col gap-2 text-indigo-400'>
            <li className='flex  items-center  gap-2 p-2 hover:bg-indigo-200 hover:text-indigo-700 rounded-full transition ease-in-out'><IoHome/> Home</li>
            <li className='flex  items-center  gap-2 p-2 hover:bg-indigo-200 hover:text-indigo-700 rounded-full transition ease-in-out'><MdCamera/>Pix</li>
            <li className='flex  items-center  gap-2 p-2 hover:bg-indigo-200 hover:text-indigo-700 rounded-full transition ease-in-out'><FaTape/>Tapes</li>
            <li className='flex  items-center  gap-2 p-2 hover:bg-indigo-200 hover:text-indigo-700 rounded-full transition ease-in-out'><IoMdNotifications/>Notifications</li>
            <li className='flex  items-center  gap-2 p-2 hover:bg-indigo-200 hover:text-indigo-700 rounded-full transition ease-in-out'><FaInbox/>Inbox</li>
            <li className='flex  items-center  gap-2 p-2 hover:bg-indigo-200 hover:text-indigo-700 rounded-full transition ease-in-out'><FaHeart/>Liked</li>
            <li className='flex  items-center  gap-2 p-2 hover:bg-indigo-200 hover:text-indigo-700 rounded-full transition ease-in-out'><FaBookmark/>Bookmarks</li>
            <li className='flex  items-center  gap-2 p-2 hover:bg-indigo-200 hover:text-indigo-700 rounded-full transition ease-in-out'><FaUserAlt/>Profile</li>
            {/* <li><button className='w-full rounded-full bg-indigo-400 px-6 py-2 text-white' onClick={showNew}>Buzzerr</button></li> */}
        </ul>
    </div>
  )
}

export default Sidebar