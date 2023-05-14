import Recipe from './../Model/recipe.js'
import User from './../Model/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const getHomeData = (req,res) =>{

}

export const getRecipesNonVeg = async (req,res) => {
    try{
        const nonVeg = await Recipe.find({category:req.params.category})
        res.status(200).json(nonVeg)
        //console.log(nonVeg)
    }
    catch(error){
        console.log(error.msg)
        res.status(400).json(err.msg)
    }
}

export const getRecipe = async ( req,res) => {
    console.log("Request params",req.params)
    try{
        const recipe = await Recipe.findOne({_id: req.params.id})
        res.status(200).json(recipe)
        //console.log(recipe)
    }
    catch(error){
        console.log(error.msg)
        res.status(400).json(error)
    }
}

export const addNewRecipe = (req, res) => {
    console.log("Post Request", req.body, Date.now())
    try{
    const reqRecipe = Recipe(req.body)
    reqRecipe.save().then(response => console.log("Response received",response, Date.now()))
    console.log(reqRecipe,  Date.now())
    
    }
    catch(error){
        res.status(400).json(error)
    }
}


export const getIngredients = async ( req,res) => {
    
    try{
        const recipe = await Recipe.findOne({_id: req.params.id})
        res.status(200).json(recipe.ingredients)
        //console.log(recipe)
    }
    catch(error){
        console.log(error.msg)
        res.status(400).json(error)
    }
}

export const getUserRecipes = async (req,res) => {
    try{
        const myrecipes = await Recipe.find({_id: req.params.userID})
        res.status(200).json(myrecipes)
        //console.log(nonVeg)
    }
    catch(error){
        console.log(error.msg)
        res.status(400).json(err.msg)
    }
}

export const loginHandler = async (req,res)=>{
    try{
        //get user input
        const {email_mob,password} = req.body;

       //check all inputs are entered
       if(!(email_mob && password)){
            res.status(400).json({"msg":"All inputs are required"})
       }

       //check if user exists
       const user = await User.findOne({email_mob})

       if(user && (await bcrypt.compare(password, user.password))){
        const token = jwt.sign(
            {user_id: user._id, user_name:user.first_name},
            process.env.JWT_SECRET,
            {
                expiresIn:"2h"
            }
        )
        user.token = token

        res.status(200).json(user)
       }
       else res.status(401).json({"msg":"Incorrect credentials"})
    }
    catch(error){
        console.log(error)
    }
}

export const signupHandler = async (req,res)=>{
    try{
        console.log(req.body)
        //read all entered inputs

        const {first_name,last_name, email_mob,password,dob,gender} = req.body;

        //Check all the requried fields are entered
        if(!(first_name || last_name || password || email_mob || dob || gender)){
            res.status(400).json({"msg":"All inputs are required"})
        }

        //validate if entered email already exists
        const existUser = await User.findOne({email_mob})
        
        if(existUser){
            console.log("exisUser",existUser)
            res.status(400).json({"msg":"Email already exist, please login"})
        }

        //encrypt password
        const encryptedPassword = await bcrypt.hash(password,10)

        //Create user in database
        const user = new User({...req.body , password: encryptedPassword })
        await user.save()

        //create a token
        const token = jwt.sign(
            {user_id: user._id, email_mob},
            process.env.JWT_SECRET,
            {
                expiresIn: "2h"
            }
        )
        user.token = token
        res.status(201).json(user)
    }
    catch(error){
        console.log(error)
    }
}

export const checkLogin = (req,res) =>{
    res.json({isLogged: true, user: req.user})
}


export const getUserDetails = async ( req,res) => {
    
    try{
        const user = await User.findOne({_id: req.params.id})
        res.status(200).json(user)
        //console.log(recipe)
    }
    catch(error){
        console.log(error.msg)
        res.status(400).json(error)
    }
}

