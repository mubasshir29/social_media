import React from 'react'
import pixData from './../Data/pixData.json'
import {BsPlusSquare } from "react-icons/bs";
import PixCard from '../Components/PixCard';


function PixPage() {
  return (
    <div className='p-3 w-[82%] mx-auto'>
        <div className='flex justify-between items-center pr-3'>
            <h2 className='text-4xl font-bold'>Pix</h2>
            <span className='text-xl'><BsPlusSquare/></span>
          </div>
        <div className='flex flex-col gap-4 py-3'>
                {pixData.map((item,index)=> <PixCard item={item} /> )}
        </div>
    </div>
  )
}

export default PixPage