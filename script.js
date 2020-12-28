const quizData = [

    {
        question: 'Choose the correct HTML element for the largest heading',
        a: '<h1>',
        b: '<h2>',
        c: '<h3>',
        d: '<h4>',
        correct: 'a'
    },
    
    {
        question: 'What is the correct HTML element for inserting a line break?',
        a: '<bl>',
        b: '<break>',
        c: '<br>',
        d: '<bk>',
        correct: 'c'
    },
    
    {
        question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
        a: 'In <head> tag',
        b: 'In <script> tag',
        c: 'In <title> tag',
        d: 'In <body> tag',
        correct: 'a'
    },
    
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        a: '<js>',
        b: '<javascript>',
        c: '<heading>',
        d: '<script>',
        correct: 'd'
    },
    
    {
        question: 'In HTML <p> stands for',
        a: 'paragraph',
        b: 'pink',
        c: 'paste',
        d: 'print',
        correct: 'a'
    },
];
const quiz  = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectedAnswers();


    const currentQuizData = quizData
    [currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected(){
  

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}
function deselectedAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
        
    });

}

submitBtn.addEventListener("click", () =>{

    const answer = getSelected();


    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else {
            quiz.innerHTML = `<h2>you answered correctly at ${score}/${quizData.length} questions.
            <a href="index.html"><button>logout</button></a></h2>`
        }
}
});