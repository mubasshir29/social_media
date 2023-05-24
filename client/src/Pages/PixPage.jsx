import React from 'react'
import pixData from './../Data/pixData.json'

import PixCard from '../Components/PixCard';


function PixPage() {
  return (
    <div className='p-3 w-[82%] mx-auto'>
        <h2 className='text-4xl font-bold'>Pix</h2>
        <div className='flex flex-col gap-4 py-3'>
                {pixData.map((item,index)=> <PixCard item={item} /> )}
        </div>
    </div>
  )
}

export default PixPage