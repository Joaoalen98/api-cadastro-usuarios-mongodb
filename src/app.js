import express from "express"
import db from "./config/connectDB.js"
import routes from "./routes/index.js"

db.on("error", (err) => {
    console.log(`${err.message} - Não foi possível conectar ao banco de dados.`)
})
db.once("open", () => {
    console.log("Conectado com sucesso ao banco de dados.")
})

const app = express()
routes(app)

export default app