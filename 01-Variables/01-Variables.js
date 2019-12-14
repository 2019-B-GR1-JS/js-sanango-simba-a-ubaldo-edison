//JSON
// var nombre = "Edison";
//et nombre = "Edison";
//nombre = "Pedro";
//Mutable
//nombre = 1;
const cedula = 1727161621;
const mensaje = `Siempre usar "const", si ya toca usar "let y nunca usar
"var"`;
let nombre = "a";
console.log(typeof nombre,'nombre');
let numeros = 1;
console.log(typeof numeros,'numeros');
numeros = 1.1;
console.log(typeof numeros, 'numeros decimales');
let casados = false;
console.log(typeof casados, 'casado');
let hijos= null;
console.log(typeof hijos, 'hijos');
let mascotas = [];
console.log(typeof mascotas, 'mascotas');
let hermana = {};
console.log(typeof hermana, 'hermana');

//Condition
//Trusty
//False
if(""){ //ctrl + alt + l
    console.log("trusty");
}else{
    console.log("Falsy"); //esto
}


if("a"){ //ctrl + alt + l
    console.log("trusty");//esto
}else{
    console.log("Falsy");
}

if(-1){
    console.log("trusty");//
}else{
    console.log("Falsy");
}

if(0){
    console.log("trusty");
}else{
    console.log("Falsy");//
}

if(1){
    console.log("trusty");
}else{
    console.log("Falsy");//
}

//con null es falsy
//con {} es falsy    json
//con [] es truty    arreglo en javascript


//  JSON
const edison = {
    "nombre": 'Edison',
    'apellido': "Sanango",
    nombre1: 'S',
    edad: 21,
    casado: false,
    hijos: null,
    hermana: {nombre: "Mayra"},
    mascotas: [{
        nombre: "Atena",
    }],

};

console.log(edison.nombre); //Edison
console.log(edison.hermana); //{nombre: "Mayra"}
console.log(edison.mascotas[0].nombre); //Atena
edison.sueldo = 1.4;
edison["deudas"] = 10; //con estas dos líneas se crean más propiedades dentro de un objeto JSON
delete edison.hijos;
console.log(edison); //ya no hay la propiedad hijos
