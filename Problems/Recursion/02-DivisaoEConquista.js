// 1. Crio um array de arrays. Uma matriz (todos vazios)
// 2. Armazeno todas as possibilidades dentro desta matriz, cada array dentro dela será uma possibilidade 
// 3. Eu chamo uma função que retorna a soma do subarray
// 4. Essas possibilidades são criadas por um append dos elementos do array base nesses arrays da Matriz.



function maiorSubArray (vetor) {
    
    const MatrizBase = [];
    
    //Os próximos laços armazenam na Matriz base todos os arrays que representam todas as possibilidades de subarrays possíveis

    //Pega todos os Números da esquerda para a direita
    for (let i = 0; i < vetor.length; i++){
        let arrayTemp = [];
        for (let j = 0; j <= i; j++){
        arrayTemp.push(vetor[j])    
        }
        MatrizBase.push(arrayTemp);
        }

    //Pega todas as possibilidades de array da direita para a esquerda excluindo o array completo que já foi mapeada pelo for anterior
    for (let i = vetor.length - 1; i >= 1; i--){
        let arrayTemp = [];
        for (let j = vetor.length - 1; j >= i; j--){
            arrayTemp.push(vetor[j]);
        }
        MatrizBase.push(arrayTemp);
    }

    // Agora um laço para pegar os sub arrays do meio





    return MatrizBase;
}
const vetorr = [1, 2, -2, 5, -1, 4, 12]
console.log(maiorSubArray(vetorr));