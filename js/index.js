const bau1 = document.getElementById("bau1");
const bau2 = document.getElementById("bau2");
const bau3 = document.getElementById("bau3");
const btnJogarNovamente = document.getElementById("jogarNovamente");
const mensagem = document.getElementById("mensagem");
const elTentativas = document.getElementById("tentativas");
const elVitorias = document.getElementById("vitorias");

let tentativas = 0;
let vitorias = 0;
let cofrePremiado = 0;

function iniciarJogo() {
    cofrePremiado = Math.floor(Math.random() * 3) + 1;
    
    mensagem.textContent = "Escolha um baú!";
}

function escolherCofre(numero) {
    tentativas++;

    if (numero === cofrePremiado) {
        vitorias++;
        mensagem.textContent = "Você abriu o cofre " + numero + " e ganhou!";
    } else {
        mensagem.textContent = "Você abriu o cofre " + numero + " e estava vazio! O prêmio estava no " + cofrePremiado + ".";
    }

    elTentativas.textContent = "Tentativas: " + tentativas;
    elVitorias.textContent = "Vitórias: " + vitorias;

     btnJogarNovamente.style.display = "inline-block";
}

bau1.addEventListener("click", function() { escolherCofre(1); });
bau2.addEventListener("click", function() { escolherCofre(2); });
bau3.addEventListener("click", function() { escolherCofre(3); });

btnJogarNovamente.addEventListener("click", iniciarJogo);

iniciarJogo();