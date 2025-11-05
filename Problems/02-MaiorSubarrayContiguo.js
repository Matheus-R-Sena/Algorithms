//Solução 01
//Coletar todos os arrays
//Somar cada um deles e encontrar o maior

const biggerSubarrayVersion01 = (arr) => {

    const Matriz = [];
    let maiorSubArray = [];
    let maiorSoma = arr[0];

    for (let i = 0; i < arr.length; i++){
        for (let j = i; j < arr.length; j++){

            let arrayTemp = [];
            let somaDoSubArray = 0;
            for (let k = i; k <= j; k++){
                arrayTemp.push(arr[k]);
                somaDoSubArray += arr[k]
            }
            if (somaDoSubArray > maiorSoma){
                maiorSoma = somaDoSubArray;
                maiorSubArray = arrayTemp; 
            }
            Matriz.push(arrayTemp);
        }
    }

    return maiorSoma;
}

//testes para a solção cúbica
//const vetor = [5]  //PASSOU!!
//const vetor = [1, 2, 3, 4, 5] //PASSOU!!   
//const vetor = [-1, -2, -3, -4] //PASSOU!!
//const vetor = [4, -1, 2, 1] 
//const vetor = [2, -8, 3, -2, 4, -10] //PASSOU!!
//const vetor = [1, -3, 2, 1, -1] //PASSOU!!
//const vetor = [1, 2, -2, 5, -1, 4, 12] //PASSOU!!
//const vetor = [0, 0, 0, 0] //PASSOU!!
//const vetor = [3, -1, -1, -1, 5] //PASSOU!!
//const vetor = [8, -19, 5, -4, 20] //PASSOU!!
//const vetor = [2, 3, -6, 4, 2, -1, 2, -1] //PASSOU!!
//const vetor = [-2, -3, 4, -1, -2, 1, 5, -3]//PASSOU!!
//const vetor = [100, -90, 50, -60, 70] //PASSOU!!
//const vetor = [1, -1, 1, -1, 1, -1, 10]
//const vetor = [2, 3, 4, -2, -3, 5, -3, 2, 2]//PASSOU!!

function biggerSubarrayVersion02 (arr) {

    let somaMaxima = arr[0];

    for(let i = 0; i < arr.length; i++){   
        let somaParcial = 0;
        for (let j = i; j < arr.length; j++){
        somaParcial += arr[j]
        if (somaParcial > somaMaxima){
            somaMaxima = somaParcial;
        }
        }
    }
    return somaMaxima;
}

//testes para a solção quadrática


//const vetor = [5]                           //1)  Resultado: 5 PASSOU!!
//const vetor = [1, 2, 3, 4, 5]               //2)  Resultado: 15 PASSOU!!   
//const vetor = [-1, -2, -3, -4]              //3)  Resultado: -1 PASSOU!!
//const vetor = [4, -1, 2, 1]                 //4)  Resultado: 6 PASSOU!! 
//const vetor = [2, -8, 3, -2, 4, -10]        //5)  Resultado: 5 PASSOU!!
//const vetor = [1, -3, 2, 1, -1] //8)        //6)  Resultado: 3 PASSOU!!
//const vetor = [1, 2, -2, 5, -1, 4, 12]      //7)  Resultado: 21 PASSOU!!
//const vetor = [0, 0, 0, 0]                  //8)  Resultado: 0 PASSOU!!
//const vetor = [3, -1, -1, -1, 5]            //9)  Resultado: 5 PASSOU!!
//const vetor = [8, -19, 5, -4, 20]           //10) Resultado: 21 ASSOU!!
//const vetor = [2, 3, -6, 4, 2, -1, 2, -1]   //11) Resultado: 7 PASSOU!!
//const vetor = [-2, -3, 4, -1, -2, 1, 5, -3] //12) Resultado: 7 PASSOU!!
//const vetor = [100, -90, 50, -60, 70]       //13) Resultado: 100 PASSOU!!
//const vetor = [1, -1, 1, -1, 1, -1, 10]     //14) Resultado: 10 PASSOU!!
//const vetor = [2, 3, 4, -2, -3, 5, -3, 2, 2]//15) Resultado: 10 PASSOU!!

//Solução linear Aloritmo de Kadane
function biggerSubarrayVersion03 (arr) {
//somaMaxima = -1
    return somaMaxima;
}

const vetor = [5]                           //1)  Resultado: 5 PASSOU!!
//const vetor = [1, 2, 3, 4, 5]               //2)  Resultado: 15 PASSOU!!   
//const vetor = [-1, -2, -3, -4]              //3)  Resultado: -1 PASSOU!!
//const vetor = [4, -1, 2, 1]                 //4)  Resultado: 6 PASSOU!! 
//const vetor = [2, -8, 3, -2, 4, -10]        //5)  Resultado: 5 PASSOU!!
//const vetor = [1, -3, 2, 1, -1] //8)        //6)  Resultado: 3 PASSOU!!
//const vetor = [1, 2, -2, 5, -1, 4, 12]      //7)  Resultado: 21 PASSOU!!
//const vetor = [0, 0, 0, 0]                  //8)  Resultado: 0 PASSOU!!
//const vetor = [3, -1, -1, -1, 5]            //9)  Resultado: 5 PASSOU!!
//const vetor = [8, -19, 5, -4, 20]           //10) Resultado: 21 ASSOU!!
//const vetor = [2, 3, -6, 4, 2, -1, 2, -1]   //11) Resultado: 7 PASSOU!!
//const vetor = [-2, -3, 4, -1, -2, 1, 5, -3] //12) Resultado: 7 PASSOU!!
//const vetor = [100, -90, 50, -60, 70]       //13) Resultado: 100 PASSOU!!
//const vetor = [1, -1, 1, -1, 1, -1, 10]     //14) Resultado: 10 PASSOU!!
//const vetor = [2, 3, 4, -2, -3, 5, -3, 2, 2]//15) Resultado: 10 PASSOU!!

//const vetor = [1,-2,3,-50,5,6] //Resultado: 11

console.log(biggerSubarrayVersion03(vetor));


