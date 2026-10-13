// Arrays
// let nomes = ["Ana Paula","Ana","Ricardo Vieira Santana","Pedro","Joana","Evandro","Ana Cássia"];

// push, pop, unshift e shift

// filter
// let nomePesquisa = prompt("Digite o nme a pesquisar:");

// let listaFiltrada = nomes.filter( nome =>
// nome.toLowerCase().includes(nomePesquisa.toLowerCase())
// );

// console.log(listaFiltrada);

// let listaNomes = ["Miguel Ângelo","Maria Eduarda","João Pedro","Ana Clara","pedro Henrique","Maria Alice","Luiz Felipe","Ana Júlia","João Miguel","Maria Cecília"];
// let filtrarLista = prompt("Digite o nome a pesquisar: ");
// let pesquisarNome = listaNomes.filter( listaNomes =>
// listaNomes.toLowerCase() === filtrarLista.toLowerCase().trim()
// );
// console.log(pesquisarNome);

let numeros = [1, 2, 3, 4, , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let numeroFiltra = numeros.filter( numeros =>  
numeros % 2 === 0
);
console.log(numeroFiltra);
