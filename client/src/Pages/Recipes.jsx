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
    console.log("Received data", recipesData)
  }

  useEffect(()=>{
    getRecipes()
  },[])

  return (
    <div className='mt-[8vh] sm:mt-[8vh] min-h-[92vh] w-screen sm:w-screen bg-slate-50 py-6'>
      <div className='w-full sm:w-[70rem] max-w-screen-xl mx-auto'>
      <div className='mx-6 mb-4 bg-gradient-to-r from-gray-100 via-slate-50 to bg-white rounded-xl sm:mx-auto drop-shadow-lg px-6 py-3'>
          <h1 className='text-xl text-center sm:text-3xl font-bold text-slate-700'>{ category[0].toUpperCase() + category.substring(1)} Recipes</h1>
        </div>
        <div className='flex flex-col sm:flex sm:flex-row gap-6 sm:gap-8 sm:justify-between sm:flex-wrap sm:p-6'>
        {recipes && recipes.map(recipe => {
          return <RecipeCard recipe={recipe} />
        })}
        </div>
      </div>
    </div>
  )
}

export default Recipes