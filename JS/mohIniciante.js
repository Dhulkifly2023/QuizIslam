const question = [
    
    {
        questao: "Em que ano profeta Muhammad (S.A.w) nasceu",
        resposta:
        [
            {text: "576",correct:false},
            {text: "550",correct:false},
            {text: "570",correct:true},
            {text: "572",correct:false},

        ],
        explicacao: "Muhammad nasceu na cidade de Meca, um importante centro comercial e de peregrinação religiosa, em 570"
    },
    {
        questao: "Qual  é o nome do pai do profeta Muhammad(S.A.W)",
        resposta:
        [
            {text: "Abdul Qassim",correct:false},
            {text: "Abdullah",correct:true},
            {text: "Abdul Mutualib",correct:false},
            {text: "Nenhum deles",correct:false},

        ],
        explicacao: ""
    },
    
    {
        questao: "Quem era a babá  do profeta Muhammad(S.A.W)",
        resposta:
        [
            {text: "Halima Sa'diyya",correct:true},
            {text: "Arwa al-Sulayhi",correct:false},
            {text: "Rabia al Adawiyya",correct:false},
            {text: "Zaynab Nefzaouia",correct:false},

        ],
        explicacao: ""
    },
    {
        questao: "A mãe do Profeta (S.A.W) foi chamada?",
        resposta:
        [
            {text: "Halima",correct:false},
            {text: "Amina",correct:true},
            {text: "Assia",correct:false},
            {text: "Khadijat",correct:false},

        ],
        explicacao: ""
    },
    {
        questao: "Qual era o apelido do Profeta  antes de receber a revelação do Alcorão e se tornar Profeta?",
        resposta:
        [
           
            {text: "O confiavel",correct:true},
            {text: "Bom Hommem",correct:false},
       

        ],
        explicacao: "O povo de Meca o chamava de “Sãdiq Al-Amine” (o verdadeiro, confiável)."
    },
    {
        questao: "​O Profeta (S.A.W) foi enviado apenas para os árabes",
        resposta:
        [
           
            {text: "Falso",correct:true},
            {text: "verdade",correct:false},
       

        ],
        explicacao: "“Nós apenas te enviamos como uma misericórdia para a humanidade” alcorão-surat 21:v107"
    },
    
    {
        questao: "O Profeta  (S.A.W) foi violento?",
        resposta:
        [
            {text: "verdade",correct:false},
            {text: "Falso",correct:true},
        ],
        explicacao: "A Aysha relatou «O Mensageiro de Allah ﷺ, não golpeou um servo ou uma mulher, e ele nunca golpeou nada com a mão», excepto na guerra."
    },

    {
        questao: "Quantos anos tinha o Profeta Muhammad (S.A.W) quando sua mãe falesceu?",
        resposta:
        [
            {text: "4",correct:false},
            {text: "3",correct:false},
            {text: "6",correct:true},
            {text: "7",correct:false},
        ],
        explicacao: ""
    },
    {
        questao: "O Profeta Muhammad (S.A.W) morreu com que idade?",
        resposta:
        [
            {text: "56 anos",correct:false},
            {text: "48 anos",correct:false},
            {text: "76 anos",correct:false},
            {text: "63 anos",correct:true},
        ],
        explicacao: ""
    }
    ,
    {
        questao: "Muhammad (S.A.W) é o último dos Profetas",
        resposta:
        [
            {text: "Verdade",correct:true},
            {text: "Falso",correct:false},
        ],
        explicacao: " “Em verdade, Mohammad não é o pai de nenhum de vossos homens, mas sim o Mensageiro de Deus e o ultimo dos dos profetas; sabei que Deus é Onisciente” Alcorão-surat 33:v40"
    }
    ,
    {
        questao: "O Profeta (S.A.W) tinha irmãos e irmãs?",
     
        resposta:
        [
            {text: "verdade",correct:false},
            {text: "false",correct:true},
           
        ],
        explicacao: "Ele era filho único, seu pai morreu antes de ele nascer e sua mãe quando ele tinha 6 anos."
    }
    
    ,
    {
        questao: "Qual era o nome do primeiro filho do Profeta (S.A.W)",
        resposta:
        [
            {text: "Qassim",correct:true},
            {text: "Abdullah",correct:false},
            {text: "Ibrahim",correct:false},
            {text: "Fátima",correct:false},
        ],
        explicacao: "O primeiro filho do Profeta Muhammad (S.A.W) foi o Qassim. Ele recebeu o apelido (kunya) de Abu'l-Qasim"
    }
    ,
    {
        questao: "Com quantos anos o profeta (S.A.W) recebeu a profecia",
        resposta:
        [
            {text: "30",correct:false},
            {text: "40",correct:true},
            {text: "50",correct:false},
            {text: "60",correct:false},
        ],
        explicacao: ""
    }
    ,
    {
        questao: "Qual dos filhos do profeta (S.A.W) abaixo não foi de Khadija(R.A)",
        resposta:
        [
            {text: "Qassim",correct:false},
            {text: "Ibrahim",correct:true},
            {text: "Fátima",correct:false},
            {text: "Todas foram  de Khadija (R.A)",correct:false},
        ],
        explicacao: ""
    }
    ,
    {
        questao: "Qual era o nome da primeira esposa do Profeta (S.A.W)?",
        resposta:
        [
            {text: "Aisha",correct:false},
            {text: "Hafsá",correct:false},
            {text: "Maryam",correct:false},
            {text: "Khadijat",correct:true},
        ],
        explicacao: ""
    }
    ,
    {
        questao: "Qual anjo ensinou a Muhammad (S.A.W) o Alcorão?",
        resposta:
        [
            {text: "Mikail",correct:false},
            {text: "Djibril",correct:true},
            {text: "Malik",correct:false},
            {text: "Issrafil",correct:false},
        ],
        explicacao: "Djibrîl é o anjo da revelação. «O Mensageiro de Allah viu Jibrîl em sua verdadeira forma. Ele tinha seiscentas asas, cada uma delas enchia o horizonte, e havia pérolas multicoloridas e rubis caindo de suas asas.» Relatado por Ahmad"
    }
    ,
    
    {
        questao: "O Profeta (S.A.W) jejuava?",
        resposta:
        [
            {text: "Segundas e nas Quintas",correct:true},
            {text: "Segundas e nas Terças",correct:false},
            {text: "Quartas e nas Sextas",correct:false},
            {text: "Nas Quintas apenas",correct:false},
        ],
        explicacao: "Na segunda e quinta-feira, Alá perdoa todos os muçulmanos, exceto duas pessoas que se evitam"
    }
    ,
     {
        questao: "O avô do Profeta (S.A.W) foi chamado?",
        resposta:
        [
            {text: "Abu Tualib",correct:false},
            {text: "Abdullah",correct:false},
            {text: "Abdul Mutualib",correct:true},
            {text: "Abbas",correct:false},
        ],
        explicacao: ""
     },
    {
        questao: "A avô do Profeta (S.A.W) foi chamada?",
        resposta:
        [
            {text: "Haleema",correct:true},
            {text: "Sakeena",correct:false},
            {text: "Fátima",correct:false},
            {text: "Nenhuma acima",correct:false},
        ],
        explicacao: ""
    },
    {
        questao: "Quando Djibril veio  ao encontro do profeta(S.A.W) na cave de Hira, foi numa noite de?",
        resposta:
        [
            {text: "Ramadan",correct:true},
            {text: "Rajab",correct:false},
            {text: "Shaban",correct:false},
            {text: "Muharram",correct:false},
        ],
        explicacao: ""
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
    window.location.href= "modalidades.html";
}
function voltarPaginaInicial() {
    window.location.href = "index.html";
}
window.reiniciarQuiz = reiniciarQuiz;
window.iniciarQuiz = iniciarQuiz;
window.mostrarProximaQuestao = mostrarProximaQuestao;
window.voltarPaginaInicial = voltarPaginaInicial;
window.proximoNivel= proximoNivel;