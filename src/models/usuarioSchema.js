import mongoose from "mongoose";

const UsuariosSchema = new mongoose.Schema(
    {
        nomeCompleto: {type: String, required: true},
        dataNascimento: {type: Date, required: true},
        email: {type: String, required: true},
        senha: {type: String, required: true}
    }
)

const usuarios = mongoose.model("usuarios", UsuariosSchema)

export default usuarios