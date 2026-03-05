//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

alert('Olá Mundo')
let dia = prompt('Qual é o dia da semana?');
if (dia === 'Sábado' || dia === 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!')
}

---

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numero = prompt('Digite um número positivo ou negativo');

if (numero > 0) {
    alert('Número positivo!');
} else if (numero < 0) {
    alert('Número negativo!');
} else {
    alert('O número é zero.');
}

---

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let mensagemDeBoasVindas = ('Seja bem vindo ao jogo!')
alert (mensagemDeBoasVindas);

let nomeDoJogador = prompt('Qual seu usuario?');
alert ('Olá, ' +nomeDoJogador + '! Vamos dar inicio ao jogo!');

let pontuação = 0

pontuação = (prompt('Qual a sua pontuação?')); 
     if (pontuação >= 100) {
    alert ('Parabéns, você venceu!');
       console.log('Você conseguiu adquirir a pontuação para vencer!');
     } else  {
    alert ('Infelizmente, você perdeu! Tente novamente!');
    console.log ('Você não atingiu a pontuação minima.');
}

---

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

alert ('Bem vindo ao banco!')

let nomeDoCliente = prompt ('Informe seu nome:')
alert ('Olá ' + nomeDoCliente + ', é um prazer ter você de volta!');

let saldo = ('R$ 1.350,00')

let verSaldo = prompt ('Deseja ver seu saldo? Responda com Sim ou Não.')
if (verSaldo === 'Sim') {
    alert ('Seu saldo é: ' +saldo)
} else if (verSaldo === 'Não') {
    alert ('Tudo bem, ' + nomeDoCliente + '. Estaremos te aguardando!')
}

---

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt('Olá, registre seu nome á baixo.')
alert('Bem vindo, ' + nome + '!');
