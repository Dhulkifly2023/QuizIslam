const question = [
    {
        questao: "O Alcorão foi revelado no Lailatul-Qadr (Noite de Decreto)?",
        resposta: [
            { text: "Verdade", correct: true },
            { text: "Falso", correct: false },
        ],
        explicacao: "O Alcorão foi revelado na noite de Decreto.Uma noite ímpar da última dezena do mês de Ramadan do ano 610. Quando profeta tinha 40 anos de idade"
    },
    {
        questao: "Em que forma foi revelado o Alcorão?",
        resposta: [
            { text: "Era revelado um ou mais versículos", correct: false },
            { text: "Era revelado um surat Inteiro", correct: false },
            { text: "As duas opções estão corretas", correct: true },
        ],
        explicacao: "As duas Opções estão corretas, às vezes era revelado um ou mais versículos e às vezes um surat inteiro"
    },
    {
        questao: "Quantos escrivãos haviam para redigirem o Alcorão?",
        resposta: [
            { text: "5", correct: false },
            { text: "7", correct: false },
            { text: "3", correct: true },
            { text: "8", correct: false },
        ],
        explicacao: "3, a saber: Ali Ibn Abi Talib, Abdullah ibn Massud e Zaid Ibn Thabit. Eles escreviam nos fragmentos com material disponível: pedras, pergaminhos, omoplatas de camelos, pele de cobra, etc"
    },
    {
        questao: "Quanto tempo durou a revelação do Alcorão?",
        resposta: [
            { text: "27 anos", correct: false },
            { text: "18 anos", correct: false },
            { text: "29 anos", correct: false },
            { text: "23 anos", correct: true },
        ],
        explicacao: "O Alcorão foi revelado em 23 anos, 13 anos em Makka e 10 em Madina"
    },
    {
        questao: "Em termos de período de revelação: quantos tipos de versículos existem no Alcorão?",
        resposta: [
            { text: "3", correct: false },
            { text: "2", correct: true },
            { text: "4", correct: false },
            { text: "Apenas 1", correct: false },
        ],
        explicacao: "Existem 2 tipos de versículos: Makki (revelado antes de Hijra) e Madani (revelado depois de Hijra)"
    },
    {
        questao: "Em termos de período de conteúdo de mensagem: quantos tipos de versículos existem no Alcorão?",
        resposta: [
            { text: "7", correct: false },
            { text: "3", correct: false },
            { text: "2", correct: true },
            { text: "1", correct: false },
        ],
        explicacao: "Existem 2: Muhkam que significa claros e sólidos e outro Mutashábihát que significa que não estão claros mas com ajuda de versículos Muhkam podem ser compreendidos"
    },
    {
        questao: "Quantos profetas foram mencionados no Alcorão",
        resposta: [
            { text: "36", correct: false },
            { text: "27", correct: false },
            { text: "25", correct: true },
            { text: "91", correct: false },
        ],
    },{
        questao: "Existem surates que levam nomes dos profetas",
        resposta: [
            { text: "Verdade", correct: true},
            { text: "Falso", correct: false },
        ],
        explicacao: "Sim,existem seis Surates, a saber: Yunuss,Hud,Yussuf,Ibrahim,Muhammadd e Nuh"
    }
    ,{
        questao: "Qual foi o alfabeto mais utilizado no Alcorão",
        resposta: [
            { text: "Suad (ص)", correct: false},
            { text: "Baun (ب)", correct: false},
            { text: "Alif(ا)", correct: true},
            { text: "Lam(ل)", correct: false },
        ],
       
    }
    ,{
        questao: "Quanto tempo durou a revelação do Alcorão em Madina?",
        resposta: [
            { text: "10 anos", correct: true},
            { text: "11 anos", correct: false},
            { text: "23 anos", correct: false},
            { text: "12 anos", correct: false },
        ],
       explicacao: "13 anos em Makka e 10 anos em Madina"
    }
    ,{
        questao: "Quem é o profeta mais citado no Alcorão?",
        resposta: [
            { text: "Mussa(A.S)", correct: true},
            { text: "Issa(A.S)", correct: false},
            { text: "Ibrahim(A.S)", correct: false},
            { text: "Muhammad (S.A.W)", correct: false },
        ],
       explicacao: "Mussa(A.S) é mencionado 136 vezes no Alcorão"
    }, {
        questao: "No Alcorão, quantos anjos guardam o inferno?",
        resposta: [
            { text: "18", correct: false},
            { text: "21", correct: false},
            { text: "19", correct: true},
            { text: "70000", correct: false },
        ],
       explicacao: "«Há 19 deles que cuidam dele» Alcorão-cap74:v30"
    }, {
        questao: "Qual surat não contém a letra “mim”??",
        resposta: [
            { text: "Al-kawthar", correct: true},
            { text: "An-Nass", correct: false},
            { text: "Al-Burooj", correct: false},
            { text: "Al-Ikhlass", correct: false },
        ],
      
    }, {
        questao: "No Alcorão, onde está localizada a árvore de Zaqqum?",
        resposta: [
            { text: "No Paraiso", correct: false},
            { text: "No inferno", correct: true},
            { text: "Al-Burooj", correct: false},
            { text: "Al-Ikhlass", correct: false },
        ],
       explicacao: "A árvore de Zaqqum é descrita como uma fonte de tormento para os pecadores no Inferno, e no Alcorão Allah diz «Seus ramos frutiferos parecem cabeças de demônios» alcorão-37:65"
    }, {
        questao: "Qual surat fala de um rio do paraíso?",
        resposta: [
            { text: "Al-kawthar", correct: true},
            { text: "An-Nass", correct: false},
            { text: "Al-Burooj", correct: false},
            { text: "Al-Ikhlass", correct: false },
        ],
       explicacao: "profeta(S.A.w) disse:Eu entrei no Paraíso e me deparei com um rio cercado por tendas feitas de pérolas. Estendi minha mão em direção à água corrente e encontrei almíscar puro. Perguntei a Jibril: «O que é isso?» Ele respondeu: «Este é o Al-Kawthar que Allah, o Poderoso e Majestoso, te concedeu.» Narrado por Bukhari"
    }
    ,{
        questao: "Qual foi ultimo versiculo revelado no Alcorão?",
        resposta: [
            { text: "Diga,Ele Allah é unico", correct: false },
            { text: "E temei o dia em que retornareis a Allah", correct: true },
            { text: "Que tu és dos mensageiros", correct: false },
            { text: "Lê, em nome do Teu Senhor que criou", correct: false},
        ],
       explicacao: "Alcorão cap2:v281"
    },{
        questao: "Quantos Sujdats há no Alcorão?",
        resposta: [
            { text: "16", correct: false },
            { text: "14", correct: true},
            { text: "11", correct: false },
            { text: "10", correct: false},
        ],
       explicacao: "Há 14 sujdats(Prostrações) no Alcorão"
    },
    {
        questao: "Qual é  nome de Yaumul-quiyamat mencionado no Alcorão?",
        resposta:
        [
            {text: "Ressureição(Al-Ba'çu)",correct:false},
            {text: "O ultimo dia (Yaumul al-akhir)",correct:false},
            {text: "Julgamento (Al-quiyamat),A Hora (As-sa'at)",correct:false},
            {text: "Todos eles",correct:true},

        ],
        explicacao: "Acima são alguns nomes de Al-quiyamat que foram mencionados no Alcorão"
    },
    {
        questao: "Qual é o surat que nele contem dois sujdats(Prostrações)?",
        resposta:
        [
            {text: "Al-Mulk",correct:false},
            {text: "Ar-rum",correct:false},
            {text: "Al-Alaq",correct:false},
            {text: "Al-Hajj",correct:true},

        ],
        explicacao: "Al-Hajj, alcorão-cap22"
    },
    {
        questao: "Quantos «Basmallahs» existem no Alcorão?",
        resposta:
        [
           
            {text: "100",correct:false},
            {text: "114",correct:true},
            {text: "112",correct:false},
            {text: "113",correct:false},

        ],
        explicacao: "HÁ 114 surates,e cada um começando com o Basmallah,excepto o surat At-tawbat(9) que não possui nenhum «Basmallah», Mas há 2 no surat As Formigas (27). Trazendo o total para 114. A rainha disse: Ó notáveis! Uma nobre carta foi enviada para mim. Vem de Salomão; e é:  «Em nome de Allah, o Misericordioso, o Misericordioso...» v29-30"
    },
    {
        questao: "Quantos versiculos existem no Surat Al-Fatitha?",
        resposta:
        [
           
            {text: "9",correct:false},
            {text: "6 ",correct:false},
            {text: "7",correct:true},
            {text: "10",correct:false},

        ],
        explicacao: "7,“Em verdade,: temos te agraciado com os sete versículos reiterativos,Assim  como com o magnifico Alcorão.” Alcorão(cap15:v87)"  },

    
    {
        questao: "O Alcorão foi revelado em árabe",
        resposta:
        [
           
            {text: "Falso",correct:false},
            {text: "Verdade",correct:true},
           

        ],
        explicacao: "“Então revelamos um Alcorão em árabe, para que você possa admoestar(alertar) a Mãe das Metrópoles(cidades) e tudo ao seu redor. Alcorão(cap42:v7)" 
    },
    
    {
        questao: "Quais são os surates de Alcorão que começam com «Al-Hamdulillah",
        resposta:
        [
           
            {text: "Al-Fatiha,Al-An'ami,Al-Kahf,As-sabai,Al-Fátuir",correct:true},
            {text: "Al-Fatiha,Al-Kahf,Al-kawthar,Al-Máida",correct:false},
            {text: "Todas opções estão Certas",correct:false},
            {text: "nenhum deles",correct:false}
            
           

        ],
        explicacao: "Primeira Opção,Al-Fatiha(01),Al-An'ami(06),Al-Kahf(18),Sabai(34),Fátuir(35)" 
    },
    {
        questao: "Quais os animais que foram enviados para proteger a Kaaba do povo elefante?",
        resposta:
        [
           
            {text: "Corvos",correct:false},
            {text: "Elefantes",correct:false},
            {text: "Passaros",correct:true},
            {text: "Leões",correct:false}
            

        ],
        explicacao: "Passaros, “E enviou bandos de pássaros sobre eles que atiraram pedras de barro contra eles” Alcorão-cap105" 
    },
    {
        questao: "O Alcorão conta a história de todos os profetas, sem exceção?",
        resposta:
        [
            {text: "verdade",correct:false},
            {text: "Falso",correct:true},
        ],
        explicacao: "“Antes de ti,haviamos enviado mensageiros;as histórias de alguns deles te temos relatado, e há aqueles dos quais nada te relatamos...” Alcorão-cap40:v78" 
    },

    

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
    window.location.href= "alcExperiente.html";
}
function voltarPaginaInicial() {
    window.location.href = "index.html";
}
window.reiniciarQuiz = reiniciarQuiz;
window.iniciarQuiz = iniciarQuiz;
window.mostrarProximaQuestao = mostrarProximaQuestao;
window.voltarPaginaInicial = voltarPaginaInicial;
window.proximoNivel= proximoNivel;
