//SOLUCAO 1
while ((leitura = gets()) !== "") main(leitura);

function main(str) {
    saida = verificarCaracter(str.split(''), str);
    for (index = saida.length - 1; index >= 0; index--) console.log(saida[index]);
}

function verificarCaracter(arrCaracter, strOriginal) {
    strSaida = [];
    strNaoRepetida = -1;
    procura = arrCaracter[i = arrCaracter.length - 1];
    while (true) {
        if ((i - procura.length) >= 0) {
            if ((strOriginal.substring(i - procura.length, i)) == procura) strSaida.push(strOriginal.substring(0, strNaoRepetida = i));
            if (i-- >= 0) procura = arrCaracter[i] + procura;
        } else {
            break;
        }
    }
    if (strNaoRepetida == -1) strSaida.push(strOriginal);
    return strSaida;
}