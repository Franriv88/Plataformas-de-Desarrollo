import express from "express"

const app = express() // esto CREA nuestro servidor

app.get("/", () => console.log("Recibida la solicitud!"))

app.listen( 2026, () => console.log("funciona!") )