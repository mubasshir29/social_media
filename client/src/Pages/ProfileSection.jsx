import React from 'react'
import { useSelector, useDis, useDispatch } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import Profile from './../Images/man.png'
import { IoLocationOutline } from "react-icons/io5";
import { BsBalloon } from "react-icons/bs";
import { showEditModal, hideEditModal } from '../Redux/buttonsSlice';


function ProfileSection() {
    const navigate = useNavigate()
    const {editModal} = useSelector((state) => state.buttons)
    const dispatch = useDispatch()

    const editProfile = (e) => {
        e.preventDefault()
        dispatch(showEditModal())
        navigate('edit')
    }
    return (
        <div className=' w-full sm:w-full flex flex-col '>
            <div id="banner_profile" className='w-full h-44 bg-slate-200 relative'>
                <div className='bg-indigo-400 w-32 h-32 rounded-full absolute -bottom-16 left-4 border-4 border-white'>
                </div>
            </div>
            <div id="personal_details" className='w-full flex flex-col gap-4 border border-slate-300 bg-white'>
                <button className='m-3 px-3 py-1 rounded-full self-end font-semibold border border-slate-300 hover:bg-indigo-400 hover:text-white hover:border-white' onClick={(e) => editProfile(e)}>Edit profile</button>
                <div id="username" className='pt-6 px-4'>
                    <h2 className='font-bold text-2xl'>Mubasshir Farooqui</h2>
                    <p className='text-slate-500'>@cook_ninja</p>
                </div>
                <div id="bio" className='px-4'>
                    <p className=' text-slate-700'>Practicing leadership – enabling others to achieve purpose in the face of uncertainty – requires engaging the heart, the head, and the hands: motivation, strategy, and action.</p>
                </div>
                <div id="location_dob" className='flex gap-6 px-4'>
                    <div className='flex gap-1 text-slate-500 items-center'><span><IoLocationOutline/></span><p>Warangal, Telangana</p></div>
                    <div className='flex gap-1 text-slate-500 items-center'><span><BsBalloon/></span><p>Born June,29 1994</p></div>
                    <div className='flex gap-1 text-slate-500 items-center'><span><BsBalloon/></span><p>Born June,29 1994</p></div>
                </div>
                <div id="profile_navbar">
                    <ul className='w-full flex justify-around text-slate-700 p-1 rounded-sm'>
                        <NavLink className={ ({isActive}) => isActive? "w-full py-1 text-center border-b-4 border-indigo-400" :'w-full py-1 text-center'} to='posts'><li>Posts</li></NavLink>
                        <NavLink className={ ({isActive}) => isActive? "w-full py-1 text-center border-b-4 border-indigo-400" :'w-full py-1 text-center'} to='pix'><li>Pix</li></NavLink>
                        <NavLink className={ ({isActive}) => isActive? "w-full py-1 text-center border-b-4 border-indigo-400" :'w-full py-1 text-center'} to='tapes'><li>Tapes</li></NavLink>
                        <NavLink className={ ({isActive}) => isActive? "w-full py-1 text-center border-b-4 border-indigo-400" :'w-full py-1 text-center'} to='liked'><li>Liked</li></NavLink>
                        <NavLink className={ ({isActive}) => isActive? "w-full py-1 text-center border-b-4 border-indigo-400" :'w-full py-1 text-center'} to='favorites'><li>Bookmarks</li></NavLink>
                    </ul>
                </div>
            </div>
            <div className='py-3'>
                <div className='bg-white'>
                    <Outlet/>
                </div>
            </div>
        </div>
  )
}

export default ProfileSection