import conexion from "../config/db.js"

// acá vamos a tener todos los métodos
export async function find(){
    const query = "SELECT * FROM usuarios"
    const [results] = await conexion.query( query )
    return results
}

export async function findById(id){
    const query = "SELECT * FROM usuarios WHERE id = " + id
    const [result] = await conexion.query( query ) 
    return result
}