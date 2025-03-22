document.addEventListener('DOMContentLoaded', function () {
    const textContainer = document.getElementById('text-container');
    const textContent = "QuizIslam!";
    
    function typeText() {
        textContent.split('').forEach((char, index) => {
            setTimeout(() => {
                textContainer.innerHTML += char;
            }, 100 * index); // Ajuste o intervalo de tempo conforme necessário
        });
    }

    typeText();
});

let likeCount = 0;

function likeFunction() {
    likeCount++;
    document.getElementById("like-count").innerText = likeCount + (likeCount === 1 ? " like" : " likes");
}

