import React, { useEffect, useState } from 'react'
import {getUserRecipes} from '../Utils/api.js'
import { useSelector } from 'react-redux'
import {getUserDetails} from './../Utils/api.js'

import UserRecipeCard from '../Components/UserRecipeCard.jsx'

function MyRecipes() {

  const {loggedStatus,user_id,username} = useSelector((state) => state.AuthReducer)
  const [user,setUser] = useState()

    const [yourRecipes,setYourRecipes] = useState()

    const getUserInfo = async (id) =>{
      const data = await getUserDetails(id)
      console.log(data)
      setUser(data)
     }

    const getYourRecipes = async () => {
        const data = await getUserRecipes(user_id)
        console.log(data)
        setYourRecipes(data)
    }
    useEffect(()=>{
      if(user_id){
        console.log(user_id)
        getUserInfo(user_id)
        getYourRecipes(user_id)
      }
    },[user_id])
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