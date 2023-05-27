import React from 'react'
import { NavLink } from 'react-router-dom'

function TapeCard({item}) {
  return (
    <div className='w-36 rounded-lg flex-shrink-0'>
        <NavLink to={`/tapes/${item._id}`} state={item.tape_url}><img className='w-36 rounded-lg'  src={item.tape_thumbnail} /></NavLink>
    </div>
  )
}

export default TapeCard