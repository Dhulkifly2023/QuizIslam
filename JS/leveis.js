const question = [
    {
        questao: "Quem foi o último profeta",
        resposta: [
            { text: "Taha", correct: false },
            { text: "Muhammadd", correct: true },
            { text: "HARUNA", correct: false },
            { text: "Mussa", correct: false },
        ],
        explicacao: "Muhammadd é considerado o último profeta no Islã."
    },

    {
        questao: "QuaNTOS DELES deles pertence ao Uluzázm",
        resposta: [
            { text: "dhulkifly", correct: false },
            { text: "ibrahim", correct: true },
        ],
        explicacao: "Explicação da segunda pergunta."
    },
    {
        questao: "Q deles pertence ao Uluzázm",
        resposta: [
            { text: "dhulkifly", correct: false },
            { text: "ibrahim", correct: true },
        ],
        explicacao: "Explicação da segunda pergunta."
    }
];


const questaoElement = document.getElementById("questao");
const botaoDeresposta = document.getElementById("botoes-respostas");
const botaoSeguir = document.getElementById("seguinte-btn");
const pontuacaoElement = document.getElementById("pontos");
const pontosFinalElement = document.getElementById("pontos-final");
let respostaPerguntaElement;

let currentQuestaoIndice = 0;
let pontos = 0;

const totalQuestoes = question.length;

function iniciarQuiz() {

    for (let i = question.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [question[i], question[j]] = [question[j], question[i]];
    }

    currentQuestaoIndice = 0;
    pontos = 0;
    botaoSeguir.disabled = true;
    pontuacaoElement.textContent = "Pontuação: 0";
    mostrarQuestao();
    document.getElementById("numero-total-questoes").textContent = `(${totalQuestoes})`;
}


function mostrarQuestao() {
    botaoSeguir.disabled = true;
    botaoDeresposta.innerHTML = '';
    let currentQuestao = question[currentQuestaoIndice];
    let questaoNo = currentQuestaoIndice + 1;
    questaoElement.innerHTML = questaoNo + ". " + currentQuestao.questao;
    document.getElementById("numero-total-questoes").textContent = `(${questaoNo}/${totalQuestoes})`;

    currentQuestao.resposta.forEach((resposta, index) => {
        const button = document.createElement("button");
        button.innerHTML = resposta.text;
        button.classList.add("btn");
        button.addEventListener("click", function () {
            verificarResposta(index);
        });
        botaoDeresposta.appendChild(button);
    });
   
}

function verificarResposta(index) {
    const respostas = question[currentQuestaoIndice].resposta;

    for (let i = 0; i < respostas.length; i++) {
        const button = botaoDeresposta.children[i];

        if (i === index) {
            if (respostas[i].correct) {
             button.style.backgroundColor="#22f53e";
                
            } else {
                button.style.backgroundColor = "rgb(253, 57, 57)"; 
            
            }
        } else if (respostas[i].correct) {
           
            button.style.backgroundColor = "rgb(4, 255, 4)";
        } else {
           
            button.style.display = "none";
        }
    }

    mostrarExplicacao(question[currentQuestaoIndice].explicacao);

    if (respostas[index].correct) {
        pontos++;
        pontuacaoElement.textContent = "Pontuação: " + pontos;
    }

    botaoSeguir.disabled = false;
}


function mostrarExplicacao(explicacao) {
    const explicacaoDiv = document.getElementById("explicacao");
    explicacaoDiv.textContent = explicacao;

    const respostaDiv = document.querySelector(".resposta-da-pergunta");
    respostaDiv.style.display = "block";
    respostaDiv.classList.add("com-borda");
}


function limparExplicacao() {
    const respostaDiv = document.querySelector(".resposta-da-pergunta");
    respostaDiv.style.display = "none";
    respostaDiv.classList.remove("com-borda");
    document.getElementById("explicacao").textContent = "";
}
function mostrarProximaQuestao() {
    currentQuestaoIndice++;
    if (currentQuestaoIndice < totalQuestoes) {
        mostrarQuestao();
        limparExplicacao();
        botaoSeguir.disabled = true;
    } else {
        mostrarPontuacaoFinal();
    }
}


function mostrarPontuacaoFinal() {
    questaoElement.innerHTML = "Quiz concluído!";
    botaoDeresposta.innerHTML = "Pontuação final: " + pontos;
    pontuacaoElement.style.display = "none";
    limparExplicacao();

    const barraProgresso = document.getElementById("barra-progresso");
    const progressoPorcentagem = document.getElementById("progresso-porcentagem");
    const porcentagemCorreta = (pontos / question.length) * 100;

    progressoPorcentagem.style.width = "0";
    progressoPorcentagem.textContent = "0%";
    barraProgresso.style.display = "block";

    const intervalo = 10;
    const incremento = porcentagemCorreta / (1000 / intervalo);

    let larguraAtual = 0;
    const animacaoBarra = setInterval(() => {
        larguraAtual += incremento;
        progressoPorcentagem.style.width = larguraAtual + "%";
        progressoPorcentagem.textContent = larguraAtual.toFixed(2) + "%";

        if (larguraAtual >= porcentagemCorreta) {
            clearInterval(animacaoBarra);
            mostrarBotoesFinais(); // Chamada direta após a animação da barra de progresso
        }
    }, intervalo);
}



function mostrarBotoesFinais() {
    
    const reiniciarBtn = document.getElementById("reiniciar-btn");
    const paginaInicialBtn = document.getElementById("pagina-inicial-btn");
    const quizResultDiv = document.querySelector(".Quiz-result");
    pontosFinalElement.textContent = pontos;

    reiniciarBtn.style.display = "block";
    paginaInicialBtn.style.display = "block";
    quizResultDiv.style.display = "block";
    
    // Ocultar o botão "Seguir" quando estiver na seção de resultados
    botaoSeguir.style.display = "none";
}

function reiniciarQuiz() {
    currentQuestaoIndice = 0;
    pontos = 0;
    botaoSeguir.disabled = true;
    pontuacaoElement.textContent = "Pontuação: 0";
    mostrarQuestao();
    limparExplicacao();
    
    document.querySelector(".Quiz-result").style.display = "none";
    document.getElementById("barra-progresso").style.display = "none";
    botaoSeguir.style.display = "block";
   
}

function voltarPaginaInicial() {
    window.location.href = "index.html";
}
window.reiniciarQuiz=reiniciarQuiz;
window.iniciarQuiz = iniciarQuiz;
window.mostrarProximaQuestao = mostrarProximaQuestao;
window.voltarPaginaInicial=voltarPaginaInicial;