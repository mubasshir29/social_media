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
    <div className='border-r w-[220px] py-6 px-3 fixed'>
        <ul className='text-xl flex flex-col gap-2'>
            <li className='flex  items-center  gap-2 p-2 hover:bg-gray-200'><IoHome/> Home</li>
            <li className='flex  items-center  gap-2 p-2 hover:bg-gray-200'><MdCamera/>Pix</li>
            <li className='flex  items-center  gap-2 p-2 hover:bg-gray-200'><FaTape/>Tapes</li>
            <li className='flex  items-center  gap-2 p-2 hover:bg-gray-200'><IoMdNotifications/>Notifications</li>
            <li className='flex  items-center  gap-2 p-2 hover:bg-gray-200'><FaInbox/>Inbox</li>
            <li className='flex  items-center  gap-2 p-2 hover:bg-gray-200'><FaHeart/>Liked</li>
            <li className='flex  items-center  gap-2 p-2 hover:bg-gray-200'><FaBookmark/>Bookmarks</li>
            <li className='flex  items-center  gap-2 p-2 hover:bg-gray-200'><FaUserAlt/>Profile</li>
            <li><button className='w-full rounded-full bg-purple-700 px-6 py-2 text-white' onClick={showNew}>Chirp</button></li>
        </ul>
    </div>
  )
}

export default Sidebar