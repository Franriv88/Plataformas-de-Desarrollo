import * as UsuarioModel from "../models/usuarioModel.js"

export async function getUsuarios(req, res){
    try{
        const results = await UsuarioModel.find()

        res.status(200).json({results})
    } catch (error) {
        res.status(500).json({mesasge: error.message})
    }
}


// acá tendremos el MÉTDO correspóndiente a ID
export async function getUsuariosById(req, res){
    const id = req?.params?.id   // ponemos ? para tener parámetros opcionales pues puede que esto falle así que indicamos que el campo puede ser opcional y en lugar de dar error da undefined y entra en el if
        if (!id ) res.status(400).json({message: "El id es obligatorio"})
    try{
        const result = await UsuarioModel.find(id)  // en este caso es un solo resultado (result) sin la "s"

        res.status(200).json({result})
    } catch (error) {
        res.status(500).json({mesasge: error.message})
    }
}