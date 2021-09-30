const quizDB = [
    {
        question: "Q1 : The series Friends is set in which city?",
        a: "Los Angeles",
        b: "New York City",
        c: "Miami?",
        d: "Seattle",
        ans: "ans2"
    },

    {
        question: " Q2: What’s the name of Joey’s penguin?",
        a: "Snowflake",
        b: "Waddle",
        c: "Huggsy",
        d: "Bobby",
        ans: "ans3"
    },

    {
        question: " Q3 : What pet did Ross own?",
        a: "A dog named Keith",
        b: "A rabbit called Lancelot",
        c: "A monkey named Marcel",
        d: "A lizard named Alistair",
        ans: "ans3"
    },

    {
        question: "Q4 : What song is Phoebe best known for?",
        a: "Smelly Rat",
        b: "Smelly Cat",
        c: "Smelly Hat",
        d: "Smelly Bat",
        ans: "ans2"
    },

    {
        question: "Q5 : What is Chandler’s middle name?",
        a: "Muriel",
        b: "Jason",
        c: "Kim",
        d: "Zachry",
        ans: "ans1"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const ShowScore = document.querySelector('#ShowScore');
let questionCount = 0;
let score = 0;


const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }

    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };

    questionCount++;
    deselectAll();
    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        ShowScore.innerHTML = `
        <h3> Your Score is ${score}/${quizDB.length} </h3>
        <button class = "btn" onclick = "location.reload()">Play Again</button>
        `;

        ShowScore.classList.remove('ScoreArea');
    }
});


