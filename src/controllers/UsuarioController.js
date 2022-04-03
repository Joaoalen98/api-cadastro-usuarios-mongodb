import usuarios from "../models/usuarioSchema.js"

class UsuariosControllers {

    static listarUsuarios = (req, res) => {
        usuarios.find((err, result) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Não foi possível acessar a lista de usuários.`})
            } else {
                res.status(200).send(result)
            }
        })
    }

    static listarUsuarioPorId = (req, res) => {
        const id = req.params.id
        usuarios.findById(id, (err, result) => {
            if (err) {
                res.status(500).send({message: `${err.message} - Não foi possível acessar o usuário para o ID informado.`})
            } else {
                res.status(200).send(result)
            }
        })
    }

    static cadastrarUsuario = (req, res) => {
        const usuario = new usuarios(req.body)

        usuario.save((err, result) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Não foi possível cadastrar usuário.`})
            } else {
                res.status(201).send({message: `Usuário cadastrado com sucesso.`})
            }
        })

    }

    static atualizarUsuario = (req, res) => {
        const id = req.params.id
        usuarios.findByIdAndUpdate(id, {$set: req.body}, (err, result) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Não foi possível atulizar o usuário`})
            } else {
                res.status(200).send({message: `Atualizado com scuesso`})
            }
        })
    }

    static deletarUsuario = (req, res) => {
        const id = req.params.id
        usuarios.findByIdAndDelete(id, (err, result) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Não foi possível deletar usuário.`})
            } else {
                res.status(200).send({message: "Usuário deletado com sucesso."})
            }
        })
    }
}

export default UsuariosControllers