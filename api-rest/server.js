import express from "express"
import UsuarioApi from "./routes/usuarios.routes.js"
import WorkshopApi from "./routes/workshops.routes.js"
import dotenv from "dotenv"
import cors from "cors"

const app = express() // esto CREA nuestro servidor

dotenv.config()
/*
app.get("/", (req, res) => {
    console.log({message: "Recibida la solicitud!"})  // esta es la respuesta (del que le pido la hamburguesa)
})
*/

// Obs: El orden acá importa! así que cors() no puede ir al final
app.use( express.json()) //esto es un milware. Un intermedierio entre la solicitud y el momento en que comienzo a manerjar en express.
app.use(cors())
app.use(UsuarioApi)
app.use(WorkshopApi)

// app.get("/", getUsuarios)

app.get("/", (req, res) => {
    console.log(req.params.id)  // esta es la respuesta (del que le pido la hamburguesa)
})

app.get("/:id", (req, res) => {
    console.log(req.params.id)
})



app.post("/", (req, res) => {
    console.log(req.body.nombre)
})

app.listen( 2026, () => console.log("funciona!") ) // estre es nuestro puerto 2026