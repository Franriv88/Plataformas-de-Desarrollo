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

// acá ahgo la función qeu busca por email y contraseña (es lo que pido en el Login)
export async function login(email, password){
    const query = "SELECT * FROM usuarios WHERE email = ? AND password = ? "
    const [results] = await conexion.query(query, [email, password])
    return results[0]
}

