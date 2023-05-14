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
        image_gallery : [
            {
                image_url: String
            }
        ],
        serves : Number,
        createdAt : String,
        author : {
            name: String,
            user_id: String
        },
        likes: Number,
        bookmarks: Number,
        shares: Number,
    }
)

const recipeModel = mongoose.model("Recipe",recipeSchema, "Recipes")

export default recipeModel