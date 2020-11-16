//Pelo id
//var inputNum1= document.getElementById('num1')
//console.log(num1);

//Pelo nome da tag
//var inputs= document.getElementsByTagName('input')
//console.log(inputs)
//var inputNum1 = inputs[0]
//console.log(inputNum1)

// Pelo nome da classe
//var inputNum1 = document.getElementsByClassName('numero')
//console.log(inputNum1);

//Pelo seletor CSS

//var botaoSomar = document.querySelector('button')
//botaoSomar.onclick = function(){
//    var inputNum1= document.querySelector('input[name=num1]')
//    var inputNum2= document.querySelector('#main input + input')
    //pegar o valor de num1
 //   var num1= parseInt (inputNum1.value);


    //pegar o valor de num2
//    var num2= Number (inputNum2.value);

 //   console.log("Soma: " + (num1 + num2));

//}

//botaoSomar.addEventListener('click', function(){
//    var inputNum1= document.querySelector('input[name=num1]')
//    var inputNum2= document.querySelector('#main input + input')
    //pegar o valor de num1
//    var num1= parseInt (inputNum1.value);


    //pegar o valor de num2
//    var num2= Number (inputNum2.value);

 //   console.log("Soma: " + (num1 + num2));

//})

//var paragrafo = document.createElement('p')
//paragrafo.setAttribute('class', 'letra-vermelha')

//var texto = document.createTextNode('Esse é um parágrafo!')

//paragrafo.appendChild(texto)

//var link = document.createElement('a')
//link.setAttribute('href', 'https://www.google.com')
//link.appendChild(document.createTextNode('Google'))

//var divMain =  document.querySelector('div#main')
//divMain.appendChild(paragrafo)
//divMain.appendChild(link)
//
// ES6*Classes
//class Pessoa {
 //   constructor(nome, idade){
  //      this.nome= nome;
  //      this.idade = idade;
  //  }

  //  imprimirDdaos(){
   //     console.log("Imprimindo os dados de Pessoa");
   //     console.log(this.nome);
    //    console.log(this.idade);
  //  }
//}

//var pessoa = new Pessoa('Paulo', '25');

//pessoa.imprimirDdaos();

//ES6 + Const e Let
//let-> Tem escopo de bloco
//function f(){

    //let a variável tem escopo de bloco, não de função

  //  let x = 2;

  //  if(true){
   //     let z = 10;

   //     console.log('x dentro do IF ' + x);
    //    console.log('z dentro do IF ' + z);
    //}

    //console.log('x fora do IF ' + x);
    //console.log('z fora do IF ' + z);

   // for(let i= 0; i <= 5; i++){
    //  let j = 0;
    //}

   //console.log('I fora do for ' + i)
   // console.log('J fora do for ' + j)

//}

//f();

//Const -> também tem escopo de bloco 
//const x = 5; // não podem ter valor reatribuído

//const pessoa = { nome: 'Josi', idade:21};
//console.log(pessoa.nome);
//console.log(pessoa.idade);

//mutar o valor ou mutar o objeto
//pessoa.nome= 'Paulo';
//pessoa.idade = 25;

//console.log(pessoa.nome);
//console.log(pessoa.idade);


//ES6 + Arrow Functions

//const soma = (num1, num2) => num1 + num2;

//const quadrado = numero => Math.pow(numero, 2);



    //console.log(soma(5, 7));
    //console.log(quadrado(9));

//const criarObjeto = () => ({nome: 'Josi'});
//console.log(criarObjeto());

//Primeiro passo : remover a palavra reservada function e acrescentar
//depois dos paraenteses a arrow =>

//Se a função tem no corpo apenas um return de uma linha
//pode tirar as chaves e a palavra return

//Se a função tem apenas 1 parâmetro, pode remover os parenteses

//this dentro do arrow function não funciona da mesma forma de uma função normal.


//ES6 + Operações em Arrays
//Find usado quando queremos procurar uma informação dentro do array

//const arrayNum = [1, 5, 7, 8];

//const encontrado = arrayNum.findIndex(item => item > 5);
//console.log(encontrado);

//Map mapeia todos os elementos do array para outro conjunto de valores
//const arrayNum = [1, 5, 7, 8];

//const arrayDobrado = arrayNum.map(item => item * 2);

//const arrayNumXIndice = arrayNum.map ( (num, indice) => num * indice );
    

//console.log(arrayDobrado)
//console.log(arrayNumXIndice)

//const grausC = [0, 15, 30, 40];
//const grausF = grausC.map(gc => gc * 1.8 + 32);
//console.log(grausF);

//Filter filtra os elementos de um array
//const arrayNum = [1, 5, 7, 8];
//const filtrado = arrayNum.filter( num => num > 5);
//console.log(filtrado)

//Reduce acumula ou concatena os valores do vetor para retornar um único valor
//const arrayNum = [1, 5, 7, 8];
//const soma= arrayNum.reduce( (total, item) => total + item, 0);
                            //função, valor inicial do acumulador
//console.log(soma);

//const compras = [
 //   {mes: 'jan/2020', preco:500},
  //  {mes: 'fev/2020', preco:857},
  //  {mes: 'mar/2020', preco:100.99},
  //  {mes: 'abr/2020', preco:2000.86},

//];
//const totalCompras = compras. reduce( (total, compra) => total +
//compra.preco ,0);
//console.log(totalCompras);

//ES6 + Valores Padrão de Parâmetros
//function cubo(numero = 1){
 //   return Math.pow( numero, 8);
//}

//console.log(cubo(8));
//console.log(cubo());

//ES6 + Desestruturação de objetos
//const empresa = {
 //   nome: 'Tabajara',
  //  cidade: 'Recife',
  //  produtos: {
   //     camisetas:{
    //        tamanhos: ['P', 'M', 'G']
    //    },
     //   bolsas: {
     //       cores: ['Verde', 'Amarelo', 'Azul']
      //  }
    //}
//}
//const{ nome: Empresa, cidade = 'ND', produtos: { camisetas: { tamanhos } } } = empresa;

//console.log(Empresa);
//console.log(cidade);
//console.log(tamanhos);

//function mostrarEmpresa({ nome, cidade}){
  //  console.log(nome);
  //  console.log(cidade);
//}

//const pegarCoresDasBolsas = ({produtos: { bolsas: { cores}}}) => cores;

//chamar a função
//mostrarEmpresa(empresa);
//console.log(pegarCoresDasBolsas(empresa));












