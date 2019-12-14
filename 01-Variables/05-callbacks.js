function calculo(numUno,
                 numDos,
                 funcionCalculo){
    const total = numUno + numDos;

    return funcionCalculo(numUno,numDos,total);
}

const numeroUno = 3;
const numeroDos = 2;

const suma = (num1, num2, total)=>{
    return total;
};

//console.log(suma);//devuelve DEFINICIÓN DE LA FUNCIÓN
//console.log(suma(1,2,3)); // Esto es la ejecución
/*
const resultadoCalculo = calculo(numeroUno,
                                 numeroDos,
                    functionCalculo:(numUno,numDos,total)=> {
                            return total/2;
                    });

console.log(resultadoCalculo);
*/

array = [1,2,3,4,5,6,7,8,9,10];

//FOREACH
function forEeachLocal (arreglo,funcion){
    for(let indiceIncial =0;
        indiceIncial < arreglo.length;
        indiceIncial++) {
        funcion(
            arreglo[indiceIncial],
            indiceIncial,
            arreglo);
    }
}

forEeachLocal(array, (valorActual,indiceActual,array) => {
    console.log('valorACTUAL:', valorActual);
});

//MAP
function mapLocal(arreglo,funcion){
    const arregloMap = [];
    for (let indiceInicial =0;
    indiceInicial < arreglo.length;
    indiceInicial ++){
         const valorDevuelto = funcion(
            arreglo[indiceInicial],
            indiceInicial,
            arreglo);

            arregloMap.push(valorDevuelto)
    }
    console.log(arregloMap);
}

mapLocal(array,(valorActual,indiceActual,array)=>{
    return valorActual +3;
});


//FILTER
function filterLocal(arreglo,funcion){
    const arregloFilter = [];
    for (let indiceInicial =0;
         indiceInicial < arreglo.length;
         indiceInicial ++){
         let valorDevuelto = funcion(
            arreglo[indiceInicial],
            indiceInicial,
            arreglo);

       if (valorDevuelto === true ) {
           arregloFilter.push(arreglo[indiceInicial]);
        }
    }
    console.log(arregloFilter);
}

filterLocal(array,(valorActual,indiceActual,array)=>{
    return valorActual + 5 >= 9;
});

//SOME

function someLocal(arreglo,funcion){
    let respuestaSome = false;
    for (let indiceInicial =0;
         indiceInicial < arreglo.length;
         indiceInicial ++){
         const valorDevuelto = funcion(
            arreglo[indiceInicial],
            indiceInicial,
            arreglo);

          if(valorDevuelto === true ){
              respuestaSome = true;
          }
    }
    console.log('respuesta:', respuestaSome);

}

someLocal(array,(valorActual,indiceActual,array)=>{
    return valorActual > 2 && valorActual < 5;
});

//EVERY

function everyLocal(arreglo,funcion){
    let respuestaEvery = true;
    for (let indiceInicial =0;
         indiceInicial < arreglo.length;
         indiceInicial ++){
        const valorDevuelto = funcion(
            arreglo[indiceInicial],
            indiceInicial,
            arreglo);

        if(valorDevuelto === false ){
            respuestaEvery = false;
        }
    }
    console.log('respuesta:', respuestaEvery);
}

everyLocal(array,(valorActual,indiceActual,array)=>{
    return valorActual > 2 && valorActual < 5;
});


//FIND
function findLocal(arreglo,funcion){
    let respuestaFind = undefined;
    let indiceInicial =0;
    while(indiceInicial < arreglo.length){
        const valorDevuelto = funcion(
            arreglo[indiceInicial],
            indiceInicial,
            arreglo);

        if(typeof valorDevuelto === "number"){
            respuestaFind = valorDevuelto;
            break;
        }
        indiceInicial++;
    }
    console.log('respuesta:', respuestaFind);
}

findLocal(array,(valorActual,indiceActual,array)=>{
    if (valorActual < 5){
        return valorActual;
    }
});

//FINDINDEX
function findIndexLocal(arreglo,funcion){
    let respuestaFindIndex = undefined;
    let indiceInicial =0;
    while(indiceInicial < arreglo.length){
        const valorDevuelto = funcion(
            arreglo[indiceInicial],
            indiceInicial,
            arreglo);

        if(typeof valorDevuelto === "number"){
            respuestaFindIndex = valorDevuelto;
            break;
        }
        indiceInicial++;
    }
    console.log('respuesta:', respuestaFindIndex);
}

findIndexLocal(array,(valorActual,indiceActual,array)=>{
    if (valorActual > 4){
        return indiceActual;
    }
});


//REDUCE

function reduceLocal(arreglo,funcion){
    //let respuestaReduce = undefined;
    let indiceInicial =0;
    let valorDevuelto = 0;
    for (let indiceInicial =0;
         indiceInicial < arreglo.length;
         indiceInicial ++){
         valorDevuelto = funcion(
            valorDevuelto,
            arreglo[indiceInicial]);
    }
    console.log('respuesta:', valorDevuelto);
}

reduceLocal(array,(valorInicial,valorActual)=>{
        return valorInicial + valorActual;
});
