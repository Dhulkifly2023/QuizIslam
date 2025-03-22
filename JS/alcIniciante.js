const question = [
    {
        questao: "Quantos surats existem no Alcorão",
        resposta: [
            { text: "30 surats", correct: false },
            { text: "114 surats", correct: true },
            { text: "121 surats", correct: false },
            { text: "100 surats", correct: false },
        ],
        explicacao: "São 114 surates(Capitulos),Dentre eles 86 foram reveladas em Makka e 28 em Madina"

    },

    {
        questao: "Em quantos Juzes(partes) o alcorão foi dividido",
        resposta: [
            { text: "30", correct: true },
            { text: "26", correct: false },
            { text: "28", correct: false },
            { text: "15", correct: false },
        ],

    },
    {
        questao: "O nome do profeta que o nome da mãe foi mencionado no Alcorão",
        resposta: [
            { text: "Issa (A.S)", correct: true },
            { text: "Ibrahim (A.S)", correct: false },
            { text: "Yaakub (A.S)", correct: false },
            { text: "Muhammadd (S.A.W)", correct: false },
        ],
        explicacao: "Refere-se a Maryam filha de Imran,que é conhecida como Maria mãe de Jesus(A.S),ela foi mencionada no alcorão varias vezes, ao ponto de haver um surat com titulo de nome  (Alcorão-cap.19)"
    },
    {
        questao: "Qual foi o Primeiro surat do Alcorão a ser revelado",
        resposta: [

            { text: "Maryam", correct: false },
            { text: "An-nass", correct: false },
            { text: "At tawbah", correct: false },
            { text: "Al'Alaq", correct: true },


        ],
        explicacao: " O primeiro surat foi Al'Alaq Coágulo (Alcorão-Cap.96) os seus priemiro 5 versiculos,embora al Fatiha seja aquele surata que inaugura o livro sagrado"
    },
    {
        questao: "Qual foi o Primeiro surat do Alcorão a ser revelado em Maddinah",
        resposta: [
            { text: "Al'Alaq", correct: false },
            { text: "Ar-Rahman", correct: false },
            { text: "Al-fatiha", correct: true },
            { text: "Al-kawthar", correct: false },


        ],
        explicacao: "AL'Fatiha foi a primeiro surat a ser reveldo em Madinah diferente de surat Al'Alaq que foi primeiro surat do alcorão revelado em Makka"
    },
    {
        questao: "Qual é o significado da palavra Fatiha, titulo de surat Al'fatiha?",
        resposta: [
            { text: "Paz", correct: false },
            { text: "Abertura", correct: true },
            { text: "Sinceridade", correct: false },
            { text: "Harmonia", correct: false },
        ],

    },
    {
        questao: "Onde ocorreu a primeira revelação do alcorão?",
        resposta: [
            { text: "Caverna de Badr", correct: false },
            { text: "Caverna Hira", correct: true },

        ],
        explicacao: "A primeira revelação do Alcorão ao Profeta Muhammad (que a paz esteja com ele) ocorreu na Caverna Hira,localizada nos suburbios de Makka"
    },
    {
        questao: "Em quais das cidades a Caverna Hira esta localizada",
        resposta: [

            { text: "Makka", correct: true },
            { text: "Madinah", correct: false },
        ],

    },
    {
        questao: "O dia que a primeira revelação foi feita para Muhammad (S.A.W)",
        resposta: [
            { text: "segunda-Feira", correct: false },
            { text: "Terca-Feira", correct: false },
            { text: "Domingo", correct: false },
            { text: "Sexta-Feira", correct: true },

        ],
    },

    {
        questao: "O Alcorão contém factos cientificos?",
        resposta: [
            { text: "Verdade", correct: true },
            { text: "Falso", correct: false },

        ],
        explicacao: "Sim,o alcorão contém tudo,incluindo factos cientificos,é um autentico milagre"
    }, {
        questao: "Qual é O ultimo surat do alcorão",
        resposta: [
            { text: "Al-fatiha", correct: false },
            { text: "An-nass", correct: true },
            { text: "An-nahl", correct: false },
            { text: "Ya-sin", correct: false },

        ],
        explicacao: "An-nass alcorão-cap.114"
    }, {
        questao: "Qual é O maior surat do Alcorão",
        resposta: [

            { text: "An-Burooj", correct: false },
            { text: "An-Nahl", correct: false },
            { text: "Al-Baqara", correct: true },
            { text: "Al-Qalam", correct: false },

        ],
        explicacao: "Surat Al-Baqara( A vaca) que é constituido por 286 versiculos.(alcorão-cap.2)"
    },{
        questao: "Qual é o surat mais curto do Alcorão",
        resposta: [
            { text: "Al-fatiha", correct: false },
            { text: "An-nass", correct: false },
            { text: "Al-kawthar", correct: true},
            { text: "Al-ikhlass", correct: false },

        ],
        explicacao: "Surata Al-kawthar (alcorão-cap.108) constituido por 3 versiculos, e tem a particularidade de nao conter a letra mim"
    },
    {
        questao: "Qual é o surat conhecido por coração do Alcorão?",
        resposta: [
            { text: "An-Naml", correct: false },
            { text: "An-nass", correct: false },
            { text: "Al-kawthar", correct: false},
            { text: "Ya-sin", correct: true },

        ],
    }, {
        questao: "Qual é o surat conhecido por Uruss (noiva) do Alcorão?",
        resposta: [
            { text: "An-Naml", correct: false },
            { text: "Al-Balad", correct: false },
            { text: "Ar-Rahman", correct: true},
            { text: "Ya-sin", correct: false },

        ],
        explicacao: " Profeta (que a paz e as orações de Deus estejam com ele e sua família) ele disse: “Tudo tem uma noiva, e a noiva do Alcorão é a Surah Ar-Rahman, glória a Ele” (Mustadrak Al-Wasa'il: 4/351). Assim, o hadith destaca a elevada posição e importância atribuídas o Surat Ar-Rahman, chamando-a de (a noiva do Alcorão) para enfatizar sua beleza e distinção entre as suratas do Alcorão."
    },
     {
        questao: "Qual é o surat  que possui o versiculo mais longo do Alcorão?",
        resposta: [
            { text: "Al-Baqara", correct: true },
            { text: "Al-Furqan", correct: false },
            { text: "Al-Rahman", correct: false},
            { text: "Ya-sin", correct: false },

        ],
        explicacao: "É o versiculo 282 do surat Al-Baqara"
    },
    {
        questao: "Qual é o surat conhecido por Ummul Kitab (mãe do livro)",
        resposta: [
            { text: "Al-Waquiah", correct: false},
            { text: "Al-Fatiha", correct: true},
            { text: "Az-Zumar", correct: false},
            { text: "Ya-sin", correct: false },

        ],
       
    }
    ,{
        questao: "Quantas vezes o nome do profeta Muhammad(S.A.W) foi mencionado no Alcorão",
        resposta: [
            { text: "4", correct: true},
            { text: "6", correct: false},
            { text: "7", correct: false},
            { text: "9", correct: false },

        ],
    }
    ,{
        questao: "Quantos versiculos foram revelados na primeira revelação (wahi)",
        resposta: [
            { text: "7", correct: false},
            { text: "9", correct: false },
            { text: "5", correct: true},
            { text: "6", correct: false},

        ],
        explicacao: "Foram os 5 primeiros versiculos do surat Al-Alaq (Alcorão-cap.96)"
    }
   
    ,{
        questao: "Quantos surates têm nomes de Animais como titulo",
        resposta: [
            { text: "2", correct: true},
            { text: "3", correct: false },
            { text: "1", correct: false},
            { text: "5", correct: false},

        ],
        explicacao: "Surat Al-Baqara(A Vaca) alcorão-cap.02 e o surat Al-fil (O elefante) alcorão-cap.105 "
    },
    {
        questao: "Qual surat é recomendado para ler na sexta-feira?",
        resposta: [
            { text: "Al-kahf", correct: true},
            { text: "As-Shamss", correct: false },
            { text: "Al-lail", correct: false},
            { text: "At-tur", correct: false},

        ],
        explicacao: "Quem recitar Surah Al Kahf  no dia de sexta-feira terá uma luz para ele entre esta sexta e a próxima” Al Sunan al Kubra – 5856"
    },{
        questao: "Quantos surates têm nomes de Insectos como titulo",
        resposta: [
          
            { text: "2", correct: false },
            { text: "7", correct: false},
            { text: "6", correct: false},
            { text: "3", correct: true},
        ],
        explicacao: "Surat Al-Nahl(A Abelha) alcorão-cap.16,An-Naml(A formiga) alcorão-cap.27 e surat Al-Ankabut (A Aranha) alcorão-cap.29 "
    },{
        questao: "Há Algum surat com nome de um fruto",
        resposta: [
          
            { text: "Verdade", correct: true },
            { text: "Falso", correct: false},
           

        ],
        explicacao: "Sim, O surat At-Tiin(O Figo) alcorão-cap.95, é apenas uma palavra ou uma expressão empregada no surat e que foi escolhido como titulo "
    }
    ,{
        questao: "Qual foi o primeiro versiculo que profeta (S.A.W) foi revelado",
        resposta: [
          
            { text: "Diga,Ele Allah é unico", correct: false },
            { text: "Louvado seja Deus, Senhor do Universo", correct: false },
            { text: "Que tu és dos mensageiros", correct: false },
            { text: "Lê, em nome do Teu Senhor que criou", correct: true},

        ],
        explicacao: "Al-Alaq (Alcorão-cap.96:V01)"
    }


];


const questaoElement = document.getElementById("questao");
const botaoDeresposta = document.getElementById("botoes-respostas");
const botaoSeguir = document.getElementById("seguinte-btn");
const pontuacaoElement = document.getElementById("pontos");
const pontosFinalElement = document.getElementById("pontos-final");
let respostaPerguntaElement;
let incorrectAnswers = 0;
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

function verificarResposta(index) {
    const respostas = question[currentQuestaoIndice].resposta;

    // Desabilitar todos os botões após o usuário clicar em uma opção
    for (let i = 0; i < respostas.length; i++) {
        const button = botaoDeresposta.children[i];
        button.disabled = true;
    }

    for (let i = 0; i < respostas.length; i++) {
        const button = botaoDeresposta.children[i];

        if (i === index) {
            if (respostas[i].correct) {
                button.style.backgroundColor = "#22f53e";
            } else {
                button.style.backgroundColor = "rgb(253, 57, 57)";
                incorrectAnswers++;
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
            botaoSeguir.disabled = false;
        });
        botaoDeresposta.appendChild(button);
    });
}

function mostrarExplicacao(explicacao) {
    const explicacaoDiv = document.getElementById("explicacao");

    if (explicacao) {
        explicacaoDiv.textContent = explicacao;
        const respostaDiv = document.querySelector(".resposta-da-pergunta");
        respostaDiv.classList.add("com-borda");
        respostaDiv.style.backgroundColor = "white";
    } else {
        explicacaoDiv.textContent = "";
        const respostaDiv = document.querySelector(".resposta-da-pergunta");
        respostaDiv.classList.remove("com-borda");
        respostaDiv.style.backgroundColor = "transparent";
    }

    const respostaDiv = document.querySelector(".resposta-da-pergunta");
    respostaDiv.style.display = "block";
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
    questaoElement.innerHTML = "<div style='text-align: center;color:red'>Quiz Concluído!</div>";
    botaoDeresposta.innerHTML = `Respostas Corretas: ${pontos}<br> Respostas Incorretas: ${incorrectAnswers}`;
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
            mostrarBotoesFinais();
            const mensagemFinal = document.getElementById("mensagem-final");
            const reiniciarBtn = document.getElementById("reiniciar-btn");
            const proximoNivelBtn = document.getElementById("proximo-nivel-btn");

            if (porcentagemCorreta > 50) {
                mensagemFinal.textContent = "Masha Allah!";
                reiniciarBtn.style.display = "none";
                proximoNivelBtn.style.display = "block";
            } else {
                mensagemFinal.textContent = "Fraco! Jogue novamente.";
                reiniciarBtn.style.display = "block";
                proximoNivelBtn.style.display = "none";
            }
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
    botaoSeguir.style.display = "none";
}

function reiniciarQuiz() {
    currentQuestaoIndice = 0;
    pontos = 0;
    botaoSeguir.disabled = true;
    pontuacaoElement.textContent = "Respostas Certas: 0";
    mostrarQuestao();
    limparExplicacao();

    document.querySelector(".Quiz-result").style.display = "none";
    document.getElementById("barra-progresso").style.display = "none";
    botaoSeguir.style.display = "block";
    document.getElementById("mensagem-final").textContent = "";

}

function proximoNivel()
{
    window.location.href= "alcIntermediario.html";
}
function voltarPaginaInicial() {
    window.location.href = "index.html";
}
window.reiniciarQuiz = reiniciarQuiz;
window.iniciarQuiz = iniciarQuiz;
window.mostrarProximaQuestao = mostrarProximaQuestao;
window.voltarPaginaInicial = voltarPaginaInicial;
window.proximoNivel= proximoNivel;
