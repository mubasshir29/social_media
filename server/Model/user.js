import mongoose from "mongoose";

const dobSchema = mongoose.Schema({
    day: String,
    month: String,
    year: String
})

const userSchema = mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    profile_image:{
        image_url: String
    },
    email_mob: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: dobSchema,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    token:{
        type: String
    },
    my_recipes : [
        {
                post_id: String,
        }
    ],
    my_stories : [
        {
                post_id: String,
        }
    ],
    my_videos : [
        {
                post_id: String,
        }
    ],
    liked_recipes : [
        {
                post_id: String,
        }
    ],
    liked_stories : [
        {
                post_id: String,
        }
    ],
    liked_videos : [
        {
                post_id: String,
        }
    ],
    saved_recipes : [
        {
                post_id: String,
        }
    ],
    saved_stories : [
        {
                post_id: String,
        }
    ],
    saved_videos : [
        {
                post_id: String,
        }
    ],
    my_cart: [
            {
                item: String
            }
        ]

})

const userModel = mongoose.model("user", userSchema, "User")
export default userModel;