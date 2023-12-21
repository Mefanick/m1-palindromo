function isPalindrome(str){
    /* Seu código aqui */
    function incrementTextBackwards(palavra) {
        let contagem = palavra.length - 1;
        let increment = "";
        for (let i = contagem; i >= 0; i--) {
            increment = increment + palavra[i]
        }     
        return increment;
    }
    let palavraSemEspacos = str.replace(/ /gi, '');
    let palavraAoContrario = incrementTextBackwards(palavraSemEspacos).toLowerCase();
    let palavraNormal = palavraSemEspacos.toLowerCase();
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
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < menorArray){
            menorArray = arr[i]
        }
    }
    let arrayFinal = [menorArray, maiorArray];
    return arrayFinal;
}
