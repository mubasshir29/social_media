import mongoose from 'mongoose'

const recipeSchema = new mongoose.Schema(
    {
        "date" : string,
        "author" : string,
        "category" : string,
        "title" : string,
        "ingredients" : [{
            name: string,
            quantity: string
        }],
        "description" : string,
        "procedure": string,
        "time_prepare" : string,
        "time_cook" : string,
        "difficult_level" : string,
        "serves" : Number,
        "image_url" : string
    }
)

const recipeModel = mongoose.model("Recipe",recipeSchema, "Recipes")

export default recipeModel