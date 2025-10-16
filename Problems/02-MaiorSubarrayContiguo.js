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
const vetor = [1,-2,3,-50,5,6]


//testes
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


//21 subarrays
console.log(biggerSubarrayVersion01(vetor));
