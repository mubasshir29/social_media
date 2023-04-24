import mongoose from "mongoose";

const db_connection = async (user,pass)=>{
    try{
        await mongoose.connect(`mongodb+srv://${user}:${pass}@crudapp.wexyfxp.mongodb.net/PakwanShala?retryWrites=true&w=majority`)
        console.log("Database connected successfully")
    }
    catch(error){
        console.log("Unable to connect to DB: ",error.message)
    }
}

export default db_connection;