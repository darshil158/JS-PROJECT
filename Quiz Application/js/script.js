let questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "Home Text Language"
        ], 
        correct : "Hyper Text Markup Language"
    },
    { 
        question: "Which language is used for styling web pages?",
        options: [
            "HTML",
            "CSS",
            "Python",
            "PHP"
        ],
        correct : "CSS"
    },
    {
        question: "Which language is used to add functionality to websites?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap"
        ],
        correct : "JavaScript"
    },
    {
        question: "Which HTML tag is used to insert an image?",
        options: [
            "image",
            "img",
            "pic",
            "src"
        ],
        correct : "img"
    },
    {
        question: "Which CSS property changes text color?",
        options: [
            "font-color",
            "background-color",
            "color",
            "text-style"
        ],
        correct : "color"
    },
    {
        question: "Inside which HTML element do we write JavaScript?",
        options: [
            "javascript",
            "script",
            "js",
            "code"
        ],
        correct : "script"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: [
            "##",
            "!-- --",
            "//",
            "**"
        ],
        correct : "//"
    },
    {
        question: "Which company developed JavaScript?",
        options: [
            "Google",
            "Microsoft",
            "Netscape",
            "Apple"
        ],
        correct : "Netscape"
    },
    {
        question: "Which CSS property is used to make rounded corners?",
        options: [
            "radius",
            "border-style",
            "border-radius",
            "corner-radius"
        ],
        correct : "border-radius"
    },
    {
        question: "Which method is used to display output in console?",
        options: [
            "print()",
            "console.write()",
            "display()",
            "console.log()"
        ],
        correct : "console.log()"
    }
]

let currentQ = 0;
 
let score = 0;

let time = 10;

let ans = false;

let timer;

let result = document.getElementById("result");

let queNum = document.getElementById("queNum");

let progressBar = document.getElementById("progressBar");

let question = document.getElementById("que");

let options = document.getElementById("opt");

let nextBtn = document.getElementById("nextBtn");

let timerNum = document.getElementById("timeN");


function checkAnswers(selected, clickedBtn) {

  let correctAnswer = questions[currentQ].correct;
  
  if (selected === correctAnswer) {
    score++;
  } 
  
}

function startTimer() {
  timer = setInterval( () => {
    
    time--;
    timerNum.innerHTML = time;
    
    if (time === 0) {

      clearInterval(timer);
      currentQ++;

      if (currentQ < questions.length) {
        loadQuestions();
      } 
      else {
        showResult();
      }
    }
  }, 1000);
}

function loadQuestions() {

  options.innerHTML = "";

  ans = false;

  time = 10;

  timerNum.innerHTML = time;

  clearInterval(timer);

  startTimer();

  queNum.innerHTML = `Question ${currentQ + 1} / ${questions.length}`;

  let progress = ((currentQ + 1) / questions.length) * 100;

  progressBar.style.width = progress + "%";

  let current = questions[currentQ];

  question.innerHTML = current.question;

  current.options.forEach(function (option) {

    let button = document.createElement("button");
    button.classList.add("option");
    button.innerHTML = option;

    button.addEventListener("click", function () {

      if (ans) return;
      ans = true;
      clearInterval(timer);
      checkAnswers(option, button);

      setTimeout(() => {

        currentQ++;

        if (currentQ < questions.length) {
          loadQuestions();
        } 
        else {
          showResult();
        }

      }, 100);

    });

    options.appendChild(button);
  });
}

function showResult() {

  clearInterval(timer);

  question.style.display = "none";

  options.style.display = "none";

  nextBtn.style.display = "none";

  timerNum.style.display = "none";

  queNum.style.display = "none";

  result.style.display = "block";

  result.innerHTML = "Quiz Completed <br> 🌟 Your SCORE : " + score + " / " + questions.length;
}

nextBtn.addEventListener("click", function () {
  currentQ++;
  if (currentQ < questions.length) {
    loadQuestions();
  } 
  else {
    showResult();
  }
});

loadQuestions();
