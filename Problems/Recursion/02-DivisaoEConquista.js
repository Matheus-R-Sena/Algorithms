//This method to solve this problem trying to cover all of the possibilities by using
//loops is not efficient, Let's make the recursion method



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
    let indice_meio1;
    let indice_meio2;

    //Para o caso do Array ser Impar
    if (vetor.length % 2 === 0){
        indice_meio1 = (vetor / 2) - 1;
        indice_meio2 = vetor /2;

        //Adicionando os elementos do meio como possibilidade
        let arrayTemp = [indice_meio1, indice_meio2];
        MatrizBase.push(arrayTemp);

        //Percorrendo o lado esquerdo até o meio já foi mapeado

        //Percorrendo o meio até o lado esquerdo

        for (let i = indice_meio1; i >= 0; i--){
            const arrayTemp = [];
            for (let j = indice_meio1; j >= i; j--){
            arrayTemp.push(vetor[j]);
            }
            MatrizBase.push(arrayTemp);  
        }
        //Percorrendo o meio até o lado direito, this scope is covered by the second for in the algorithm

        //Percorrendo o meio até o right side

        for (let i = indice_meio2; i <= (vetor.length + 1); i++){
            let arrayTemp = [];
            for (let j = indice_meio2; j <= i; j++){
                arrayTemp.push(vetor[j]);
            }
            MatrizBase.push(arrayTemp);
        }

    }




    return MatrizBase;
}
const vetorr = [1, 2, -2, 5, -1, 4, 12]
console.log(maiorSubArray(vetorr));