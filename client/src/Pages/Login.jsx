import React,{useState} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {userLogin} from './../Utils/api.js'
import {setLogin, setLogout} from './../Redux/authSlice.js'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logged = useSelector((state)=>state.AuthReducer.loggedStatus)
    const username = useSelector((state)=>state.AuthReducer.username)
    const email = useSelector((state)=> state.AuthReducer.email_mob)

    const defaultLogin = {
        email_mob:"",
        password: ""
    }

    const [user,setUser]=useState(defaultLogin)

    const valueChange = (e)=>{
        setUser({...user, [e.target.name]:e.target.value})
        console.log(user)
    }

    const handleLoginButton = async(e)=>{
        e.preventDefault()
        //console.log(user)
        const response = await userLogin(user)
        if(response){
            console.log(response)
            if(response.status === 200)
                {
                    localStorage.setItem("token", response.data.token)
                    dispatch(setLogin(response.data))
                    navigate('/')
                }
        else console.log("There is an error")
    }
}
  return (
    <div className='w-screen h-screen absolute top-0 left-0 z-10 bg-slate-100 p-8'>
        <div className='flex flex-col gap-8 items-center w-[25rem] mx-auto '>
            <NavLink to='/'><h1 className='text-5xl'>Cookpit</h1></NavLink>
            <div className='bg-white shadow-lg rounded-xl flex flex-wrap gap-2 p-1 pb-8'>
                <div className='title flex-1 flex flex-col items-center p-2 text-slate-700'>
                    <p className='text-lg m-3'>Login to Cookpit</p>
                </div>
                <hr className='border-1 w-full' />
                <div className='form  flex flex-wrap gap-3 justify-center border-slate-400 p-3'>
                    <input name='email_mob' onChange={e => valueChange(e)} className='w-full border border-1 border-slate-300 rounded px-2 py-2' placeholder='Enter Email/Mobile' />
                    <input name='password' onChange={e => valueChange(e)} className='w-full border border-1 border-slate-300 rounded px-2 py-2' placeholder='Password' />

                    <button onClick={(e)=>handleLoginButton(e)} className='flex-1 w-32 px-3 py-2 rounded bg-slate-700 text-white'>Login</button>
                </div>
                <h2 className='w-full text-center text-base  text-slate-500'><NavLink to='/signup'>Forgot account? Signup for Cookpit</NavLink></h2>
            </div>
        </div>
    </div>
  )
}

export default Login