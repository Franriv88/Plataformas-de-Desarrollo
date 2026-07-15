export function getUsuarios(req, res){
    res.status(200).json([
        {
            "id": 1,
            "nombre": "Francisco",
            "apellido": "Rivas"
        }
    ])
}

export function getUsuariosById(req, res){
    res.status(200).json(
        {
            "id": 1,
            "nombre": "Francisco",
            "apellido": "Rivas"    
        }
    )
}