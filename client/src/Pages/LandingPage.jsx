import React from 'react'
import image1 from './../Images/Home_image_3.jpg'
import CorossolMenu from '../Components/CorossolMenu'

function LandingPage() {
  return (
    <div className='h-screen'>
              <div className='mt-[4rem]  w-screen sm:h-[92vh] sm:mt-[4rem] sm:min-h-[92vh] sm:flex sm:flex-col'>
                <div className='w-full h-[92vh] sm:flex-2 title_box sm:h-full sm:min-h-[22rem] max-h-[57rem] relative flex flex-col justify-center bg-gradient-to-r from-gray-800/70 via -white  via-gray-500 to-gray-900/70'>
                    <img className='absolute w-full h-full mix-blend-overlay object-cover ' src={image1} />
                    <div className='w-full sm:w-full sm:max-w-screen-xl text-center sm:mx-auto  sm:text-center'>
                      <h1 className="text2xl sm:text-7xl text-yellow-500 font-bold sm:mr-12">Delicious recipes </h1> <br/> 
                      <h1 className="text2xl sm:text-7xl text-yellow-500 font-bold sm:mr-12"> Daily Updated</h1>
                    </div>
                </div>
                <div className='sm:flex-1 p-6'>
                  <CorossolMenu/>
                </div>
              </div>
    </div>
  )
}

export default LandingPage