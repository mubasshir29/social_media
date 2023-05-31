import React, { useEffect } from 'react'
import { MdClose } from "react-icons/md";
import {Card, Input,Checkbox,Button,Typography, Textarea,  } from "@material-tailwind/react";
import { useSelector, useDispatch } from 'react-redux';
import { hideEditModal } from '../Redux/buttonsSlice';
import { useNavigate } from 'react-router-dom';

function EditProfile() {
    const navigate = useNavigate()
    const editModal = useSelector((state) => state.buttons.editModal)
    const dispatch = useDispatch()
    const thisYear = (new Date()).getFullYear()
    const valueChange = ()=>{

    }
    useEffect(()=>{
        document.body.style.overflow = 'hidden'
        console.log("Edit Model:", editModal)
    },[])
    const closeModal = (e) => {
        e.preventDefault()
        document.body.style.overflow = 'auto'
        navigate(-1)
        dispatch(hideEditModal())
    }
    if(editModal === false) return null;
  return (
    <div id="modal_container" className='w-screen h-screen absolute top-0 left-0 z-30 bg-slate-700/50 flex justify-center items-center'>
        
        <div id="modal_content" className='w-[580px] h-[660px] flex flex-col bg-white rounded-lg relative pt-12 pb-6'>
            
            <div id="modal_topbar" className='w-full h-12 p-3 flex justify-between items-center bg-white absolute top-0 left-0 z-40 rounded-t-lg'>
                <div className='flex gap-3 items-center '>
                    <span className='p-1 border border-indigo-400 rounded-full text-indigo-400 text-lg' onClick={(e)=>closeModal(e)}><MdClose/></span>
                    <h2 className='text-indigo-400 text-lg font-bold'>Edit profile</h2>
                </div>
                <button className='px-3 py-1 bg-indigo-400 text-white rounded-full'>Save</button>
            </div>

            <div className='overflow-y-scroll flex flex-col'>

            <div id="banner_profilepic" className='relative'>
                <div className='w-full h-44 bg-slate-200 relative'></div>
                <div className='bg-indigo-400 w-32 h-32 rounded-full absolute -bottom-16 left-4 border-4 border-white'></div>
            </div>


            <div id="form_container" className='flex flex-col text-lg gap-6 px-6 pt-20'>
                
                <div id="name_fields" className='w-full flex gap-2'>
                    <input name='first_name' onChange={(e)=>valueChange(e)}className='w-full border border-1 border-slate-300 rounded px-2 py-2' placeholder='First name' />
                    <input name='last_name' onChange={(e)=>valueChange(e)}className='w-full border border-1 border-slate-300 rounded px-2 py-2' placeholder='Last name' />
                </div>

                <textarea rows="3" className='resize-none w-full border border-slate-300 rounded px-2 py-2' placeholder='Bio description' />
                <input name='email_mob' onChange={(e)=>valueChange(e)}className='w-full border border-1 border-slate-300 rounded px-2 py-2' placeholder='Mobile number or email' />
                
                <div id="dob_container" className='flex justify-between w-full gap-3'>
                    <select name='day' placeholder='Day' defaultValue=""  className='flex-1 px-2 py-1.5 border border-1 border-slate-300 rounded appearance-none'>
                        <option disable value='DEFAULT' >Day</option>
                        {/* {day && day.map(dateValue => <option value={dateValue} placeholder='Day'>{dateValue}</option>)} */}
                        {[...Array(31).keys()].map(number => <option value={number+1} placeholder='Day'>{number+1}</option> )}
                    </select>
                    <select name='month' placeholder='Month' defaultValue=""  className='flex-1 px-2 py-1.5 border border-1 border-slate-300 rounded appearance-none'>
                        <option disable value='DEFAULT' >Month</option>
                        {/* {month && month.map(monthValue => <option value={monthValue} placeholder='Day'>{monthValue}</option>)} */}
                        {[...Array(12).keys()].map(number => <option value={number+1} placeholder='Month'>{number+1}</option> )}
                    </select>
                    <select name='year' placeholder='Month' defaultValue=""  className='flex-1 px-2 py-1.5 border border-1 border-slate-300 rounded appearance-none'>
                        <option disable value='DEFAULT' >Year</option>
                        {/* {month && month.map(monthValue => <option value={monthValue} placeholder='Day'>{monthValue}</option>)} */}
                        {([...Array(200).keys()]).map(number => <option value={thisYear-number} placeholder='Year'>{thisYear-number}</option> )}
                    </select>
                </div>
                
                <input name='location' onChange={(e)=>valueChange(e)}className='w-full border border-1 border-slate-300 rounded px-2 py-2' placeholder='Location' />

            </div>
            </div>
        </div>
    </div>
  )
}

export default EditProfile