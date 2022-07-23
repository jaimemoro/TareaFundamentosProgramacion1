//Defino la función la nombro y le digo el parámetro, aún no definido (no sabe que es un vector de números)

function findMax(array){
    let max = array [0];//dado ese vector de números, yo devolveré el máximo, me creo esa variable y la inicializo en la primera posición.
    //Recorro el vector desde la segunda posición (la primera ya la he dado) hasta la última (length-1) aumentando de uno en uno. Condición que si la posición en la que estoy es mayor, se usa esa como max.
    for (let i=1; i<=array.length-1; i++){
        if(array[i]>max) max=array[i];
    }
    return max//La función devuelve un valor mediante return, en este caso, max, donde se habrá guardado el valor máximo del vector.
}

function findMin(array){
    let min = array[0];
    for(let i=1; i<=array.length-1; i++){
        if(array[i]<min) min=array[i];
    }
    return min
}

function findMean(array){
    let mean = 0
    for(let i=0; i<=array.length-1; i++){
    mean += array[i];
    }
    return (mean/array.length).toFixed(2);
}
export {findMax, findMin, findMean};//Exporto la función