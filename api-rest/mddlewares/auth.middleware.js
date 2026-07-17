import jwt from "jsonwebtoken"

export function verificarToken(req, res, next){
    const authHeader = req.headers.authorization
    
    if(!authHeader){
        return res.status(400).json({ message: "No me diste un Token"})
    }

    const token = authHeader.split(" ")[1]
    
    if(!token){
        return res.status(400).json({ message: "No me diste un Token" })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.usuario = decoded
        next()
    } catch {
        return res.status(400).json({ message: "Token inválido "})
    }
}