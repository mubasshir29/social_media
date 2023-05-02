import axios from 'axios'

const server = 'http://localhost:5000'

export const postRecipe = async (data) => {
    console.log(data)
    try{
        const response = await axios.post(`${server}/add/recipe`, data)
        console.log("Data sent to server")
        if(response.status === 200){
            console.log(response)
        }
    }
    catch(error){
        console.log(error)
    }
}

export const getAllRecipes = async (category)=>{
    try{
        const response = await axios.get(`${server}/recipes/${category}`)
        //console.log(response)
        return response.data
    }
    catch(error){
        console.log(error)
    }
}

export const getSingleRecipe = async (id)=>{
    try{
        const response = await axios.get(`${server}/recipe/${id}`)
        //console.log(response)
        return response
    }
    catch(error){
        console.log(error)
    }
}

export const getIngredients = async (id) => {
    try{
        const response = await axios.get(`${server}/recipe/${id}/ingredients`)
        return response
    }
    catch(error){
        console.log(error)
    }
}