import conexion from "../config/db.js"

export async function find(){
    const query = "SELECT * FROM workshops"
    const [results] = await conexion.query(query)
    return results
}

export async function create(data){
    const query = "INSERT INTO workshops (title, cap, date, time, price) VALUES (?, ?, ?, ?, ?)"
    const [result] = await conexion.query(query, [data.title, data.cap, data.date, data.time, data.price])
    return result
}

export async function update(id, data){
    const query = "UPDATE workshops SET title = ?, cap = ?, date = ?, time = ?, price = ? WHERE id = ?"
    const [result] = await conexion.query(query, [data.title, data.cap, data.date, data.time, data.price, id])
    return result
}

export async function remove(id){
    const query = "DELETE FROM workshops WHERE id = ?"
    const [result] = await conexion.query(query, [id])
    return result
}
