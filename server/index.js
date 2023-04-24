import express from 'express'
import dotenv from 'dotenv'
//import pageRoutes from './Routes/PageRoutes.js'
import db_connection from './Database/db.js'
import cors from 'cors'
const app =express()

dotenv.config()
const PORT = process.env.PORT
const db_user = process.env.DB_USER
const db_passwod = process.env.DB_PASSWORD


db_connection(db_user,db_passwod)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded());
//app.use(pageRoutes)


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})