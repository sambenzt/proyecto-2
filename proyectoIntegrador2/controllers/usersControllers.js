const nombreUsuario = require("../db/users");
const usuario = require ("../db/users");

const usuarioController = {
    usuario: function(req,res){
        return res.render ("profile", {usuarios: nombreUsuario.lista});
    },

    registro: function(req,res){
        return res.render ("registro");
    },

    registrar: function(req,res){
        return res.send('recibiendo datos');
    },

    login: function(req,res){
        return res.render("login", {error: false});
    },

    loguear: function(req,res){

        let usuario = req.query.usuario;
        let contrasena = req.query.contrasena;

        let user = nombreUsuario.lista[0];

        if(user.Contrasena == contrasena && user.Usuario == usuario) {
            return res.redirect("/users/editar");
        }
        else{
            res.render("login", {error: 'usuario o contraseña invalida'});
        }

    },

    editarUser: function(req,res){

        return res.render ("editar-usuario", {usuarios: nombreUsuario.lista});
    }
}

module.exports = usuarioController;