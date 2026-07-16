import express from "express"
import { getUsuarios, getUsuariosById, login } from "../controllers/usuarios.controller.js"




const route = express.Router()

route.get("/usuarios", getUsuarios)
route.get("/usuarios/:id", getUsuariosById)
route.post("/usuarios/login", login)

export default route