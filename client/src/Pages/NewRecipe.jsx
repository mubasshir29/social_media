import React,{useRef, useState} from 'react'
import add_image from './../Images/Add_image.png'
import { AiOutlineClose } from "react-icons/ai";
import moment from 'moment'
import {ref, getDownloadURL, uploadBytesResumable} from 'firebase/storage'
import {storage } from './../firebase'
import {postRecipe} from './../Utils/api.js'
import {useNavigate} from 'react-router-dom'

function NewRecipe() {
  const navigate = useNavigate()
  const date = new Date()
  const defaultRecipe =  {
    title : "",
    description : "",
    category : "",
    difficulty : "",
    prepareTime : "",
    cookTime : "",
    ingredients : [],
    preparation: [],
    cooking : [],
    serves : 0,
    image_gallery : [],
    createdAt : moment(new Date()).format('MMM Do, YYYY'),
    author : "Mubasshir",
}
const [recipe,setRecipe] = useState(defaultRecipe)

  const inputFileRef = useRef(null) //for image files

  //to store user multiple value inputs before sending to database
  const [ingredientItems, setIngredientItems] = useState([])
  const [preparationSteps, setPreparationSteps] = useState([])
  const [cookingSteps, setCookingSteps] = useState([])
  const [imageFiles, setImageFiles] = useState([])

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
    setIngredient( (prev) => ({...prev, [e.target.name]:e.target.value}))
  }
  const onPrepChange = (e) => {
    setPrepStep(e.target.value)
  }
  const onCookChange = (e) => {
    setCookStep(e.target.value)
  }
  const onImageFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files)

    for(let i=0; i<selectedFiles.length; i++){
      setImageFiles((prev)=> [...prev, selectedFiles[i]])
    }
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
    console.log(prepStep)
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
    setImageFiles( imageFiles.filter((item,index) => index!==indexValue))
  }

  //upload image
  const uploadImageToFirebase = (file) => {
    //
    if (!file) return;
    const fileImageName = file.name + Date.now()
    const sotrageRef = ref(storage, `files/${fileImageName}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // const prog = Math.round(
        //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        // );
        // setProgress(prog);
        //console.log(snapshot)
      },
      (error) => console.log(error),
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        recipe.image_gallery.push({image_url:url})
      }
    );
  };

  const uploadImages = () =>{
    imageFiles.forEach(file => {
      uploadImageToFirebase(file)
    })
    return true
  }

  const uploadRecipe = async (e) => {
    e.preventDefault()

    //upload images to firebase and get download URL
    //console.log(imageFiles)
   

    const response = await uploadImages()

    //set all the fields and send for upload
    if(response === true){
      setRecipe( (prev) => ({...prev,  
        ingredients: ingredientItems.slice(0), 
        //preparation: preparationSteps.slice(0), 
        // cooking: cookingSteps.slice(0)
      }))
      //console.log(recipe)
      postRecipe(recipe)
      navigate(-1)
    }
    
  }

  return (
    <div className='mt-[8vh] sm:mt-[8vh] min-h-[92vh] w-screen sm:w-screen bg-slate-50 py-6'>
        
          <form className='w-full sm:w-[70rem] max-w-screen-xl mx-auto bg-slate-300/30 flex flex-col gap-6 px-10 py-12 rounded-xl'>
            <h3 className='font-bold text-2xl text-slate-500'>Add Recipe</h3>
            {/* Title */}
            <input type='text' name='title' placeholder='Title' onChange={e => onValueChange(e)} className='p-2 rounded-lg '></input>
            
            {/*Description*/}
            <textarea name='description' onChange={e => onValueChange(e)} id="message" rows="4" className="block resize-none p-2 w-full rounded-lg focus:ring-blue-500 focus:border-blue-500 " placeholder="Description"></textarea>
            
            {/* Category */}
            <div className='flex w-full gap-3'>
              <select name='category' onChange={e => onValueChange(e)} className='flex-1 p-2 rounded-lg bg-white' defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>Category</option>
                <option value='non-veg'>Non-Veg</option>
                <option value='veg'>Veg</option>
                <option value='breakfast'>Breakfast</option>
                <option value='snacks'>Snacks</option>
              </select>

              {/* Difficulty */}
              <select name='difficulty' onChange={e => onValueChange(e)} className='flex-1 p-2 rounded-lg bg-white' defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled >Difficulty</option>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
              </select>

              {/* Serves */}
              <input type='text' placeholder='Serves' onChange={e => recipe.serves = e.target.value} className='p-2 rounded-lg bg-white' />
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
              <div className='added_images flex gap-3'>
                <div onClick={e => AddImage(e)} className='relative bg-gray-300 w-28 h-28 flex items-center justify-center hover:cursor-pointer' >
                  <p className='absolute top-4 left-9 text-6xl text-gray-500'>+</p>
                </div>
                {imageFiles.length>0 && imageFiles.map((imageFile,index)=> {
                  return (
                    <div className='w-28 h-28 group relative'>
                        <img key={index} src={URL.createObjectURL(imageFile)} alt={imageFile.name} className='w-full h-full object-cover border-2 border-slate-500 rounded-lg' />
                        <span onClick={()=>deleteImage(index)} className='hidden group-hover:block absolute top-0 left-0 p-7 w-full h-full rounded-lg bg-slate-500/80 text-6xl text-center text-white'><AiOutlineClose/></span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Save button */}
            <button className='bg-blue-500 self-center py-3 px-6 rounded-lg text-white' onClick={e => uploadRecipe(e)}>Save</button>
          </form>
    </div>
  )
}

export default NewRecipe