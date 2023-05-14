import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {getUserDetails} from './../Utils/api.js'
import { FaBirthdayCake } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



function MyInfo() {
    const {loggedStatus, user_id,username} = useSelector((state)=>state.AuthReducer)
    const [user,setUser] = useState()
    const months = ['January', 'February' , 'March' , 'April', 'May' , 'June', 'July', 'August' , 'September' , 'October' , 'November' , 'December']

    const getUserInfo = async (id) =>{
        const data = await getUserDetails(id)
        //console.log(data)
        setUser(data)
       }

    useEffect(()=>{
        //console.log(user_id)
        if(user_id){
          getUserInfo(user_id)
        }
      },[loggedStatus])
    
      if(user){
        return (
            <div className=' flex flex-col gap-3'>
                <div className='flex-1 flex justify-between items-center'>
                    <h3 className='text-4xl font-bold'>{user.first_name} {user.last_name}</h3>
                    <button className='bg-slate-700/50 hover:bg-slate-700/80 text-white px-3 py-1 rounded-md'>Edit Profile</button>
                </div>
                <div className='flex gap-3'>
                    <span className='bg-slate-100 flex-1 flex items-center gap-2 p-3 rounded-md'><FaBirthdayCake/> {user.dob.day}th {months[user.dob.month - 1]}, {user.dob.year}</span>
                    <span className='bg-slate-100 flex-1 flex items-center gap-2 p-3 rounded-md'><MdEmail/> {user.email_mob}</span>
                </div>
                <h4 className='bg-slate-100 flex-1 flex items-center gap-2 p-3 rounded-md'>Lives in: </h4>
                <h4 className='bg-slate-100 flex-1 flex items-center gap-2 p-3 rounded-md'>Works at: </h4>
                <h4 className='bg-slate-100 flex-1 flex items-center gap-2 p-3 rounded-md'>Studied in: </h4>
                <h4 className='bg-slate-100 flex-1 flex items-center gap-2 p-3 rounded-md'>Website: </h4>
                <h4 className='bg-slate-100 flex-1 flex items-center gap-2 p-3 rounded-md'>Instagram</h4>
                <h4 className='bg-slate-100 flex-1 flex items-center gap-2 p-3 rounded-md'>Facebook</h4>
                <h4 className='bg-slate-100 flex-1 flex items-center gap-2 p-3 rounded-md'>Twitter</h4>
                <h4 className='bg-slate-100 flex-1 flex items-center gap-2 p-3 rounded-md'>Youtube</h4>
            </div>
          )
      }
}

export default MyInfo