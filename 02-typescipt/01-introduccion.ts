const numero: number = 0;
//let nombre: string = "Edison";

//DUCK TYPING, infiere el tipo de dato de una variable
let nombre = "Edison";
let fecha: Date; //Date -> Es una Clase
fecha = new Date();

let edison:Estudiante; //Estudiante -> Interface
                        //Tipo de dato "Estudiante"

edison = {
    nombre: "edison",
    edad: 8,
};

interface Estudiante{
    nombre: string;
    edad: number;
}


//FUNCIONES
function holaMundo(): void {
    console.log('Hola');
}

function mensaje(nombre: string): void {
    console.log('Hola', nombre);
}

function calculadora(
    numero1:number,
    ...numeros: number[]
): number {
    console.log('Calculador');
    return numero1;
}

function universidad(
    nombre: string,
    edad?: number, //OPCIONAL
): string {
    return `${nombre} Edad:  ${edad}`;
}

universidad("EPN", 2);
//En caso de que el segundo parámetro sea opcional
universidad("EPN");

//INTERFAZ SIMULANDO UNA TABLA EN LA BASE DE DATOS
interface Departamento{
    nombre: string;
    id: number;
    facultad:Facultad | number; // | boolean
}

interface Facultad{
    nombre: string;
    id: number;

}

const departamentoSistemasRelacionado = {
    nombre: "Sistemas",
    id: 1,
    facultad: {
        nombre: "Sistemas",
        id:1,
    }
};

const departamentoSistemasSinRelacionar:Departamento = {
    nombre: "Sistemas",
    id: 1,
    facultad: 1,
};

function imprimirDepartamento(
    departamento:Departamento
){
    //Son las dos formas de castear.
    const departamentoId = departamento.facultad as number +1;
    const departamentoId = <number>departamento.facultad + 1;
}