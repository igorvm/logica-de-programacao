let mensagemDeBoasVindas = "Boas vindas ao nosso site!"
alert(mensagemDeBoasVindas);

let mensagemDeErro = "Erro! Preencha todos os campos obrigatórios."
alert (mensagemDeErro);

let nomeUsuario = prompt("Digite seu nome");
let idadeUsuario = prompt("Digite sua idade");
if (idadeUsuario >= 18) {
    alert("Seja bem vindo, " + nomeUsuario + "Voce está liberado para tirar sua habilitação!")
}