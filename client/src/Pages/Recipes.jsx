import React, { useEffect, useState } from 'react'
import recipes from '../Data/recipes.json'
import RecipeCard from '../Components/RecipeCard'
import {getAllRecipes} from '../Utils/api.js'
import { useParams } from 'react-router-dom'

function Recipes() {
  const {category} = useParams()
  const [recipes, setRecipes] = useState()

  const getRecipes = async () => {
    const recipesData = await getAllRecipes(category)
    setRecipes(recipesData)
    //console.log("Received data", recipesData)
  }

  useEffect(()=>{
    getRecipes()
  },[])

  return (
    <div className='mt-[8vh] sm:mt-[4rem] min-h-[92vh] w-screen sm:w-screen bg-slate-50 py-1 '>
      <div className='w-full sm:w-[70rem] max-w-screen-xl mx-auto'>
      <div className='mx-6 mb-4  sm:mx-auto border-b-4 px-6 py-3'>
          <h2 className='text-xl text-center sm:text-3xl font-bold text-slate-700'>{ category[0].toUpperCase() + category.substring(1)} Recipes</h2>
        </div>
        <div className='flex flex-wrap justify-start gap-6'>
        {recipes && recipes.map(recipe => {
          return <RecipeCard recipe={recipe} />
        })}
        </div>
      </div>
    </div>
  )
}

export default Recipes