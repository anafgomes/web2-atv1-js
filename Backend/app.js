const _ = require('lodash');

const numeros = [5, 2, 9, 3, 6, 2, 8, 1, 5, 4, 7];

const numerosOrdenados = _.orderBy(numeros);
const numerosUnicos = _.uniq(numeros);
const numerosPares = _.filter(numeros, (numero) => numero % 2 === 0);
const numerosDobrados = _.map(numeros, (numero) => numero * 2);
const soma = _.sum(numeros);

console.log('Array original:', numeros);
console.log('Array ordenado:', numerosOrdenados);
console.log('Array sem duplicatas:', numerosUnicos);
console.log('Números pares:', numerosPares);
console.log('Números dobrados:', numerosDobrados);
console.log('Soma de todos os elementos:', soma);
