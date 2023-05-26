import React from 'react'
import {BsPlusSquare } from "react-icons/bs";
import tapeData from './../Data/tapeData.json'
import { NavLink } from 'react-router-dom'

function TapesPage() {
  return (
    <div className='w-[92%] mx-auto flex flex-col gap-6'>

      <div className='flex justify-between items-center pr-3'>
        <h2 className='text-3xl font-bold'>Tapes</h2>
        <span className='text-xl'><BsPlusSquare/></span>
      </div>
      
      <div className='flex flex-col gap-4'>
        <div id="trending" className='flex flex-col gap-2'>
          <h3 className='font-bold'>Trending</h3>
          <div className='w-full flex border-t-2 py-3 gap-2 overflow-x-auto scrollbar-hide'>
            {tapeData.map((item,index) =><NavLink to={`/tapes/${item._id}`} state={item.tape_url}><img className='w-36 rounded-lg' src={item.tape_thumbnail} /></NavLink>)}
          </div>
        </div>

        <div id="recommended" className='flex flex-col gap-2'>
          <h3 className='font-bold'>Recommended</h3>
          <div className='w-full flex border-t-2 py-3 gap-2 overflow-x-auto scrollbar-hide'>
            {tapeData.map((item,index) => <img className='w-36 rounded-lg' src={item.tape_thumbnail} />)}
          </div>
        </div>
        <div id="all" className='flex flex-col gap-3'>
          <div className='w-full flex border-t-4 py-3 gap-2 overflow-x-auto scrollbar-hide'>
            {tapeData.map((item,index) => <img className='w-36 rounded-lg' src={item.tape_thumbnail} />)}
          </div>
        </div>
      </div>
     
    </div>
    
  )
}

export default TapesPage