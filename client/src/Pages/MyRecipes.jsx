import React, { useEffect, useState } from 'react'
import {getUserRecipes} from '../Utils/api.js'
import { useSelector } from 'react-redux'


import UserRecipeCard from '../Components/UserRecipeCard.jsx'

function MyRecipes() {

  const {user_id, username} = useSelector((state)=>state.AuthReducer)

    const [yourRecipes,setYourRecipes] = useState()
    const userID = "mubasshir.2906@gmail.com"

    const getYourRecipes = async () => {
        const data = await getUserRecipes(user_id)
        console.log(data)
        setYourRecipes(data)
    }
    useEffect(()=>{
        getYourRecipes()
    },[])
  return (
    <div className=' flex flex-wrap justify-left w-full gap-[1.5rem]'>
      {yourRecipes && yourRecipes.map(item => {
      if(item.image_gallery.length > 0){
        return (<UserRecipeCard recipe={item} />)
      }
      })}
    </div>
  )
}

export default MyRecipes