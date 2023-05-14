import React from 'react'
import { AiTwotoneLike } from "react-icons/ai";
import { NavLink, useNavigate } from 'react-router-dom';
import no_image from './../Images/no_image.jpg'
import { BsHeart, BsHeartFill, BsBookmark, BsFillBookmarkFill, BsShare, BsShareFill } from "react-icons/bs";
import { AiOutlineEdit,AiOutlineDelete } from "react-icons/ai";

function UserRecipeCard({recipe}) {
    const navigate = useNavigate()
    //console.log("In Recipe Page" ,recipe)
    const goToRecipePage = (e)=>{
        navigate('')
    }
  return (
    <NavLink to={`${recipe._id}`}>
    <div onClick={(e)=>goToRecipePage} className=' bg-slate-100 min-w-[25rem] min-h-[24rem] max-h-[28rem] w-[20rem] sm:w-[18rem] flex flex-col justify-between  rounded-xl mx-auto drop-shadow-lg group transition duration-200 ease-in-out hover:cursor-pointer'>
            <div className='flex-3 w-full h-48 relative rounded-t-xl bg-gradient-to-b from-gray-800/70 via -white  via-gray-700/70 to-gray-900'>
              <img className='w-full h-[12rem] object-cover rounded-t-xl mix-blend-overlay group ' src={recipe.image_gallery[0]?recipe.image_gallery[0].image_url:no_image}/> 
              
              <div className='absolute bottom-2 left-2 z-10 flex w-[95%] justify-between items-center'>
                <h2 className=' text-white  text-lg font-bold'>{recipe.title}</h2>
              </div>
            </div>
            <div className=' self-start flex-1 w-full p-3'>
              <p className='text-sm max-h-[6rem] h-[6rem] overflow-ellipsis overflow-hidden'>{recipe.description}</p>
            </div>
              <div className='flex justify-between gap-3 w-full items-stretch text-xs p-3 bg-white'>
                <div className='sm:flex-1 flex flex-col gap-1 items-center'>
                  <p>Preparation</p>
                  <span className='bg-slate-300  px-2 py-1 w-full text-center rounded-full'>{recipe.prepareTime} Mins</span>
                </div>
                <div className='sm:flex-1 flex flex-col gap-1 items-center'>
                  <p>Cook</p>
                  <span className='bg-slate-300 px-2 py-1 w-full text-center rounded-full'>{recipe.cookTime} Mins</span>
                </div>
                <div className='sm:flex-1 flex flex-col gap-1  items-center'>
                  <p>Difficult</p>
                  <span className='bg-slate-300 px-2 py-1 w-full text-center rounded-full'>{recipe.difficulty}</span>
                </div>
                <div className='sm:flex-1 flex flex-col gap-1 items-center'>
                  <p>Serves</p>
                  <span className='bg-slate-300 px-2 py-1 w-full text-center rounded-full'>{recipe.serves}</span>
                </div>
              </div>
              <div className='w-full flex justify-center text-xl text-slate-700 '>
                <span className='flex-1 bg-slate-100 flex justify-center py-2 rounded-bl-xl'><AiOutlineEdit/></span>
                <span className='flex-1 bg-slate-100 flex justify-center py-2 rounded-br-xl'><AiOutlineDelete/></span>
              </div>
          </div>
          </NavLink>
  )
}

export default UserRecipeCard