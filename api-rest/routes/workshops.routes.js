import express from "express"
import { getWorkshops, createWorkshop, updateWorkshop, deleteWorkshop } from "../controllers/workshops.controllers.js"
import { verificarToken, esAdmin } from "../mddlewares/auth.middleware.js"

const route = express.Router()

route.get("/workshops", verificarToken, getWorkshops)
route.post("/workshops", verificarToken, esAdmin, createWorkshop)
route.put("/workshops/:id", verificarToken, esAdmin, updateWorkshop)
route.delete("/workshops/:id", verificarToken, esAdmin, deleteWorkshop)

export default route