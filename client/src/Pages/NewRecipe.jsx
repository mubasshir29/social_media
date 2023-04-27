import React,{useRef, useState} from 'react'
import add_image from './../Images/Add_image.png'
import { AiOutlineClose } from "react-icons/ai";



function NewRecipe() {
  const [imageFiles, setImageFiles] = useState([])
  const inputFileRef = useRef(null)
  let testArray = []

  const handleUploadButton = (e) => {
    e.preventDefault()
    inputFileRef.current.click()
  }

  const handleImageFileChange = (e) => {
    //console.log("ImageFiles:", e.target.files)

    const selectedFiles = Array.from(e.target.files)
    //console.log("Selected Files", selectedFiles)

    for(let i=0; i<selectedFiles.length; i++){
      // setImageFiles([...imageFiles, selectedFiles[i]])
      // console.log("Files:", imageFiles)
      // console.log("Item in loop",selectedFiles[i])
      const item = selectedFiles[i]
      console.log(item)
      //testArray.push(selectedFiles[i])
      setImageFiles((prev)=> [...prev, item])
    }

    if(imageFiles){imageFiles.forEach( file => console.log(file))}
    
  }

  const deleteItem = (indexValue) =>{
    setImageFiles( imageFiles.filter((item,index) => index!==indexValue))
  }

  return (
    <div className='mt-[8vh] sm:mt-[8vh] w-screen sm:w-screen bg-slate-50 py-6'>
        
          <form className='w-full sm:w-[70rem] max-w-screen-xl mx-auto bg-slate-300/30 flex flex-col gap-6 px-10 py-12 rounded-xl'>
            <h3 className='font-bold text-2xl text-slate-500'>Add Recipe</h3>
            <input type='text' placeholder='Title' className='p-2 rounded-lg '></input>
            <div className='flex w-full gap-3'>
              <select className='flex-1 p-2 rounded-lg bg-white'>
                <option value="" disabled selected>Category</option>
                <option value='non-veg'>Non-Veg</option>
                <option value='veg'>Veg</option>
                <option value='snacks'>Snacks</option>
              </select>
              <select className='flex-1 p-2 rounded-lg bg-white'>
                <option value="" disabled selected>Difficulty</option>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
              </select>
            </div>
            <div className='flex w-full gap-3'>
              <input className='flex-1 p-2 rounded-lg' type='text' placeholder='Preparation Time (Minutes)' />
              <input className='flex-1 p-2 rounded-lg' type='text' placeholder='Cook Time (Minutes)' />
            </div>
            <div className=' flex flex-col gap-2'>
              <h3 className='font-bold text-slate-500'>Ingredients</h3>
              <div className='flex gap-3'>
                <input className='flex-1 p-2 rounded-lg' type='text' placeholder='Name'/>
                <input className='flex-1 p-2 rounded-lg' type='text' placeholder='Quantity'/>
                <button className='px-4 py-1 bg-blue-500 rounded-lg text-white'>Add</button>
              </div>
              <div className='flex flex-wrap px-3 mt-1'>
                <div className='added_item flex gap-2 text-sm bg-white p-2 rounded-lg items-center'>
                  <span className=''>Basmati Rice</span>
                  <span className='bg-slate-400 text-white px-2 py-0.5 rounded-lg'>1Kg</span>
                </div>
              </div>
            </div>
            <div className=' flex flex-col gap-2'>
              <h3 className='font-bold text-slate-500'>Preparation</h3>
              <div className='flex gap-3'>
                <input className='flex-1 p-2 rounded-lg' type='text' placeholder='Write here'/>
                <button className='px-4 py-1 bg-blue-500 rounded-lg text-white'>Add</button>
              </div>
              <div className='flex flex-wrap gap-2 px-3 mt-1'>
                <div className='added_item flex gap-2 text-sm bg-white p-2 rounded-lg items-center'>
                  <span className='bg-slate-400 text-white px-2 py-0.5 rounded-full'>1</span>
                  <span className=''>Take a pan, and put 300 ml oil in it, and keep it on medium flame.</span>
                </div>
                <div className='added_item flex gap-2 text-sm bg-white p-2 rounded-lg items-center'>
                  <span className='bg-slate-400 text-white px-2 py-0.5 rounded-full'>2</span>
                  <span className=''>Take a pan, and put 300 ml oil in it, and keep it on medium flame.</span>
                </div>
                <div className='added_item flex gap-2 text-sm bg-white p-2 rounded-lg items-center'>
                  <span className='bg-slate-400 text-white px-2 py-0.5 rounded-full'>3</span>
                  <span className=''>Take a pan, and put 300 ml oil in it, and keep it on medium flame.</span>
                </div>
              </div>
            </div>
            <div className=' flex flex-col gap-2'>
              <h3 className='font-bold text-slate-500'>Cooking</h3>
              <div className='flex gap-3'>
                <input className='flex-1 p-2 rounded-lg' type='text' placeholder='Write here'/>
                <button className='px-4 py-1 bg-blue-500 rounded-lg text-white'>Add</button>
              </div>
              <div className='flex flex-wrap gap-2 px-3 mt-1'>
                <div className='added_item flex gap-2 text-sm bg-white p-2 rounded-lg items-center'>
                  <span className='bg-slate-400 text-white px-2 py-0.5 rounded-full'>1</span>
                  <span className=''>Take a pan, and put 300 ml oil in it, and keep it on medium flame.</span>
                </div>
                <div className='added_item flex gap-2 text-sm bg-white p-2 rounded-lg items-center'>
                  <span className='bg-slate-400 text-white px-2 py-0.5 rounded-full'>2</span>
                  <span className=''>Take a pan, and put 300 ml oil in it, and keep it on medium flame.</span>
                </div>
                <div className='added_item flex gap-2 text-sm bg-white p-2 rounded-lg items-center'>
                  <span className='bg-slate-400 text-white px-2 py-0.5 rounded-full'>3</span>
                  <span className=''>Take a pan, and put 300 ml oil in it, and keep it on medium flame.</span>
                </div>
              </div>
            </div>
            <input type='file' name='images' ref={inputFileRef} multiple className='hidden' onChange={e => handleImageFileChange(e)} />
            <div className=' flex flex-col gap-2'>
              <h3 className='font-bold text-slate-500'>Gallery</h3>
              <div className='added_images flex gap-3'>
                <div onClick={e => handleUploadButton(e)} className='relative bg-gray-300 w-28 h-28 flex items-center justify-center hover:cursor-pointer' >
                  <p className='absolute top-4 left-9 text-6xl text-gray-500'>+</p>
                </div>
                {imageFiles.length>0 && imageFiles.map((imageFile,index)=> {
                  return (
                    <div className='w-28 h-28 group relative'>
                        <img key={index} src={URL.createObjectURL(imageFile)} alt={imageFile.name} className='w-full h-full object-cover border-2 border-slate-500 rounded-lg' />
                        <span onClick={()=>deleteItem(index)} className='hidden group-hover:block absolute top-0 left-0 p-7 w-full h-full rounded-lg bg-slate-500/80 text-6xl text-center text-white'><AiOutlineClose/></span>
                    </div>
                  )
                })}
              </div>
            </div>
            <button className='bg-blue-500 self-center py-3 px-6 rounded-lg text-white'>Save</button>
          </form>
    </div>
  )
}

export default NewRecipe