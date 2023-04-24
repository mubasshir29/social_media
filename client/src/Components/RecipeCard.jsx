import React from 'react'
import { AiTwotoneLike } from "react-icons/ai";
import { NavLink, useNavigate } from 'react-router-dom';

function RecipeCard({recipe}) {
    const navigate = useNavigate()
    const goToRecipePage = (e)=>{
        navigate('')
    }
  return (
    <NavLink to={recipe.id}>
    <div onClick={(e)=>goToRecipePage} className=' bg-white w-[20rem] sm:w-[21rem] flex flex-col gap-3 rounded-xl mx-auto drop-shadow-lg hover:scale-[103%] transition duration-200 ease-in-out hover:cursor-pointer'>
            <div className='w-full h-48 relative rounded-t-xl bg-gradient-to-b from-gray-800/70 via -white  via-gray-700/70 to-gray-900'>
              <img className='w-full h-[12rem] object-cover rounded-t-xl mix-blend-overlay ' src={recipe.image_url}/> 
              
              <div className='absolute bottom-2 left-2 z-10 flex w-[95%] justify-between items-center'>
                <h1 className=' text-white  text-lg font-bold'>{recipe.title}</h1>
                <div className=' text-white flex gap-1 items-center'><AiTwotoneLike/><span className='text-xs'>({recipe.likes})</span></div>
              </div>
            </div>
             
            <div className='flex-4 flex flex-col gap-6 px-6 pb-6 pt-3'>
              <p className='text-sm'>{recipe.description}</p>
              <div className='flex justify-between gap-3 w-full items-stretch text-xs '>
                <div className='sm:flex-1 flex flex-col gap-1 items-center'>
                  <p>Preparation</p>
                  <span className='bg-slate-300  px-2 py-1 w-full text-center rounded-full'>{recipe.time_prepare}</span>
                </div>
                <div className='sm:flex-1 flex flex-col gap-1 items-center'>
                  <p>Cook</p>
                  <span className='bg-slate-300 px-2 py-1 w-full text-center rounded-full'>{recipe.time_cook}</span>
                </div>
                <div className='sm:flex-1 flex flex-col gap-1  items-center'>
                  <p>Difficult</p>
                  <span className='bg-slate-300 px-2 py-1 w-full text-center rounded-full'>{recipe.difficult_level}</span>
                </div>
                <div className='sm:flex-1 flex flex-col gap-1 items-center'>
                  <p>Serves</p>
                  <span className='bg-slate-300 px-2 py-1 w-full text-center rounded-full'>{recipe.serves}</span>
                </div>
              </div>
            </div>
          </div>
          </NavLink>
  )
}

export default RecipeCard