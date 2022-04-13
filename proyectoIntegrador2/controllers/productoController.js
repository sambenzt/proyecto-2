const jugadores = require ('../db/jugadores'); //para que pueda retornar la lista de jugadores que esta en la carpeta de jugadores en db

const comentario = require ('../db/comentarios'); //idem 
const nombreUsuario = require('../db/users');

const productoController = {

    agregarProducto : function(req,res){
        res.render('product-add', {usuarios: nombreUsuario.lista }); //preguntar ESTOgi
    },

    detalleProducto : function(req, res) {


        let jugador;

        for(let i = 0; i < jugadores.lista.length; i++) {
            
            if(req.params.id == jugadores.lista[i].id) {
                //let jugador = jugadores.lista[i];
                console.log(jugadores.lista[i])
                jugador = jugadores.lista[i];
            }

        }

        res.render('detalle-producto', {jugador: jugador});
        //res.render('jugadores', { jugadores: jugadores.lista, comentarios: comentarios.lista});
    } //agrgear product add
}

module.exports = productoController;
