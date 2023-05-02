import React from 'react'
import cooking_steps from './../Data/Procedure.json'
import { useLocation } from 'react-router-dom'

function Cooking() {
  const location = useLocation()

  const {cooking} = location.state
  return (
    <div className='flex flex-col gap-2 h-full '>
        <h2 className='text-slate-500 font-bold text-lg'>Preparation</h2>
        <div className='h-[95%] flex flex-col gap-4 items-start overflow-y-scroll'>
            {cooking && cooking.map((step,index) => {
                return (<div className='prep_steps flex gap-2 bg-white p-2 rounded-lg items-center'>
                <span className='bg-slate-400 text-white text-base w-6 h-6 rounded-full self-center hei text-center'>{index+1}</span>
                <span className=''>{step.action}</span>
            </div>)
            })}
            
            
    </div>
    </div>
  )
}

export default Cooking