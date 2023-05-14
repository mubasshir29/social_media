import jwt from 'jsonwebtoken'
import { query } from 'express'

const verifyToken = (req,res,next) => {
    const token = req.token || req.query.token || req.headers["x-access-token"]

    if(!token){
        return res.status(401).json({"msg":"Token is required"})
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        return next()
    }
    catch(error){
        return res.status(401).json({"msg":"Invalid token"})
    }

}

export default verifyToken
