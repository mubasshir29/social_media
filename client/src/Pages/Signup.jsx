import React,{useState} from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import {userSignUp} from './../Utils/api.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Signup() {
    const [error,setError] = useState("")
    const [dateOfBirth,setDateOfBirth] = useState()
    const thisYear = (new Date()).getFullYear()
    const navigate = useNavigate();

    const defaultDateValue = {
        day: "",
        month: "",
        year: ""
    }
    const [birthday,setBirthday] = useState(defaultDateValue)

    const defaultSignup = {
        first_name:"",
        last_name:"",
        email_mob: "",   
        password:"",
        dob: birthday,
        gender: ""
    }
    
    const [newUser,setNewUser]=useState(defaultSignup)
    

    const valueChange = (e)=>{
        setNewUser({...newUser, [e.target.name]:e.target.value})
        
    }
    const DateValueChange = (e) => {
        setBirthday({...birthday, [e.target.name]:e.target.value})
        console.log(newUser)
    }

    const handleSignupButton = async(e)=>{
        e.preventDefault()
        
        console.log(newUser)
         const response = await userSignUp(newUser)
    //     //console.log(newUser)
        if(response){
            console.log("Signup response", response)
            switch(response.status){
                case 201: {
                  
                    showSuccessToast()
                    break;
                }
                case 400: {
                        setError("Username already exist")
                        break;
                }
                default :{
                    console.log("There is an error");
                    break
                }
            }
    }
}

const showSuccessToast = ()=>{
    toast.success("Successfully sign up", {
        position: toast.POSITION.TOP_CENTER
    });
    navigate('/')
}


  return (
    <div className='w-screen h-screen absolute top-0 left-0 z-10 bg-slate-100 p-8'>
        <div className='flex flex-col gap-8 items-center w-[30rem] mx-auto '>
            <h1 className='text-5xl text-indigo-400'>Buzzerr</h1>
            <div className='bg-white shadow-lg rounded-xl flex flex-wrap gap-2 p-1 pb-8'>
                <div className='title flex-1 flex flex-col items-center p-2'>
                    <h2 className='text-2xl font-bold '>Create a new account</h2>
                    <p>It's quick and easy</p>
                </div>
                <hr className='border-1 w-full' />
                <div className='form  flex flex-wrap gap-3 justify-center border-slate-400 p-3'>
                    <input name='first_name' onChange={(e)=>valueChange(e)}className='w-[48%] border border-1 border-slate-300 rounded px-2 py-2' placeholder='First name' />
                    <input name='last_name' onChange={(e)=>valueChange(e)}className='w-[48%] border border-1 border-slate-300 rounded px-2 py-2' placeholder='Last name' />
                    <input name='email_mob' onChange={(e)=>valueChange(e)}className='w-full border border-1 border-slate-300 rounded px-2 py-2' placeholder='Mobile number or email' />
                    <input name='password' type='password' onChange={(e)=>valueChange(e)}className='w-full border border-1 border-slate-300 rounded px-2 py-2' placeholder='Password' />
                    <div className='dob w-full flex flex-col gap-2'>
                    <p className='text-slate-500 text-sm' >Birthday</p>
                        <div className='flex justify-between w-full gap-3'>
                            <select name='day' placeholder='Day' defaultValue="" onChange={e => newUser.dob["day"] = e.target.value} className='flex-1 px-2 py-1.5 border border-1 border-slate-300 rounded appearance-none'>
                                <option disable value='DEFAULT' >Day</option>
                                {/* {day && day.map(dateValue => <option value={dateValue} placeholder='Day'>{dateValue}</option>)} */}
                                {[...Array(31).keys()].map(number => <option value={number+1} placeholder='Day'>{number+1}</option> )}
                            </select>
                            <select name='month' placeholder='Month' defaultValue="" onChange={e => newUser.dob["month"] = e.target.value} className='flex-1 px-2 py-1.5 border border-1 border-slate-300 rounded appearance-none'>
                                <option disable value='DEFAULT' >Month</option>
                                {/* {month && month.map(monthValue => <option value={monthValue} placeholder='Day'>{monthValue}</option>)} */}
                                {[...Array(12).keys()].map(number => <option value={number+1} placeholder='Month'>{number+1}</option> )}
                            </select>
                            <select name='year' placeholder='Month' defaultValue="" onChange={e => newUser.dob["year"] = e.target.value} className='flex-1 px-2 py-1.5 border border-1 border-slate-300 rounded appearance-none'>
                                <option disable value='DEFAULT' >Year</option>
                                {/* {month && month.map(monthValue => <option value={monthValue} placeholder='Day'>{monthValue}</option>)} */}
                                {([...Array(200).keys()]).map(number => <option value={thisYear-number} placeholder='Year'>{thisYear-number}</option> )}
                            </select>
                            
                        </div>
                    </div>
                    <div className='flex-1 gender flex flex-col gap-1 w-full'>
                        <p className='text-slate-500 text-sm' >Gender</p>
                        <div className='flex gap-3 items-center w-full'>
                            <div class="flex items-center">
                                <input id="male" type="radio" value="Male" name="gender" onChange={(e)=>valueChange(e)} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                            </div>
                            <div class="flex items-center">
                                <input id="female" type="radio" value="Female" name="gender" onChange={(e)=>valueChange(e)} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                            </div>
                        </div>

                        
                    </div>

                    <p className='text-xs flex flex-col gap-2 text-gray-500 my-3'>
                        <span>
                        People who use our service may have uploaded your contact information to Facebook. Learn more.</span>
                        <span>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time
                        </span>
                    </p>

                    <button onClick={(e)=>{handleSignupButton(e)}} className='w-32 px-3 py-2 rounded bg-indigo-400 text-white'>Sign Up</button>
                    
                </div>
                <h2 className='w-full text-center text-xl font-bold text-indigo-400'><NavLink to='/login'>Already have an account?</NavLink></h2>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Signup