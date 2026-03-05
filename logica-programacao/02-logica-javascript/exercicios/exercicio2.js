alert('Boas vindas ao jogo do número secreto');

// Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
let chute = prompt('Escolha um número entre 1 e 10');
console.log('Valor do chute:', chute);

let numeroSecreto = 4;

// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"

if (chute == numeroSecreto) {
    alert('Acertou');
    console.log('Resultado: Você tentou ' + chute + ' e o correto era ' + numeroSecreto);

} else {
    // Adicione um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
    alert('O número secreto era ' + numeroSecreto);
    console.log('Número secreto:', numeroSecreto);
}