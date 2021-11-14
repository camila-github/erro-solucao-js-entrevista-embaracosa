## Exercicio - Entrevista embaraçosa (Remover caracter repetido)

O exercicio publicado é referente ao treinamento do BOOTCAMP - Desenvolvedor NodeJS -  Solução de problemas com JavaScript.
[https://digitalinnovation.one](https://digitalinnovation.one)


#### Descrição do Desafio:

A nutricionista Juliana Alcantra é uma excelente profissional de sua área. Em determinado dia, ela foi entrevistada ao vivo para um jornal da cidade. No entanto, ficou um pouco nervosa na hora, e diante da situação, sua fala ficou um pouco distorcida, repetindo o final de cada palavra após dizer a mesma. Para que isso não aconteça novamente, ela precisa da sua ajuda para escrever um programa que omita a parte repetida, de modo que as palavras sejam pronunciadas como deveriam ser.

Escreva um programa que, dada uma palavra errada, a mesma seja corrigida.


#### Entrada:

Haverá diversos casos de teste. Cada caso de teste é formado por uma palavra, de, no máximo, 30 caracteres, dita da forma errada. A entrada termina com fim de arquivo.


#### Saída:

Para cada caso de teste, escreva a palavra devidamente corrigida. Analise os exemplos para verificar o padrão, de modo a consertar todos os casos.

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
sanduicheiche | sanduiche
barrilarril | barril
ratoato | rato
sol | sol
coliseueu | coliseu
queijoijo | queijo
astroastro | astro
a | a



```javascript
//SOLUCAO 1
const saidaDeDados = (str) => {
    /*A função verificarCaracterRepetido() receberá a string em array (str.split(''))
    e a mesma string em formato original (str)*/
    let saidaDados = verificarCaracterRepetido(str.split(''), str);
    for(let index = saidaDados.length - 1; index >= 0; index--) console.log(saidaDados[index]);
}

const verificarCaracterRepetido = (arrCaracter, strOriginal) => {
  let strSaida = [];
  let strNaoRepetida = -1;
  let i = 0;
  /*o array 'arrCaracter' será armazenado em outro array 'procura', porem terá uma posição a menos.
  Alem disso o tamanho do array 'arrCaracter' -1, será armazenado na variavel 'i', para ser 
  usado para capturar a subtring da string original 'strOriginal'*/
  let procura = arrCaracter[i = arrCaracter.length - 1];
  /*No 'while' será comparado um caracter por vez, a leitura será feita em ordem decrescente*/
  while (true) {
      if ((i - procura.length) >= 0) {
        /*strOriginal.substring(i - procura.length, i): será capturado apenas um caracter, começando 
        na posição decrescente, e será comparando com o caracter que esta na variavel 'procura' */
        /*se a condição for verdadeira, será armazendo no array 'strSaida', a substring que foi localizada*/
        if ((strOriginal.substring(i - procura.length, i)) == procura) strSaida.push(strOriginal.substring(0, strNaoRepetida = i));
        /*a variavel 'i' tera decremento, e enquanto a variavel 'i' for maior que 0,
        será armazendo na variavel 'procura' o valor do array 'arrCaracter[i]' + 'procura'*/
        if (i-- >= 0) procura = arrCaracter[i] + procura;
      } else {
        /*Se a condição acima nao for executada, o 'while', será interrompido com um 'break'.*/
        break;
      }
  }
  /*Se nenhuma condição dentro do while, ocorrer, então a string nao tem palavra repetida,
  será armazenado na 'strSaida' a string original*/
  if (strNaoRepetida == -1) strSaida.push(strOriginal);
  
  return strSaida;
}
/*Entrada de dados ocorrerá pelo (gets()), a cada leitura da entrada (string) será chamada a função*/
(function entradaDeDados(str){
  while(str !== "") {
      saidaDeDados(str);
      str = gets();
  }
})(gets());



//SOLUCAO 2
/*A cada leitura da entrada (string) será chamada a função main()*/
while ((leitura = gets()) !== "") main(leitura);

function main(str) {
    /*A função verificarCaracter() receberá a string em array (str.split(''))
    e a mesma string em formato original (str)*/
    saida = verificarCaracter(str.split(''), str);
    for (index = saida.length - 1; index >= 0; index--) console.log(saida[index]);
}

function verificarCaracter(arrCaracter, strOriginal) {
    strSaida = [];
    strNaoRepetida = -1;
    /*o array 'arrCaracter' será armazenado em outro array, porem terá uma posição a menos.
    Alem disso o tamanho do array 'arrCaracter' -1, será armazedo na variavel i, para ser 
    usado para capturar a subtring da string original 'strOriginal'*/
    procura = arrCaracter[i = arrCaracter.length - 1];
    /*No 'while' será comparado um caracter por vez, a leitura será feita em ordem decrescente*/
    while (true) {
        if ((i - procura.length) >= 0) {
            /*strOriginal.substring(i - procura.length, i): será capturado apenas um caracter, começando 
            na posição decrescente, e será comparando com o caracter que esta na variavel 'procura' */
            /*se a condição for verdadeira, será armazendo no array 'strSaida', a substring que foi localizada*/
            if ((strOriginal.substring(i - procura.length, i)) == procura) strSaida.push(strOriginal.substring(0, strNaoRepetida = i));
            /*a variavel 'i' tera decremento, e enquanto a variavel 'i' for maior que 0,
            será armazendo na variavel 'procura' o valor do array 'arrCaracter[i]' + 'procura'*/
            if (i-- >= 0) procura = arrCaracter[i] + procura;
        } else {
            /*Se a condição acima nao for verificada, o 'while', será interrompido com um 'break'.*/
            break;
        }
    }
    /*Se nenhuma condição dentro do while, ocorrer, então a string nao tem palavra repetida,
    será armazenado na 'strSaida' a string original*/
    if (strNaoRepetida == -1) strSaida.push(strOriginal);

    return strSaida;
}
```
