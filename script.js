function soma(a, b) {
  return a + b;
}

let num1 = 4;
let num2 = 7;

let resultSoma = soma(num1, num2);

console.log(resultSoma);

let array = [];

array[0] = "amarelo";
array[1] = 3;

console.log(array);

let numeros = [
  [2, 4, 6, 3],
  [2, 6, 8, 9],
];

function somaPar(listNumber) {
  for (let linha = 0; linha < listNumber.length; linha += 1) {
    for (let coluna = 0; coluna < listNumber[linha].length; coluna++) {
      console.log(listNumber[linha][coluna]);
    }
  }
}

console.log(somaPar(numeros));

console.log(numeros[0][2]);
