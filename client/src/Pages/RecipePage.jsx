import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import biryani from './../Images/Hyderabadi-Biryani.jpg'
import ingred_icon from './../Images/ingredient.png'
import prep_icon from './../Images/cutting-board.png'
import cook_icon from './../Images/cooking.png'

function RecipePage({recipe}) {
  return (
    <div className='mt-[8vh] sm:mt-[8vh] w-[70rem] h-[92vh] sm:w-[70rem] mx-auto p-4'>
      <div className='recipe_page flex gap-4 h-full'>

        <div className='image_description left_side w-[30%] flex flex-col gap-6  bg-slate-100 rounded-xl'>
          <div className='w-full h-[14rem] relative rounded-t-xl bg-gradient-to-b from-gray-800/70 via -white  via-gray-700/70 to-gray-900'>
            <img className='w-full h-[14rem] object-cover rounded-t-xl mix-blend-overlay ' src={biryani}/> 
            <div className='absolute bottom-2 left-2 z-10 flex w-[95%] justify-between items-center'>
              <h1 className=' text-white  text-lg font-bold'>Hyderabadi Biryani (Mutton)</h1>
            </div>
            </div>
            <div className='recipe_description text-sm p-4'>
              <p>Hyderabadi biryani is said to be more spicy and savory. It's made in the form of Dum and has a lot of Zaffron. Combining basmati rice and chicken makes Hyderabadi biryani distinguishable from others. The presentation and the pungent spices are the hallmarks of Hyderabadi Biryani.</p>
            </div>
            <div className='recipe_details flex flex-wrap gap-2 text-xs px-4'>
              <div className='prep_time bg-white py-1 px-1 rounded-xl flex gap-1'>
                <span className=''>Prep time</span>
                <span className='bg-slate-300 px-2 rounded-xl'>30 mins</span>
              </div>
              <div className='cook_time bg-white py-1 px-1 rounded-xl flex gap-1'>
                <span className=''>Prep time</span>
                <span className='bg-slate-300 px-2 rounded-xl'>30 mins</span>
              </div>
              <div className='serve_details bg-white py-1 px-1 rounded-xl flex gap-1'>
                <span className=''>Serves</span>
                <span className='bg-slate-300 px-2 rounded-xl'>4</span>
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
                  <NavLink to='ingredients'><div className='w-16 h-16 rounded-full bg-slate-200 hover:bg-slate-300 hover:cursor-pointer p-4'><img className='w-16' src={ingred_icon} /> </div></NavLink>
                </div>
              </li>
              <li>
                <div className='flex flex-col items-center gap-2'>
                  <span className='text-sm'>Preparation</span>
                  <NavLink to='preparation'><div className='w-16 h-16 rounded-full bg-slate-200 hover:bg-slate-300 hover:cursor-pointer p-4'><img className='w-16' src={prep_icon} /> </div></NavLink>
                </div>
              </li>
              <li >
                <div className='flex flex-col items-center gap-2'>
                  <span className='text-sm'>Cooking</span>
                  <NavLink to='cooking'><div className='w-16 h-16 rounded-full bg-slate-200 hover:bg-slate-300 hover:cursor-pointer p-4'><img className='w-16' src={cook_icon} /> </div></NavLink>
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

export default RecipePage