import mongoose from "mongoose"

const storySchema = mongoose.Schema({
    user_id: String,
    post: String,
    time: String,
    media_url: [
        {
            url: String
        }
    ],
    likes: Number,
    shares: [
        {
            user_id: String
        }
    ],
    comments: [
        {
            user_id: String,
            user_comment: String
        }
    ]
})

const storyModel = mongoose.Model("Story", storySchema, "Stories")