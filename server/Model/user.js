import mongoose from "mongoose";

const dateSchema = mongoose.Schema({
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
    user_handle:{
        type: String,
        required: true
    },
    bio : {
        type: String
    },
    profile_image:{
        image_url: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: dateSchema,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    joined:{
        type: dateSchema
    },
    token:{
        type: String
    },
    my_posts : [
        {
                post_id: String,
        }
    ],
    my_pix_ids : [
        {
                post_id: String,
        }
    ],
    my_tapes_ids : [
        {
                post_id: String,
        }
    ],
    liked_post_ids : [
        {
                post_id: String,
        }
    ],
    liked_pix_ids : [
        {
                post_id: String,
        }
    ],
    liked_tapes_ids : [
        {
                post_id: String,
        }
    ],
    saved_posts_ids : [
        {
                post_id: String,
        }
    ],
    saved_pix_ids : [
        {
                post_id: String,
        }
    ],
    saved_tape_ids : [
        {
                post_id: String,
        }
    ],
})

const userModel = mongoose.model("user", userSchema, "User")
export default userModel;