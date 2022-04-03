import express from "express";
import UsuariosControllers from "../controllers/UsuarioController.js";

const router = express.Router()

router
    .get("/", (req, res) => {
        res.status(200).send({message: "Bem vindo à API!!"})
    })
    .get("/usuarios", UsuariosControllers.listarUsuarios)
    .get("/usuarios/:id", UsuariosControllers.listarUsuarioPorId)
    .post("/usuarios", UsuariosControllers.cadastrarUsuario)
    .put("/usuarios/:id", UsuariosControllers.atualizarUsuario)
    .delete("/usuarios/:id", UsuariosControllers.deletarUsuario)

export default router
