//let const
//INMUTABLE significa que no puede volver a ser reasignado
const arreglo = [1, 4, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//arreglo = [11, 12]; ESTO NO SE PUEDE HACER
console.log('arreglo',arreglo);
arreglo.push(11);
//Los arreglos pueden ser modificados aunque sean constantes pero mediante los métodos
//Cualquier variable puede ser cambiado dependiendo de sus métodos
console.log('arreglo',arreglo);

arreglo.pop(); //elimina el último elemento de un array
arreglo.splice(1, 0, 1.1); //elimina un elemento y ubica otro, las palabras no se escribieron, el Webstrom lo puso
arreglo [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
arreglo [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
arreglo [ 1, 1.1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


/*
SALIDA
arreglo [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
arreglo [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
arreglo [ 1, 1.1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
*/

arreglo.unshift(0);
console.log('arreglo',arreglo);
const respuestaIndice = arreglo.indexOf(4);
//retorna el índice del elemento que se busca sin importar que elemento sea. Solo retorna la primera ocurrencia
console.log(respuestaIndice);
arreglo.splice(respuestaIndice, 1);
console.log('arreglo',arreglo);