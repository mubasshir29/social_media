import mongoose from 'mongoose'

const buzzSchema = new mongoose.Schema({
    
})

const buzzModel = mongoose.Model("buzzPost", buzzSchema, BuzzPosts)

export default buzzModel