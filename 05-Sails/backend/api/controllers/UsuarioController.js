/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


};

//Se va a usar HTTP para seguir el estandar RESTFULL
//Sails crea: Find, FindOne, CreateOne, UpdateOne, DeleteOne
//En HTTP se tiene el método HTTP + url + *parametros
//*parametros
//ruta
//http://localhost:1337/usuario/1 -> id
//Query
//http://localhost:1337/usuario?nombre=Edison&apellido=Sanango  -> los parametros de consulta son opcionales
//http://localhost:1337/usuario

//Todos los parametros llegan como TEXTO

//Body
//http://localhost:1337/usuario
/*
pedidos: 5
detallePedido: {
  producto: 1, -- number
  cantidad: 5,  -- number
  habilitado: true - boolean
  descriocion: 'comprado' -- string
}
 */



/*                  METODO HTTP
  GET -- buscar
  POST -- Crear
  PUT -- actualizar
  DELETE -- Eliminar

                  CODIGO HTTP
  1XX -- INFROMACION
  2XX -- OK
  3XX -- REDIRECCIONES
  4XX -- ERROR CLIENTE 404 -- Not found (cliente)
  5XX -- ERROR SERVER 500 -- internal server error (servidor)

 */

/*
              URL
Find (devuelve varios registros)
GET //http://localhost:1337 + modelo
Ej: GET //http://localhost:1337/usuario

FindOne
GET //http://localhost:1337 + modelo/:id
Ej: GET //http://localhost:1337/usuario/1


CreateOne
POST //http://localhost:1337 + modelo
Ej: POST //http://localhost:1337/usuario

UpdateOne
PUT //http://localhost:1337 + modelo/:id
Ej: PUT //http://localhost:1337/usuario/1

DeleteOne
DELETE //http://localhost:1337 + modelo/:id
Ej: DELETE //http://localhost:1337/usuario/1


 */
