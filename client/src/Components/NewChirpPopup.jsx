import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import NewChirp from './NewChirp'
import { AiOutlineClose } from "react-icons/ai";
import {showChirp, hideChirp} from '../Redux/ButtonsSlice.js'
import { useNavigate } from 'react-router-dom';


function NewChirpPopup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const showNewChirp = useSelector((state) => state.buttonsReducer.showNewChirp)
    
    document.body.style.overflow = 'hidden'
    

    const hidePopup = ()=>{
        dispatch(hideChirp)
    }
    useEffect(()=>{
        dispatch(showChirp)
    },[])
  
    return (<div className='absolute top-0 left-0 z-20 w-screen h-screen flex justify-center items-center bg-gray-900/40'>
            <div className='w-[40vw] bg-white p-2 flex flex-col rounded-xl'>
                <div className='text-xl hover:bg-gray-100 rounded-full self-start p-2' onClick={()=>navigate(-1)}><AiOutlineClose/></div>
                <NewChirp/>
            </div>
        </div>)
  }

export default NewChirpPopup