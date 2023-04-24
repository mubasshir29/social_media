import React from 'react'
import { NavLink } from 'react-router-dom'

function CategoryBox({category}) {
  return (
    <NavLink to={category.path}>
    <div className='relative w-[260px] h-[260px] bg-slate-200 object-cover rounded-xl hover:scale-[105%] transition duration-200 ease-in-out'>
      <img src={category.image} className='rounded-xl' />
      <span className='w-full text-center bg-slate-300/80 p-3 rounded-b-xl absolute bottom-0 text-xl'><p >{category.name}</p></span>
    </div>
    </NavLink>
  )
}

export default CategoryBox