function isPalindrome(str){
    /* Seu código aqui */
    let contagem = str.length - 1;
    let increment = "";
    for (let i = contagem; i >= 0; i--) {
        increment = increment + str[i]
    }
    let palavraAoContrario = increment.replace(/ /gi, '').toLowerCase();
    let palavraNormal = str.replace(/ /gi, '').toLowerCase();
    if(palavraNormal === palavraAoContrario){
        return true;
    } else {
        return false;
    }
}
function arrayMaxMin(arr){
    /* Seu código aqui */
    let maiorArray = arr[0] -1;
    let menorArray = arr[0] +1;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > maiorArray){
            maiorArray = arr[i]
        }
        if(arr[i] < menorArray){
            menorArray = arr[i]
        }
    }
    let arrayFinal = [menorArray, maiorArray];
    return arrayFinal;
}
