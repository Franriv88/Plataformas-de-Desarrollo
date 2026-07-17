import * as UsuarioModel from "../models/usuarioModel.js"
import jwt from "jsonwebtoken"

export async function getUsuarios(req, res){
    try{
        const result = await UsuarioModel.find()
        const usuarios = result.map(u => ({...u, password: undefined}))

        res.status(200).json({usuarios})

    } catch (error) {
        res.status(500).json({mesasge: error.message})
    }
}


// acá tendremos el MÉTDO correspóndiente a ID
export async function getUsuariosById(req, res){
    const id = req?.params?.id   // ponemos ? para tener parámetros opcionales pues puede que esto falle así que indicamos que el campo puede ser opcional y en lugar de dar error da undefined y entra en el if
        if(!id) {res.status(400).json({message: "El id es obligatorio"})
            return res.status(400).json({message: "El id es obligatorio"})
    }
    
    try{
        const result = await UsuarioModel.findById(id)  // en este caso es un solo resultado (result) sin la "s"
        const usuario = result.map(u => ({...u, password: undefined}))

        res.status(200).json({usuario})

    } catch (error) {
        res.status(500).json({mesasge: error.message})
    }
}

// LOGIN //
// acá agregamos el controller que llama a la "functgion login(email, password)" del usuarioModel.js
export async function login(req,res){
    const email = req.body.email
    const password = req.body.password

    try {
        const results = await UsuarioModel.login(email, password)
        if (!results){
            return res.status(400).json({ message: "Email y/o contraseña equivocados"})
        }

        const token = jwt.sign({...results, password: undefined}, process.env.JWT_SECRET,{ expiresIn: "2h"})
        console.log(results)

        res.status(200).json({ usuario: {...results, password: undefined}, token })

    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}