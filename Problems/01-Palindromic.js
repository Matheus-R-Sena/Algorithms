
    /*
    |RACECAR| número impar
    0123456 

    RACEECAR número para de caracteres
    01234567

    número de equivalências em uma String

    Para saber se não é um palindrome devemos percorrer até o meio para ter certeza

    Se tivermos uma sequência de equivalências até o meio da string 
    maior do que duas temos uma Palindrome

    hellosannasmith

    */

    //Testing

function palindromic (str) {

    const isPalindrome = (str2) => {
        let left = 0;
        let right = str2.length - 1;
        let isAPalindrome = false;

        //palindrome larger thatn 2 characters
        if (str2 == 2){
            return isAPalindrome;
        }

        while (true){
            
            if(str2[left] == str2[right]){
                isAPalindrome = true;
            } else {
                return false;
            }

            // Odd strings
            if(left == right){
                return isAPalindrome;
            }
            
            // Even numbers
            if(left > right){
                return isAPalindrome
            }

            left++;
            right--;
        }
    }

let palindromeFound = str;
for (let i = 0; i < str.length ; i++){
    //console.log("aqui");
    for (let j = i + 1; j < str.length - 1 ; j++){
        //console.log("aqui");
        if (str[i] == str[j]){
            palindromeFound = str.slice(i, j + 1)
            //console.log(palindromeFound);
            
            if (isPalindrome(palindromeFound)){
               return palindromeFound;
            }
        }

    }
}
return palindromeFound;
}

let word = "abcdefgacag"
console.log(`${word} is ${palindromic(word)}`);

