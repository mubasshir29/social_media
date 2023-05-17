import React,{useEffect, useRef, useState} from 'react'
import add_image from './../Images/Add_image.png'
import { AiOutlineClose } from "react-icons/ai";
import moment from 'moment'
import {ref, getDownloadURL, uploadBytesResumable} from 'firebase/storage'
import {storage } from '../firebase'
import {postRecipe, getRecipe} from '../Utils/api.js'
import {useNavigate} from 'react-router-dom'
import { ThreeCircles } from 'react-loader-spinner'
import { RiImageAddFill } from "react-icons/ri";

import { useSelector, useDispatch } from 'react-redux';



function EditRecipe(postID) {

  const {user_id,username} = useSelector((state) => state.AuthReducer)
  console.log(user_id, username)
  
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const date = new Date()

  const [recipe,setRecipe] = useState()
  const [selectedFiles, setSelectedFiles] = useState([])
  const inputFileRef = useRef(null) //for image files

  //to store user multiple value inputs before sending to database
  const [ingredientItems, setIngredientItems] = useState([])
  const [preparationSteps, setPreparationSteps] = useState([])
  const [cookingSteps, setCookingSteps] = useState([])
  const [imageFiles, setImageFiles] = useState([])
  const [imageUrls, setImageUrls] = useState([])
  // let imageUrls = []

  ////to store individual value of multi-value inputs
  const [prepStep,setPrepStep] = useState('')
  const [cookStep,setCookStep] = useState('')
  const [ingredient, setIngredient] = useState({
    name: "",
    quantity: ""
  })

  //When value is being set
  const onValueChange = (e) => {
    setRecipe( (prev) => ({...prev, [e.target.name] : e.target.value}))
  }
  const ingredientChange = (e) => {
    switch(e.target.name){
      case 'name':  setIngredient( (prev) => ({...prev, name :e.target.value})); break;
      case 'quantity': setIngredient( (prev) => ({...prev, quantity :e.target.value})); break; break
    }
  }
  const onPrepChange = (e) => {
    setPrepStep(e.target.value)
  }
  const onCookChange = (e) => {
    setCookStep(e.target.value)
  }
  const onImageFileChange = (e) => {
    const imageList = Array.from(e.target.files)
    console.log(imageList)
    setSelectedFiles(imageList)
  }

  //Adding ingredient to current ingredient list
  const addIngredient = (e) =>{
    e.preventDefault()
    setIngredientItems( (prev) => [...prev, ingredient])
    recipe.ingredients.push(ingredient)
    setIngredient({
      name: "",
      quantity: ""
    })
  }
  //Adding step to current Preparation steps list
  const addPreparation = (e) => {
    e.preventDefault()
    //console.log(prepStep)
    //setPreparationSteps([...preparationSteps, {action: prepStep}])
    recipe.preparation.push({action: prepStep})
    setPrepStep("")
    console.log(recipe)
  }

  //Adding step to current Cooking steps list
  const addCooking = (e) => {
    e.preventDefault()
    // setCookingSteps( (prev) => [...prev, {action: cookStep}])
    recipe.cooking.push({action: cookStep})
    
    setCookStep("")
    console.log(recipe)
  }
  
  const AddImage = (e) => {
    e.preventDefault()
    inputFileRef.current.click()
  }

  const deleteImage = (indexValue) =>{
    setSelectedFiles( selectedFiles.filter((item,index) => index!==indexValue))
  }


  const uploadToFirebase = () => {
    setLoading(true)
    
    const promises = selectedFiles.map(file => {
      return new Promise( (resolve) => {
      const fileImageName = file.name + Date.now()
      const storageRef = ref(storage, `files/${fileImageName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // const prog = Math.round(
          //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          // );
          // setProgress(prog);
          console.log(snapshot, Date.now())
        },
        (error) => console.log(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(url => {
            resolve(url)
            //console.log(url)
            //setImageUrls((prev) => [...prev, url])
          });
        }
       );
      })
    })

    Promise.all(promises)
    .then(values => {
      // console.log(values)
      // return values
      console.log(values, Date.now())
      //setImageUrls((prev) => [...prev, values])
      //let imageObjects= values.map(value => {image_url: value})
      //setRecipe({...recipe, image_gallery:[...imageObjects]})
      values.forEach(value => recipe.image_gallery.push({image_url: value}) )
      setLoading(false)
    })
  }

    const uploadImages = e =>{
      e.preventDefault()
      uploadToFirebase()
    }

  //On clicking save button
  const uploadRecipe = async (e) => {
    e.preventDefault()
    postRecipe(recipe)
    navigate('/')
  }

  const getPostData = async ()=>{
    const data = await getRecipe(postID)
    setRecipe(data)
  }

  useEffect(()=>{

  },[])
  if(recipe){
    return (
      <div className='w-screen h-screen bg-slate-100'>
        <div className='mt-[4rem] sm:mt-[4rem] min-h-[92vh] w-screen sm:w-screen sm:h-[calc(100% - 4rem)] py-6'>
             {loading &&<div className='w-full h-full absolute z-10 top-0 left-0 bg-slate-700/70 flex justify-center items-center'>
             <ThreeCircles
                           height="100"
                           width="100"
                           color="#ffffff"
                           wrapperStyle={{}}
                           wrapperClass=""
                           visible={true}
                           ariaLabel="three-circles-rotating"
                           outerCircleColor=""
                           innerCircleColor=""
                           middleCircleColor=""
                         />
             </div>}
             <form className='w-full sm:w-[70rem] max-w-screen-xl mx-auto bg-slate-300/30 flex flex-col gap-6 px-10 py-12 rounded-xl'>
               <h3 className='font-bold text-2xl text-slate-500'>Edit Recipe</h3>
               {/* Title */}
               <input type='text' name='title' placeholder='Title' defaultValue={recipe.title} onChange={e => onValueChange(e)} className='p-2 rounded-lg '></input>
               
               {/*Description*/}
               <textarea name='description' defaultValue={recipe.description} onChange={e => onValueChange(e)} id="message" rows="4" className="block resize-none p-2 w-full rounded-lg focus:ring-blue-500 focus:border-blue-500 " placeholder="Description"></textarea>
               
               {/* Category */}
               <div className='flex w-full gap-3'>
                 <select name='category' onChange={e => onValueChange(e)} className='flex-1 p-2 rounded-lg bg-white' defaultValue={recipe.category}>
                   <option value="DEFAULT" disabled>Category</option>
                   <option value='non-veg'>Non-Veg</option>
                   <option value='veg'>Veg</option>
                   <option value='breakfast'>Breakfast</option>
                   <option value='snacks'>Snacks</option>
                 </select>
   
                 {/* Difficulty */}
                 <select name='difficulty' onChange={e => onValueChange(e)} className='flex-1 p-2 rounded-lg bg-white' defaultValue={recipe.difficulty}>
                   <option value="DEFAULT" disabled >Difficulty</option>
                   <option value='Easy'>Easy</option>
                   <option value='Medium'>Medium</option>
                   <option value='Hard'>Hard</option>
                 </select>
   
                 {/* Serves */}
                 <input type='text' name='serves' placeholder='Serves' defaultValue={recipe.serves} onChange={e => onValueChange(e)} className='p-2 rounded-lg bg-white' />
               </div>
   
               {/* Preparation and Cooking Time */}
               <div className='flex w-full gap-3'>
                 <input className='flex-1 p-2 rounded-lg' type='text' name='prepareTime' onChange={e => onValueChange(e)} placeholder='Preparation Time (Minutes)' />
                 <input className='flex-1 p-2 rounded-lg' type='text' name='cookTime' onChange={e => onValueChange(e)} placeholder='Cook Time (Minutes)' />
               </div>
   
               {/* Ingredients */}
               <div className=' flex flex-col gap-2'>
                 <h3 className='font-bold text-slate-500'>Ingredients</h3>
                 <div className='flex gap-3'>
                   <input name='name' onChange={e => ingredientChange(e)} className='flex-1 p-2 rounded-lg' type='text' placeholder='Name' value={ingredient.name}/>
                   <input name='quantity' onChange={e => ingredientChange(e)} className='flex-1 p-2 rounded-lg' type='text' placeholder='Quantity' value={ingredient.quantity}/>
                   <button className='px-4 py-1 bg-blue-500 rounded-lg text-white' onClick={e => addIngredient(e)}>Add</button>
                 </div>
                 <div className='flex gap-2 flex-wrap px-3 mt-1'>
                   {ingredientItems && ingredientItems.map((item,index) => {
                     return (
                       <div key={index} className='added_item flex gap-2 text-sm bg-white p-2 rounded-lg items-center'>
                         <span className='bg-slate-400 text-white px-2 py-0.5 rounded-full'>{index+1}</span>
                         <span className=''>{item.name}</span>
                         <span className='bg-slate-500 text-white px-2 py-0.5 rounded-lg'>{item.quantity}</span>
                       </div>
                     )
                   })}
                   
                 </div>
               </div>
   
               {/* Praparation */}
               <div className=' flex flex-col gap-2'>
                 <h3 className='font-bold text-slate-500'>Preparation</h3>
                 <div className='flex gap-3'>
                   <input name='preparation' value={prepStep} className='flex-1 p-2 rounded-lg' type='text' placeholder='Write here' onChange={e => onPrepChange(e)}/>
                   <button className='px-4 py-1 bg-blue-500 rounded-lg text-white' onClick={e => addPreparation(e)}>Add</button>
                 </div>
                 <div className='flex flex-wrap gap-2 px-3 mt-1'>
                   {recipe.preparation && recipe.preparation.map((step,index) => {
                     return (
                     <div key={index} className='added_item flex gap-2 text-sm bg-white p-2 rounded-lg items-center'>
                       <span className='bg-slate-400 text-white px-2 py-0.5 rounded-full'>{index+1}</span>
                       <span className=''>{step.action}.</span>
                     </div>)
                   })}
                  
                 </div>
               </div>
   
               {/* Cooking */}
               <div className=' flex flex-col gap-2'>
                 <h3 className='font-bold text-slate-500'>Cooking</h3>
                 <div className='flex gap-3'>
                   <input name='cooking' value={cookStep} className='flex-1 p-2 rounded-lg' type='text' placeholder='Write here' onChange={e => onCookChange(e)}/>
                   <button className='px-4 py-1 bg-blue-500 rounded-lg text-white' onClick={e => addCooking(e)}>Add</button>
                 </div>
                 <div className='flex flex-wrap gap-2 px-3 mt-1'>
                   {recipe.cooking && recipe.cooking.map((step,index) => {
                     return (
                       <div key={index} className='added_item flex gap-2 text-sm bg-white p-2 rounded-lg items-center'>
                         <span className='bg-slate-400 text-white px-2 py-0.5 rounded-full'>{index+1}</span>
                         <span className=''>{step.action}.</span>
                     </div>)
                   })}
                 </div>
               </div>
   
               {/* Images */}
               <input type='file' name='images' ref={inputFileRef} multiple className='hidden' onChange={e => onImageFileChange(e)} />
               <div className=' flex flex-col gap-2'>
                 <h3 className='font-bold text-slate-500'>Gallery</h3>
                 <div className='added_images flex justify-between gap-2 '>
                     <div className='added_images flex'>
                       <div onClick={e => AddImage(e)} className='relative bg-white w-28 h-28 flex items-center justify-center rounded-lg hover:cursor-pointer' >
                         <span className='text-6xl text-slate-500/50'><RiImageAddFill/></span>
                       </div>
                     </div>
                   <div className='flex-1 flex gap-2 flex-wrap overflow-y-auto'>
                     {selectedFiles && selectedFiles.map((imageFile,index)=> {
                     return (
                       <div className='w-28 h-28 group relative'  key={index}>
                           <img src={URL.createObjectURL(imageFile)} alt={imageFile.name} className='w-full h-full object-cover border-2 border-slate-500 rounded-lg' />
                           <span onClick={()=>deleteImage(index)} className='hidden group-hover:block absolute top-0 left-0 p-7 w-full h-full rounded-lg bg-slate-500/80 text-6xl text-center text-white'><AiOutlineClose/></span>
                       </div>
                     )
                     })}
                   </div>
                   
                   <button className='px-4 py-2 bg-blue-500 rounded-lg text-white self-center' onClick={e => uploadImages(e)}>Upload</button>
                 </div>
                 
               </div>
   
               {/* Save button */}
               <button className='bg-blue-500 self-center py-3 px-6 rounded-lg text-white' onClick={e => uploadRecipe(e)}>Save</button>
             </form>
       </div>
      </div>
     )
  }
  
}

export default EditRecipe