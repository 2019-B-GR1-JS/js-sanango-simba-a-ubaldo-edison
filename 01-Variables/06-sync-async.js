const fileSystem = require('fs');
console.log('Iniciando');
fileSystem.readFile(
    './05-callbacks.js',
    'utf8',
   // ()=> { //callbacks
   //     console.log('Leyendo archivo');
   // }
    callbackLeerArchivo5)
;

//---------------------
function callbackLeerArchivo5(error,datos){
    if(error){
        console.error({
            mensaje:'Error leyendo archivo ',
            error:error,})
        //error,})
    }else{
        console.log('Datos :',datos);
        fileSystem.readFile('./04-funciones.js','utf8',callbackLeerArchivo4)
    }
//poner el nombre de cualquiera y se ejecuta hasta al anterior
}


function callbackLeerArchivo4(error,datos){
    if(error){
        console.error({
            mensaje:'Error leyendo archivo ',
            error:error,})
        //error,})
    }else{
        console.log('Datos :',datos);
        fileSystem.readFile('./031-operadores.js','utf8',callbackLeerArchivo3);
    }
//poner el nombre de cualquiera y se ejecuta hasta al anterior
}

function callbackLeerArchivo3(error,datos){
    if(error){
        console.error({
            mensaje:'Error leyendo archivo ',
            error:error,})
        //error,})
    }else{
        console.log('Datos :',datos);
        fileSystem.readFile('./02-objetos.js','utf8',callbackLeerArchivo2);
    }
//poner el nombre de cualquiera y se ejecuta hasta al anterior
}

function callbackLeerArchivo2(error,datos){
    if(error){
        console.error({
            mensaje:'Error leyendo archivo ',
            error:error,})
        //error,})
    }else{
        console.log('Datos :',datos);
       fileSystem.readFile('01-Variables.js','utf8',callbackLeerArchivo1);
    }
//poner el nombre de cualquiera y se ejecuta hasta al anterior
}

function callbackLeerArchivo1(error,datos){
    if(error){
        console.error({
            mensaje:'Error leyendo archivo ',
            error:error,})
        //error,})
    }else{
        console.log('Datos :',datos);
       // fileSystem.readFile('01-Variables.js','utf8',callbackLeerArchivo1);
    }
//poner el nombre de cualquiera y se ejecuta hasta al anterior
}