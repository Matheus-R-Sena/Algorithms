//The real solution of the problem

function ArrayMax (arr){

    const Matriz = [];

    for (let i = 0; i < arr.length; i++){
        for (let j = i; j < arr.length; j++){

            let subarray = [];
            for (let k = i; k <= j; k++){
                subarray.push(arr[k]);
            }
            Matriz.push(subarray);
    }
    }
    return Matriz;

}


console.log(ArrayMax([0, 1, 2]));