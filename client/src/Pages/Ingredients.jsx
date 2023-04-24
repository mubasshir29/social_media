import React from 'react'
import items from './../Data/Ingredients.json'

function Ingredients() {
  return (
    <div className='flex flex-col gap-2'>
        <h2 className='text-slate-500 font-bold text-lg'>Ingredients</h2>
        <div className='flex flex-wrap gap-2'>
            {items.map(item => {
                return (<div className='added_item flex gap-2 text-sm bg-white p-2 rounded-full items-center'>
                <span className=''>{item.name}</span>
                <span className='bg-slate-400 text-white text-xs px-2 py-0.5 rounded-full'>{item.quantity}</span>
            </div>)
            })}
            
            
    </div>
    </div>
  )
}

export default Ingredients