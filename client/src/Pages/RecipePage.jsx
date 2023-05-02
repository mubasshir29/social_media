import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import biryani from './../Images/Hyderabadi-Biryani.jpg'
import ingred_icon from './../Images/ingredient.png'
import prep_icon from './../Images/cutting-board.png'
import cook_icon from './../Images/cooking.png'
import {getSingleRecipe} from './../Utils/api.js'

function RecipePage() {

  const [recipe,setRecipe] = useState()
  //const [id,setId] = useState()

  //const location = useLocation()
  const {id} = useParams()
  //console.log(location)

  const recipeDetails = async () =>{
    const received = await getSingleRecipe(id)
    console.log(received.data)
    setRecipe(received.data)
  }

  useEffect(()=>{
    recipeDetails()
  },[])
  
  if(recipe){
    return (
      <div className='mt-[8vh] sm:mt-[8vh] w-[70rem] h-[92vh] sm:w-[70rem] mx-auto p-4'>
        <div className='recipe_page flex gap-4 h-full'>
  
          <div className='image_description left_side w-[30%] flex flex-col gap-6  bg-slate-100 rounded-xl'>
            <div className='w-full h-[14rem] relative rounded-t-xl bg-gradient-to-b from-gray-800/70 via -white  via-gray-700/70 to-gray-900'>
              <img className='w-full h-[14rem] object-cover rounded-t-xl mix-blend-overlay ' src={recipe.image_gallery[0].image_url}/> 
              <div className='absolute bottom-2 left-2 z-10 flex w-[95%] justify-between items-center'>
                <h1 className=' text-white  text-lg font-bold'>{recipe.title}</h1>
              </div>
              </div>
              <div className='recipe_description text-sm p-4'>
                <p>{recipe.description}</p>
              </div>
              <div className='recipe_details flex flex-wrap gap-2 text-xs px-4'>
                <div className='prep_time bg-white py-1 px-1 rounded-xl flex gap-1'>
                  <span className=''>Prep time</span>
                  <span className='bg-slate-300 px-2 rounded-xl'>{recipe.prepareTime} mins</span>
                </div>
                <div className='cook_time bg-white py-1 px-1 rounded-xl flex gap-1'>
                  <span className=''>Cook time</span>
                  <span className='bg-slate-300 px-2 rounded-xl'>{recipe.cookTime} mins</span>
                </div>
                <div className='serve_details bg-white py-1 px-1 rounded-xl flex gap-1'>
                  <span className=''>Serves</span>
                  <span className='bg-slate-300 px-2 rounded-xl'>{recipe.serves}</span>
                </div>
              </div>
            <div>
  
            </div>
          </div>
          <div className='right_side w-[70%] flex flex-col gap-6 bg-slate-100  rounded-lg p-6'>
            <div className=''>
              <ul className='flex justify-center w-[80%] mx-auto gap-6'>
                <li >
                  <div className='flex flex-col items-center gap-2'>
                    <span className='text-sm'>Ingredients</span>
                    <NavLink to='ingredients' state={{ingredients: recipe.ingredients}} ><div className='w-16 h-16 rounded-full bg-slate-200 hover:bg-slate-300 hover:cursor-pointer p-4'><img className='w-16' src={ingred_icon} /> </div></NavLink>
                  </div>
                </li>
                <li>
                  <div className='flex flex-col items-center gap-2'>
                    <span className='text-sm'>Preparation</span>
                    <NavLink to='preparation' state={{preparation: recipe.preparation}}><div className='w-16 h-16 rounded-full bg-slate-200 hover:bg-slate-300 hover:cursor-pointer p-4'><img className='w-16' src={prep_icon} /> </div></NavLink>
                  </div>
                </li>
                <li >
                  <div className='flex flex-col items-center gap-2'>
                    <span className='text-sm'>Cooking</span>
                    <NavLink to='cooking' state={{cooking: recipe.cooking}}><div className='w-16 h-16 rounded-full bg-slate-200 hover:bg-slate-300 hover:cursor-pointer p-4'><img className='w-16' src={cook_icon} /> </div></NavLink>
                  </div>
                </li>
              </ul>
            </div>
            <div className='w-80% h-[80%]'>
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RecipePage