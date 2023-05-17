import axios from 'axios'

const server = 'http://localhost:5000'

export const postRecipe = (data) => {
    console.log("Data received from Client", data, Date.now())
    try{
        axios.post(`${server}/add/recipe`, data).then(response => console.log(response))
        // console.log("Data sent to server",data, Date.now())
        // console.log("Response received", response.data, Date.now())
        // return response
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

export const getRecipe = async (id)=>{
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

export const getUserRecipes = async (userID)=>{
    try{
        const response = await axios.get(`${server}/recipes/user/${userID}`)
        //console.log(response)
        return response.data
    }
    catch(error){
        console.log(error)
    }
}

export const userSignUp = async (user) => {
    console.log(user)
    let signupResponse;
    try{
        signupResponse = await axios.post(`${server}/signup`, user)
        console.log("Response in API",signupResponse)
        return signupResponse
    }
    catch(error){
        console.log("signupResponse:",error.response)
        return error.response
    }
}

export const userLogin = async (data) => {
    try{
        const lgoinResponse = await axios.post(`${server}/login`, data)
        //console.log("Login Response",lgoinResponse)
        return lgoinResponse
    }
    catch(error){
        console.log(error)
    }
}

export const checkLoginStatus = async () => {
    try{
        
        const loginStatus = await axios.get(`${server}/isAuthenticated`,{
            headers:{
                "x-access-token":localStorage.getItem("token")
            }
        })
        console.log("Login Response", loginStatus)
        return loginStatus.data
    }
    catch(error){
        console.log(error)
    }
}

export const getUserDetails = async (id) => {
    try{
        
        const loginStatus = await axios.get(`${server}/user/${id}`)
        //console.log("Login Response", loginStatus)
        return loginStatus.data
    }
    catch(error){
        console.log(error)
    }
}
