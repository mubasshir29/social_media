import React from 'react'
import recipes from './../Data/recipes.json'
import RecipeCard from '../Components/RecipeCard'

function NonVeg() {
  const nonVeg_recipes = recipes.filter(recipe => recipe.category === 'Non-Veg')
  console.log(nonVeg_recipes)
  return (
    <div className='mt-[8vh] sm:mt-[8vh] w-screen sm:w-screen bg-slate-50 py-6'>
      <div className='w-full sm:w-[70rem] max-w-screen-xl mx-auto'>
      <div className='mx-6 mb-4 bg-gradient-to-r from-gray-100 via-slate-50 to bg-white rounded-xl sm:mx-auto drop-shadow-lg px-6 py-3'>
          <h1 className='text-xl text-center sm:text-3xl font-bold text-slate-700'>Non-Veg Recipes</h1>
        </div>
        <div className='flex flex-col sm:flex sm:flex-row gap-6 sm:gap-8 sm:justify-between sm:flex-wrap sm:p-6'>
        {nonVeg_recipes.map(recipe => {
          return <RecipeCard recipe={recipe} />
        })}
        </div>
      </div>
    </div>
  )
}

export default NonVeg