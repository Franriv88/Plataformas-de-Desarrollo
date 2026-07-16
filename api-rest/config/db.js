// intalamos "nysql2", una dependendcia para conectarnos a la BD ya que estamos usando Express
import mysql from "mysql2/promise"  //en clase usamos promesas

// creamos el objeto de configuración
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "acn4av",
    waitForConnections: true, // si supero el máx, esperar a que me dejen conectar
    conectionLimit: 10,       // máx 10 conecciones
    queueLimit: 0             // no hay fila de espera, puede haber la cant de solicitudes ilimitadas
})

export default pool

