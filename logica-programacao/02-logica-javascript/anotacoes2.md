## Estruturas condicionais com else

A estrutura `else` é usada junto com `if` para executar um bloco de código alternativo quando a condição do `if` não é verdadeira.

Isso permite que o programa tome decisões diferentes dependendo do resultado de uma condição.

### Exemplo

```javascript
let pontuacao = 80;

if (pontuacao >= 100) {
    alert("Parabéns, você venceu!");
} else {
    alert("Infelizmente, você não atingiu a pontuação necessária.");
}

---

// Concatenação de textos

// Concatenação é o processo de juntar textos e variáveis em uma única mensagem.
// Isso pode ser feito utilizando o operador +.

let nome = "Igor";

alert("Olá, " + nome + "! Bem-vindo ao jogo.");

---

// Template Strings

// Uma forma mais moderna e legível de juntar textos e variáveis é utilizando template strings.
// Elas usam crase ( ` ) em vez de aspas.

let nome = "Igor";

alert(`Olá, ${nome}! Bem-vindo ao jogo.`);

// Vantagens das template strings:
// - código mais organizado
// - melhor leitura
// - facilita incluir variáveis dentro do texto

---

// console.log()

// O console.log() é usado para mostrar informações no console do navegador.
// Ele é muito utilizado para testar o código e encontrar erros durante o desenvolvimento.

let pontuacao = 120;

console.log("Pontuação atual:", pontuacao);

//Para ver a mensagem, é necessário abrir o console do navegador.

---

