import React,{useRef,useState} from 'react'
import { RiUploadCloud2Fill } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";
import { RiImageAddFill } from "react-icons/ri";




function NewVideo() {
  const [inputFile,setInputFile] = useState(null)
  const inputFileRef = useRef(null)

  const handleFileButton = (e) => {
    e.preventDefault()
    inputFileRef.current.click()
  }
  const handleInputFile = (e) =>{
    setInputFile(e.target.files[0])
  }

  const handleFileCancel = (e) =>{
    e.preventDefault()
    setInputFile(null)
  }
  return (
    <div className='w-screen h-screen bg-slate-100'>
    <div className='mt-[4rem] sm:mt-[4rem] w-screen sm:h-[calc(100% - 4rem)] sm:w-screen py-6'>
        
          <form className='w-full sm:w-[70rem] max-w-screen-xl mx-auto bg-slate-300/30 flex flex-col gap-6 px-10 py-12 rounded-xl'>
            <h3 className='font-bold text-2xl text-slate-500'>Upload Video</h3>
            <input type='text' placeholder='Title' className='p-2 rounded-lg '></input>
            <div className='w-full bg-white  flex flex-col gap-2 items-center justify-center h-[12rem] rounded-lg text-slate-500/70'>
            <span className='text-6xl'><RiUploadCloud2Fill/></span>
            <h3>Upload Video</h3>
            <input type='file' ref={inputFileRef} accept="video/mp4,video/x-m4v,video/*" className='hidden' onChange={e => handleInputFile(e)} />
            <button onClick={e => handleFileButton(e)} className="bg-slate-500/90 self-center py-2 px-10 rounded-lg text-white">Select File</button>
            </div>
            {inputFile && <div className='w-full flex justify-between border-2 border-slate-500/50 p-2 rounded-lg'><span>File: {inputFile.name}</span><button className='text-2xl text-slate-400' onClick={e => handleFileCancel(e)}><IoIosCloseCircle/></button></div>}
            <div className=' flex flex-col gap-2'>
              <h3 className='font-bold text-slate-500'>Tags</h3>
              <div className='flex gap-3'>
                <input className='flex-1 p-2 rounded-lg' type='text' placeholder='Write here'/>
                <button className='px-4 py-1 bg-blue-500 rounded-lg text-white'>Add</button>
              </div>
              <div className='flex flex-wrap gap-2 px-3 mt-1'>
                <div className='added_item flex gap-2 text-sm bg-white p-2 rounded-lg items-center'>
                  <span className=''>Biryani</span>
                </div>
                <div className='added_item flex gap-2 text-sm bg-white p-2 rounded-lg items-center'>
                  <span className=''>Hyderabadi biryani</span>
                </div>
                <div className='added_item flex gap-2 text-sm bg-white p-2 rounded-lg items-center'>
                  <span className=''>Mutton</span>
                </div>
              </div>
            </div>
            <div className=' flex flex-col gap-2'>
              <h3 className='font-bold text-slate-500'>Thumbnail</h3>
              <div className='added_images flex'>
                <div className='relative bg-white w-28 h-28 flex items-center justify-center rounded-lg' >
                  <span className='text-6xl text-slate-500/50'><RiImageAddFill/></span>
                </div>
              </div>
            </div>
            <div className='self-end flex gap-2'>
            <button className='bg-white text-slate-500  py-2 px-4 rounded-lg '>Cancel</button>
            <button className='bg-blue-500  py-2 px-4 rounded-lg text-white'>Publish</button>
            </div>
          </form>
        
    </div>
    </div>
  )
}

export default 
NewVideo