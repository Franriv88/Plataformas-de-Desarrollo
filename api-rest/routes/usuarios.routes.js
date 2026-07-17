import express from "express"
import { getUsuarios, getUsuariosById, login } from "../controllers/usuarios.controller.js"
import { verificarToken } from "../mddlewares/auth.middleware.js"




const route = express.Router()

// route.get("/usuarios", getUsuarios)
route.get("/usuarios/:id", getUsuariosById)
route.post("/usuarios/login", login)
route.get("/usuarios", verificarToken, getUsuarios)

export default route