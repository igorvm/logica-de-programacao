## O que é lógica de programação?

Lógica de programação é a capacidade de organizar e estruturar ideias para resolver problemas usando etapas claras e bem definidas.

Antes de escrever código, é necessário pensar como o computador executará as instruções: passo a passo, seguindo uma sequência lógica.

Essa sequência de passos para resolver um problema é chamada de **algoritmo**.

## Por que aprender lógica de programação?

A lógica é a base do raciocínio computacional.  
Ela ajuda a:

- entender problemas
- planejar soluções
- dividir tarefas em etapas executáveis

Dominar lógica facilita o aprendizado de qualquer linguagem de programação no futuro.

## Ideia principal

Programar não é apenas escrever código, mas **pensar de forma estruturada para resolver problemas**.

--

## O que é uma linguagem de programação?

Computadores não entendem idiomas humanos; eles operam em código binário (0 e 1).  
As **linguagens de programação** servem como intermediárias, permitindo que escrevamos instruções que o computador possa interpretar e executar.

Elas são formadas por palavras, símbolos e regras que definem como o programa deve funcionar.

Durante o aprendizado é normal encontrar erros e bugs. Programar também envolve pesquisar soluções, ler documentação e resolver problemas.

## JavaScript no curso

Neste curso será utilizada a linguagem **JavaScript** porque:

- é uma das linguagens mais populares do mundo
- funciona diretamente no navegador
- permite ver resultados rapidamente
- é uma ótima porta de entrada para desenvolvimento web e lógica de programação

---

## Preparando o ambiente de desenvolvimento

- Preparei o ambiente de desenvolvimento instalando o **Visual Studio Code** para criar programas utilizando **JavaScript**.
- Aprendi o conceito de **variáveis**, que servem para guardar informações (como números ou palavras) para serem usadas depois no programa.
- Utilizei **alert()** para exibir mensagens na tela e **prompt()** para interagir com o usuário, permitindo inserir informações que ficam armazenadas em variáveis.
- Aprendi a usar **if**, que é uma estrutura condicional que permite ao programa tomar decisões executando um bloco de código apenas quando uma condição é verdadeira.

---

# Conceitos aprendidos em JavaScript

## alert()

A função `alert()` exibe uma mensagem em forma de alerta no navegador.

```javascript
alert("Bem-vindo ao nosso site!");

---

## Variáveis
# Variáveis são usadas para armazenar informações que podem ser utilizadas posteriormente no programa.

let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

---

## prompt()
A função prompt() permite solicitar uma informação ao usuário através de uma caixa de diálogo.
O valor digitado pelo usuário pode ser armazenado em uma variável.

let nomeUsuario = prompt("Qual é o seu nome?");

---

#condições (if)
A estrutura if permite executar um bloco de código apenas quando uma condição for verdadeira.

let idade = prompt("Qual é a sua idade?");

if (idade >= 18) {
    alert("Pode tirar a habilitação!");
}

---

#condições (else)
O else é usado quando queremos executar outro bloco de código caso a condição do if não seja verdadeira.

let idade = prompt("Qual é a sua idade?");

if (idade >= 18) {
    alert("Pode tirar a habilitação!");
} else {
    alert("Você ainda não pode tirar a habilitação.");
}

---