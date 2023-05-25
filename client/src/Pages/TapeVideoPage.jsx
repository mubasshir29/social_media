import React from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom'

function TapeVideoPage() {
    const location = useLocation()
  return (
    <div className='w-[92%]'>
        <ReactPlayer width='380px' height='640px' url={location.state} />
    </div>
  )
}

export default TapeVideoPage