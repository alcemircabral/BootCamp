//---------------ARRAY------------------------
//let lista = ["maçã", "pêra","laranja"];
//lista.pop();
//lista.push("uva");
//console.log(lista.reverse());
//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join(" | "));

//--------------DICIONARIO---------------------
/*
let fruta = {nome: "maçã", cor: "vermelha"} //Objeto JSON
console.log(fruta.nome);
alert(fruta.cor);


//-------------LISTA DE DICIONARIO--------------

let frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);
alert(frutas[0].nome);

*/

//-------------CONDICIONAIS LAÇOS DE REPETIÇAÕ E DATE --------------

/*
let idade = prompt("Qual sua idade?");

if (idade >= 18){
    alert("Maior de idade");
}else {
    alert("menor de idade");
}
*/

/*
let count = 0;
while (count <= 5){
    console.log(count);
    alert(count)
    count++;
};
*/

/*
let count;
for(count = 1; count <= 5; count++){
    alert(count);
    console.log(count);
};
*/

/*
let d = new Date();
alert(d.getMinutes());
alert(d.getMonth()+1);
console.log(d.getMonth()+1);
*/

// --------Desenvolva páginas web com JavaScript-------

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
function soma(n1, n2){
    return n1 + n2; 
}
alert(soma(5, 10));
*/

// ----- Variável local ---------
/*
function validaIdade(idade){
    let validar; // Variável local (só funcionar aqui dentro)
    if (idade >= 18){
        validar = true
    }else {
        validar = false
    }
    return validar;
}
let idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

// ----- Variável Global ---------

/*
let validar = 0;//variável global - fora da função - pode ser usada em outras funções.

function validaIdade(idade){
    //validar; // camada que linka com a variável fora da função
    if (idade >= 18){
        validar = true
    }else {
        validar = false
    }
    return validar;
}
let idade = prompt("Qual sua idade?");
validaIdade(idade);
console.log(validar); // o console.log está usando a variável fora da função.
*/

// -------- Manipulando elementos da página---------------------

function load(){
    alert("Página carregada");
}

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar");
}

function redirecionar(){
    //window.open("http://labglobal.com.br/");
    window.location.href = "http://labglobal.com.br/";
}

function trocar (elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
