/*function imprimirMensaje(mensaje){
    //console.log(´mensaje ${mensaje}´); las otras comillas
    console.log("Mensaje "+mensaje);
    //cuando no hay un RETURN son void & retornan UNDEFINED
}

const respuesta = imprimirMensaje("Edison");
console.log(respuesta); //esto sale UNDEFINED por que no tiene RETURN


const respuesta1 = imprimirMensaje(123);
console.log(respuesta1); //esto sale UNDEFINED por que no tiene RETURN


const respuesta2 = imprimirMensaje({a:1});
console.log(respuesta2); //esto sale UNDEFINED por que no tiene RETURN


function imprimirMensajeTypeof(mensaje){
    if (typeof mensaje == 'string'|| typeof mensaje == 'number'){
        //console.log(´mensaje ${mensaje}´);
        const respuesta = "Mensaje "+mensaje;
        console.log("Mensaje"+mensaje);
        return respuesta;
    }else{
        console.error("Error en el tipo del objeto")
    }

    //cuando no hay un RETURN son void & retornan UNDEFINED
}
const respuesta = imprimirMensajeTypeof("Hola");


function sumarDosElementos(numeroUno, numeroDos){
    return numeroUno + numeroDos;
}

console.log(
    sumarDosElementos(1,2)
)


//LOS 3 PUNTOS EN UNA FUNCIÓN (...) DESTRUCTURAN LOS PARÁMETROS
function sumarElementos(numeroUno, ...arregloParamMInfinitos){
    //EL PARÁMETRO OTROS LLEGA COMO ARREGLO
    //return numeroUno + numeroDos;
    //console.log(arregloParamMInfinitos);
    if(arregloParamMInfinitos){ //esto verifica si no es UNDEFINED
        return arregloParamMInfinitos
            .reduce((valorInicial,valorActual)=>{return valorInicial + valorActual},numeroUno)
    }else{
        return numeroUno;
    }
}

const respuesta = sumarElementos(1, 2,3,4,5,6,7);
console.log(respuesta);

//ESTAS 3 HACEN LO MISMO
const restar = function (a,b){
    return a-b;
};

function restar (a,b){
    return a-b;
};
const restar = function restar2 (a,b){
    return a-b;
};

//FAT ARROW FUNCTION =>ANONYMOUS FUNCTION
const restar = (a,b) => {
    return a -b;
}

const restarFF = {
    nombre: 'restar',
    restarNumeros: (a,b)=>{ //ANONYMOUS FUNCTION
        return a-b;
    },
    restarNumeros: function(a,b){ //ANONYMOUS FUNCTION
        return a-b
    }
};

const transformarAMayus = (letra) =>{
    return letra.toUpperCase()
}

//ESTO HACE LO MISMO
const transformarAMayus1 = (letra) => letra.toUpperCase();
//CUANDO SOLO HAY UN PARÁMETRO SE OMITE LOS PARENTESIS
const transformarAMayus2 = letra => letra.toUpperCase();
const filtarArreglo = arreglo.filter(a => a.id > 4); //ESTO ES UN PEQUEÑO FILTRO.

//DESTRUCTURAR EL ARREGLO HACE LO SIGUIENTE:
//sumarElementos(...arreglo); -> sumarElementos(1, 2,3,34,4,44)
//No importa si queda el mismo número de parámetros, ya que a JAVA SCRIPT no le importa
// //la cantidad de parámetros.


const a = [1,2,3,4,5];
const b = [6,7,8,9];

const arregloUnido = [...a, ...b]; //aquí junto los dos arreglos.
console.log(arregloUnido);
*/

const objEdison = {
    nombre: "Edison",
}

const objSanango = {
    apellido : "Sanango",
}

const unido = {...objEdison, ...objSanango, edad: 22};

function cambiarEdad(edad, objeto){
    objeto.edad = edad;
    return objeto;
}

//CLONAR OBJETOS
const oESString = JSON.stringify(unido); //Transofmra un OBJETO a un STRING JSON
console.log(oESString);
const oESClonado = JSON.parse(oESString); //Convierte un STRING con formato JSON
console.log(oESString);
oESString.edad = 21;
console.log(oESClonado);
console.log(unido);

//CLONAR PERO MÁS FÁCIL
const clonadoES = {
    ...unido
};

console.log(clonadoES);
clonadoES.edad= 21;
delete clonadoAE.edad; //con esto borro EDAD pero solo en el clonado
console.log(clonadoES);