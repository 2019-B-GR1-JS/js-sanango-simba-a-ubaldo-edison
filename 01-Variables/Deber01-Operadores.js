
//SANANGO EDISON
//DEBER - PROGRAMAR LOS OPERADORES DE FORMA MANUAL, UTILIZANDO COMO BASE EL OPERADOR FOREACH

array = [1,2,3,4,5,6,7,8,9,10];

//FOREACH
function forEeachLocal (arreglo,funcion){
    for(let indiceIncial =0;
        indiceIncial < arreglo.length;
        indiceIncial++) {
        funcion(
            arreglo[indiceIncial]);
    }
}

forEeachLocal(array, (valorActual) => {
    console.log('valorACTUAL:', valorActual);
});


//MAP
function mapLocal(arreglo,funcion){
    const arregloMap = [];
    for (let indiceInicial =0;
         indiceInicial < arreglo.length;
         indiceInicial ++){
        const valorDevuelto = funcion(
            arreglo[indiceInicial]);

        arregloMap.push(valorDevuelto)
    }
    console.log(arregloMap);
}

mapLocal(array,(valorActual)=>{
    return valorActual +3;
});


//FILTER
function filterLocal(arreglo,funcion){
    const arregloFilter = [];
    for (let indiceInicial =0;
         indiceInicial < arreglo.length;
         indiceInicial ++){
        let valorDevuelto = funcion(
            arreglo[indiceInicial]);

        if (valorDevuelto === true ) {
            arregloFilter.push(arreglo[indiceInicial]);
        }
    }
    console.log(arregloFilter);
}

filterLocal(array,(valorActual)=>{
    return valorActual + 5 >= 9;
});


//SOME
function someLocal(arreglo,funcion){
    let respuestaSome = false;
    for (let indiceInicial =0;
         indiceInicial < arreglo.length;
         indiceInicial ++){
        const valorDevuelto = funcion(
            arreglo[indiceInicial]);

        if(valorDevuelto === true ){
            respuestaSome = true;
        }
    }
    console.log('respuesta:', respuestaSome);

}

someLocal(array,(valorActual)=>{
    return valorActual > 2 && valorActual < 5;
});


//EVERY
function everyLocal(arreglo,funcion){
    let respuestaEvery = true;
    for (let indiceInicial =0;
         indiceInicial < arreglo.length;
         indiceInicial ++){
        const valorDevuelto = funcion(
            arreglo[indiceInicial]);

        if(valorDevuelto === false ){
            respuestaEvery = false;
        }
    }
    console.log('respuesta:', respuestaEvery);
}

everyLocal(array,(valorActual)=>{
    return valorActual > 2 && valorActual < 5;
});


//FIND
function findLocal(arreglo,funcion){
    let respuestaFind = undefined;
    let indiceInicial =0;
    while(indiceInicial < arreglo.length){
        const valorDevuelto = funcion(
            arreglo[indiceInicial]);

        if(typeof valorDevuelto === "number"){
            respuestaFind = valorDevuelto;
            break;
        }
        indiceInicial++;
    }
    console.log('respuesta:', respuestaFind);
}

findLocal(array,(valorActual)=>{
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
            indiceInicial);

        if(typeof valorDevuelto === "number"){
            respuestaFindIndex = valorDevuelto;
            break;
        }
        indiceInicial++;
    }
    console.log('respuesta:', respuestaFindIndex);
}

findIndexLocal(array,(valorActual,indiceActual)=>{
    if (valorActual > 4){
        return indiceActual;
    }
});


//REDUCE
function reduceLocal(arreglo,funcion){
    //let respuestaReduce = undefined;
    let indiceInicial = 0;
    let valorDevuelto = 100;
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
    return valorInicial - valorActual;
});
