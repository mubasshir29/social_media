import mongoose from 'mongoose'

const recipeSchema = new mongoose.Schema(
    {
        "name" : string,
        "image_url" : string,
        "total_recipes" : Number
    }
)

const recipeModel = mongoose.model("Recipe",recipeSchema, "Recipes")

export default recipeModel