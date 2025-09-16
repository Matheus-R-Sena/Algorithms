// 1. Crio um array de arrays. Uma matriz (todos vazios)
// 2. Armazeno todas as possibilidades dentro desta matriz, cada array dentro dela será uma possibilidade 
// 3. Eu chamo uma função que retorna a soma do subarray
// 4. Essas possibilidades são criadas por um append dos elementos do array base nesses arrays da Matriz.



function maiorSubArray (vetor) {
    
    const MatrizBase = [];
    
    for (let i = 0; i < vetor.length; i++){
        const arrayTemp = [];
        arrayTemp.push(vetor[i]);
        MatrizBase.push(arrayTemp);
    }
    
    
    
    let soma = 0;
    let MaiorSubArr = [];
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] > 0){
            if (MaiorSubArr.length === 0){
                MaiorSubArr.push(vetor[i]);
            } else if (vetor[i-1] > 0 ){

            }
        }
    }

    return maior 
}