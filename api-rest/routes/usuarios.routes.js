import express from "express"
import { getUsuarios, getUsuariosById } from "../controllers/usuarios.controller.js"

const route = express.Router()

route.get("/usuarios", getUsuarios)
route.get("/usuarios/:id", getUsuariosById)

export default route