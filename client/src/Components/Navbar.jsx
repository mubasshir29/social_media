import React,{useEffect, useState} from 'react'
import logo from './../Images/logo.png'
import {NavLink, useNavigate} from 'react-router-dom'
import { HiHome } from "react-icons/hi";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { MdAmpStories, MdOutlineVideoCameraFront } from "react-icons/md";
import { MdOutlineAddCircle,MdCamera } from "react-icons/md";
import OutsideClickHandler from  'react-outside-click-handler'
import { useSelector, useDispatch } from 'react-redux';
import {checkLoginStatus,getUserDetails} from './../Utils/api.js'
import { setLogin } from '../Redux/authSlice';
import { FaUser,FaTape,FaInbox,FaHeart,FaBookmark,FaUserAlt } from "react-icons/fa";


function Navbar() {
  //const [loggedStatus, setLoggedStatus] = useState(false)
  const [profileButton, setProfileButton] = useState(false)

  const {loggedStatus, user_id, username} = useSelector((state)=>state.AuthReducer)
  // const username = useSelector((state)=>state.AuthReducer.username)
  const navigate = useNavigate()

  const onProfileClick = ()=>{
    setProfileButton(false)
    navigate('/profile')
  }

  const onNotificationsClick = () =>{
    setProfileButton(false)
    navigate('/profile')
  }
   const onLogout = ()=>{
    setProfileButton(false)
    navigate('/')
   }

   const onLogin = ()=>{
    setProfileButton(false)
    navigate('/login')
   }

   const getUserInfo = async (id) =>{
    const data = await getUserDetails(id)
    console.log(data)
   }

  useEffect(()=>{
    console.log(user_id)
    if(user_id){
      getUserInfo(user_id)
    }
  },[loggedStatus])
  return (
    <div className=' sm:h-[4rem] sm:max-h-[4rem] bg-white w-screen py-1 shadow-md z-10 fixed'>
        <section className='w-full h-full max-w-screen py-2 px-3 sm:px-6 mx-auto flex justify-between items-center'>
        <div className='w-full sm:flex-1'>
          <NavLink to='/'>
            <div className='flex gap-2 flex-row items-center justify-start'>
    
              {/* font-family: 'Courgette', cursive; */}
              <h1 className='text-2xl font-bold sm:text-3xl sm:font-bold text-indigo-400 font-Courgette'>Chirpy</h1>
            </div>
          </NavLink>
        </div>

        <ul className=' hidden sm:visible flex-1  sm:flex flex-col text-center text-2xl text-slate-400 sm:flex-row justify-center items-center gap-4 sm:gap-6'>
            <li className='border-2 border-indigo-400 text-indigo-400 hover:text-indigo-700 hover:border-indigo-700 p-2 rounded-xl'><NavLink to='/'><HiHome/></NavLink></li>
            <li className='border-2 border-indigo-400 text-indigo-400 hover:text-indigo-700 hover:border-indigo-700 p-2 rounded-xl'><NavLink to='/pix'><MdCamera/></NavLink></li>
            <li className='border-2 border-indigo-400 text-indigo-400 hover:text-indigo-700 hover:border-indigo-700 p-2 rounded-xl'><NavLink to='/tapes'><FaTape/></NavLink></li>
        </ul>
        <ul className='sm:flex-1 sm:flex text-center text-3xl sm:text-3xl text-slate-500 sm:justify-end sm:items-center sm:gap-4'>
          {/* <button className='relative group flex items-center gap-2 w-24 text-lg  bg-slate-400  text-white rounded-lg transition duration-200 ease-in-out px-6 py-2  hover:bg-slate-800 '>Post <span><MdOutlineAddCircle/></span>
          <ul className='absolute hidden group-hover:block w-24 text-slate-400  left-0 top-10 shadow-md'>
            <li className='px-6 py-1 hover:text-white bg-white hover:bg-slate-800 '><NavLink to='/new/recipe'>Recipe</NavLink></li>
            <li className='px-6 py-1 hover:text-white bg-white hover:bg-slate-800 '><NavLink to='/new/story'>Story</NavLink></li>
            <li className='px-6 py-1 hover:text-white bg-white hover:bg-slate-800  '><NavLink to='/new/video'>Video</NavLink></li>
          </ul>
          </button> */}
          <li className='hidden text-indigo-400  sm:block border-2 border-indigo-400  hover:text-indigo-700 hover:border-indigo-700 p-2 rounded-xl'><NavLink><IoIosNotifications/></NavLink></li>
          <li className='relative border-2 text-indigo-400 border-indigo-400  hover:text-indigo-700 hover:border-indigo-700 p-2 rounded-xl'>
            
              <button onClick={()=>{setProfileButton(!profileButton)}}><RiAccountPinCircleFill/></button>
            
            {profileButton &&
              <OutsideClickHandler onOutsideClick={() => {setProfileButton(false)}}>
              {loggedStatus ? <div className='absolute w-36 rounded-lg bg-white top-[60px] border-2 border-r-slate-100  right-0 text-base text-slate-700 flex flex-col shadow-lg'>
                <p>Logged in as {username}</p>
                <span onClick={()=> onProfileClick()} className='bg-white px-3 py-1 rounded-t-lg  hover:cursor-pointer'>Profile</span>
                <span onClick={()=> onNotificationsClick()} className='bg-white px-3 py-1  hover:cursor-pointer'>Notifications</span>
                <span onClick={()=> onLogout()} className='bg-white px-3 py-1 rounded-b-lg  hover:cursor-pointer'>Logout</span>
              </div>
              : <div className='absolute w-36 rounded-lg bg-white top-[60px] border-2 border-r-slate-100  right-0 text-base text-slate-700 flex flex-col shadow-lg'>
              <span onClick={()=> onLogin()} className='bg-white px-3 py-1 rounded-lg hover:cursor-pointer'>Login</span>
            </div>}
              </OutsideClickHandler>
            }
          </li>
        </ul>
        </section>
    </div>
  )
}

export default Navbar