/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

//const modulo = require('escucharCorazon');

const axios = require('axios'); //npm install axios
const moduloArduino = {
  calcularProximidad: function () {
    return Math.random() * (10);
}
};

module.exports.bootstrap = async function() {
  setInterval(
    async ()=>{
      const valor = moduloArduino.calcularProximidad();
      console.log('Valor proximimdad:', valor);

      //http://localhost:1338 backend
      //http://localhost:1337 iot

      //POST http://localhost:1338/MonitoreoMovimiento {valor: 'valor'}

      const respuestaServidor = await axios
        .post(
          'http://localhost:1338/MonitoreoMovimiento',
          {
            valor:valor
          }

      );
      console.log('respuestaServer', respuestaServidor);

    },
    2000, //2 segundos
  );

};
