// Média Aritmética Simples: Pode ser calculada somando todos os valores e dividindo o total da soma pela quantidade de valores.

function sum(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0) / numbers.length;
}
console.log("A média aritmetica é " + sum(1, 1, 3, 5));

//Média Aritmética Ponderada: Semelhante à média aritmética simples, porém é possível atribuir um peso a cada valor informado, fazendo com que ele tenha um valor proporcionalmente diferente dos outros. Pode ser calculada somando as multiplicações dos valores pelos seus respectivos pesos e dividindo o total pela soma dos pesos.
/*Exemplo
// n -> número, p -> peso
mediaPonderada({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 }) === 7.75
// porque
(7 * 2) + (9 * 5) + (3 * 1) === 62
// e
62 / (2 + 5 + 1) === 7.75*/

const weightedAverage = (...entries) => {
  const sum = entries.reduce(
    (accum, { number, weight }) => accum + number * weight,
    0
  );
  const weightSum = entries.reduce((accum, entry) => accum + entry.weight, 0);
  return sum / weightSum;
};
console.log(
  `Media ponderada ${weightedAverage(
    { number: 9, weight: 3 },
    { number: 7, weight: 1 },
    { number: 10, weight: 1 }
  )}`
);

// - **Mediana:** Pode ser calculada encontrando o valor central de uma sequência de números crescente ou decrescente. Caso existam dois números centrais, a mediana é calculada através da média aritmética simples desses dois números.
// Logica https://acervolima.com/como-obter-a-mediana-de-uma-matriz-de-numeros-em-javascript/
arr = [4, 5, 6, 3, 7, 8];
if (arr.length % 2 == 0) {
  console.log(arr);
  var arrCont = arr.length / 2;
  var selecionados1 = arr.slice(arrCont - 1, -(arrCont - 1));
  var mediana = selecionados1[0] + selecionados1[1];
  console.log("A mediana de: " + selecionados1 + " é: " + mediana);
} else {
  var arrCont = Math.floor(arr.length / 2);
  console.log(arrCont);
  var selecionados = arr.slice(arrCont, -arrCont);
  console.log("A mediana é " + selecionados);
}

//Moda: Pode ser calculada encontrando o valor que mais se repete em um dado conjunto.

// ['1', '2', '2', '2', '3', '3', '3', '3', '4', '5']

const mode = (...numbers) => {
  const quantities = numbers.map((num) => [
    num,
    numbers.filter((n) => num === n).length,
  ]);
  quantities.sort((a, b) => b[1] - a[1]);
  return quantities[0][0];
};
console.log(`moda: ${mode(2, 1, 2, 2, 3, 4, 3, 3, 3, 5)}`);
