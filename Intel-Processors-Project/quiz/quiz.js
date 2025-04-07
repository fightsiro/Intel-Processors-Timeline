const questions = [
    {
        question: "Какой процессор ввел x86-архитектуру?",
        answers: ["8086", "Pentium", "Core i7"],
        correct: 0
    },
    {
        question: "Сколько транзисторов у Intel Alder Lake?",
        answers: ["10 млн", "1 млрд", "10 млрд"],
        correct: 2
    }
];

let currentQuestion = 0;

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question').innerHTML = q.question;
    
    let answersHTML = "";
    q.answers.forEach((answer, index) => {
        answersHTML += `<button onclick="checkAnswer(${index})">${answer}</button>`;
    });
    document.getElementById('answers').innerHTML = answersHTML;
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].correct) {
        alert("✅ Правильно!");
    } else {
        alert("❌ Неверно!");
    }
}

document.getElementById('next').addEventListener('click', () => {
    currentQuestion = (currentQuestion + 1) % questions.length;
    showQuestion();
});

// Запуск викторины
showQuestion();
