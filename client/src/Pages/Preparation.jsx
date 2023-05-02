import React, { useState } from 'react'
import prep_steps from './../Data/Preparation.json'
import { useLocation } from 'react-router-dom'

function Preparation() {
  const location = useLocation()

  const {preparation} = location.state
  return (
    <div className='flex flex-col gap-2 overflow-y-hidden'>
        <h2 className='text-slate-500 font-bold text-lg'>Preparation</h2>
        <div className='flex flex-col gap-4 items-start'>
            {preparation && preparation.map((step,index) => {
                return (<div className='prep_steps flex gap-2 bg-white p-2 rounded-lg items-center'>
                <span className='bg-slate-400 text-white text-base w-6 h-6 rounded-full self-center hei text-center'>{index+1}</span>
                <span className=''>{step.action}</span>
            </div>)
            })}
    </div>
    </div>
  )
}

export default Preparation