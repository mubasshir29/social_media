import Recipe from './../Model/recipe.js'

export const getHomeData = (req,res) =>{

}

export const getRecipesNonVeg = async (req,res) => {
    try{
        const nonVeg = await Recipe.find({category:req.params.category})
        res.status(200).json(nonVeg)
        console.log(nonVeg)
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
        console.log(recipe)
    }
    catch(error){
        console.log(error.msg)
        res.status(400).json(error)
    }
}

export const addNewRecipe = async (req, res) => {
    console.log("Post Request", req.body)
    try{
    const reqRecipe = Recipe(req.body)
    await reqRecipe.save()
    console.log(reqRecipe)
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


