const fs = require('fs');

// const sumarDosNumeros = (correcto) => {
//     return new Promise(
//         (resolve,reject) => {
//             if(correcto){
//                 resolve('SI');
//             }else {
//                 reject('NO');
//             }
//         }
//     )
// }
//
// const promesaSumarDosNUmeros = sumarDosNumeros(false); //Esto es una promesa ya que eso retorna la función
// console.log('01) Iniciar');
// promesaSumarDosNUmeros
//     .then(
//         (ok) => {
//             console.log('OK',ok);
//         }
//     )
//     .catch(
//         (error) => {
//             console.log('Error',error);
//         }
//     )
//
// console.log('02) Fin');


const leerArchivo =  (pathArchivo) => {
    return new Promise(
    (resolve,reject)=> {
        //res y rej
        fs.readFile(
            pathArchivo,
            'utf8',
            (error,archivoLeido) =>{
                if(error){
                    reject(error);
                }else{
                    resolve(archivoLeido);
                }
            });
    }
    );
}
/*
const promesaLeerArchivo = leerArchivo('./05-callbacks.js') //Esto es una promesa ya que eso retorna la función
    .then(
        (contenidoCallbackjs) => {
            console.log(contenidoCallbackjs);
            return leerArchivo('./04-funciones.js');
        }
    )
    .then((contenidoFuncionesjs)=>{
        console.log(contenidoFuncionesjs);
        return leerArchivo('./03-operadores.js'); //Y de esa forma crece el código hasta abajo
    })
    .catch(
        (error) => {
            console.log('Error: ',error);
        }
    );

*/

//FUNCIÓN SÍNCRONA

const nombreArchivo = './05-callbacks.js';
console.log('INICIA SINCRONO');
try{
    const contenidoArchivo =fs.readFileSync(nombreArchivo);
    //console.log(contenidoArchivo);
    console.log('Se leyó correctamente');
}catch(error){
    console.error('Error: ', error);
}
console.log('TERMINA SINCRONO');


//Transformar una promesa a código SÍNCRONO, solo si se tiene una función normal o una asíncrona

async function leerArchivoSync(){
    try{
        const contenido = await leerArchivo(nombreArchivo); //nos devuelve una promesa, pero con AWAIT ya es sincrono
        //console.log(contenido);
        console.log('LEIMOS CON ASYNC AWAIT');
        return 1;
    }catch(error){
        console.error('Error: ', error);
        return 0;
    }
}

leerArchivoSync()
    .then(
    (numero) => {
        console.log(numero);
    }
).catch(
    (numero) => {
        console.log(numero);
    }
);