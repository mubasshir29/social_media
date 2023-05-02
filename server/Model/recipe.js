import mongoose from 'mongoose'

const recipeSchema = new mongoose.Schema(
    {
        title : String,
        description : String,
        category : String,
        difficulty : String,
        prepareTime : String,
        cookTime : String,
        ingredients : [
            {
                name: String,
                quantity: String
            }
        ],
        preparation: [
            {
                action: String
            }
        ],
        cooking : [
            {
                action: String
            }
        ],
        serves : Number,
        image_gallery : [
            {
                image_url: String
            }
        ],
        createdAt : String,
        author : String,
        
    }
)

const recipeModel = mongoose.model("Recipe",recipeSchema, "Recipes")

export default recipeModel