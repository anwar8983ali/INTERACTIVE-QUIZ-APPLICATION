const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript"],
    answer: "CSS"
  },
  {
    question: "Which language is used for web app behavior?",
    options: ["PHP", "JavaScript", "Python"],
    answer: "JavaScript"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";
  q.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.onclick = () => checkAnswer(option);
    optionsEl.appendChild(li);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) {
    feedbackEl.textContent = "Correct ✅";
    score++;
  } else {
    feedbackEl.textContent = `Wrong ❌ (Answer: ${correct})`;
  }
  document.querySelectorAll("#options li").forEach(li => {
    li.onclick = null;
  });
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("question-box").classList.add("hidden");
    nextBtn.classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreEl.textContent = `${score} / ${questions.length}`;
  }
};

loadQuestion();
