//Referências
var tituloLivro = document.querySelector('#assunto h2');
var inputLivro = document.querySelector('input[name=assunto]');
var botaoAssunto = document.querySelector('#assunto button');
var listaLivro = document.querySelector('#livros li');
var inputLivro = document.querySelector('#literatura input');
var botaoLivro = document.querySelector('#literatura button');

//Variáveis que vão armazenar os dados
var assunto = localStorage.getItem('assunto') || '';
tituloLivro.innerText = assunto;
var livros = JSON.parse(localStorage.getItem('literatura')) || '';

//função para exibir os livros na lista
function montarListaLivros(){

    listaLivro.innerHTML = '';

    livros.forEach(function(livro, posicao){

        var li = document.createElement('li');
        li.appendChild(document.createTextNode(livro));

        var linkExcluir = document.createElement('a');
        linkExcluir.setAttribute('href', '#');
        linkExcluir.appendChild(document.createTextNode('Remover'));

        linkExcluir.addEventListener('click', function(){
            event.preventDefault();
            removerLivro(posicao);

        });

        li.appendChild(linkExcluir);



        listaLivros.appendChild(li);
    });
}

function removerLivro(posicao){
    livros.splice(posicao, 1)
    montarListaLivros();
    salvarNoArmazenamentoLocal();
}

function salvarNoArmazenamentoLocal(){
    localStorage.setItem('assunto', assunto);
    localStorage.setItem('livros', JSON.stringify(livros));

}

//Chamando a função
montarListaLivros();


//Evento no botão de assunto
botaoAssunto.addEventListener('click', function(){
    assunto= inputLivro.value;
    tituloLivro.innerText = assunto;
    inputLivro.value = '';
    salvarNoArmazenamentoLocal();

})

//Evento no botão de livro
botaoLivros.addEventListener('click', function(){
    var livros = inputLivro.value;
    livros.push(livro);
    inputLivro.value = '';
    montarListaLivros();
    salvarNoArmazenamentoLocal();
    
})