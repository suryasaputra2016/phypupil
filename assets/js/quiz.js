// Quiz
let quiz = [
    {
        title: "Question 1",
        imagePath: "",
        questionText: "A small ball is thrown with an initial velocity of 50 m/s making an angle of 37 degree with horizontal line. Assume the gravitational acceleration is 10 m/s^2 downward.\nHow far would it lands from its initial position?",
        optionList: [
            "120 meters",
            "180 meters",
            "240 meters",
            "480 meters",
        ],
        answerKey: 2,
        answerChoice: 5,
    },
    {
        title: "Question 2",
        imagePath: "",
        questionText: "A small block of mass 2 kg is pushed with two oposing forces of 5 Newton to the right and 3 Newton to the left along a smooth horizontal plane.\nWhat is the block's acceleration?",
        optionList: [
            "1 m/s^2",
            "2 m/s^2",
            "4 m/s^2",
            "8 m/s^2",
        ],
        answerKey: 0,
        answerChoice: 5,
    },
    {
        title: "Question 3",
        imagePath: "",
        questionText: "Two spherical charges are initially held apart. They repel each other with the force of 108 Newton.\nWhat would be the forces between them if their distance is increased to 3 times its initial value?",
        optionList: [
            "12 N",
            "36 N",
            "324 N",
            "972 N",
        ],
        answerKey: 0,
        answerChoice: 5,
    },
    {
        title: "Question 4",
        imagePath: "",
        questionText: "Two spherical charges are initially held apart. They repel each other with the force of 108 Newton.\nWhat would be the forces between them if their distance is increased to 3 times its initial value?",
        optionList: [
            "12 N",
            "36 N",
            "324 N",
            "972 N",
        ],
        answerKey: 0,
        answerChoice: 5,
    },

];

// add event listener to start button
document.getElementById('start-quiz-button').addEventListener('click', startQuiz);

// add event listener to finish button
document.getElementById('finish-button').addEventListener('click', finishQuiz);

// add event listener to finish button
document.getElementById('take-quiz-again-button').addEventListener('click', restartQuiz);

// add event listener to previous question button
document.getElementById('previous-question-button').addEventListener('click', goToPrevious);



// start quiz
function startQuiz(event) {
    event.preventDefault();

    // hide start quiz form
    document.getElementById('start-quiz-card').style.display = 'none';

    // show question form
    document.getElementById('question-prompt-card').style.display = 'block';

    // show first question
    showQuestion(quiz[0])
}

function goToPrevious() {
    showQuestion(quiz[0])
}

// show question
function showQuestion(question) {

    document.getElementById('question-title').textContent = question.title;
    document.getElementById('question-image').src = question.imagePath;
    document.getElementById('question-body').textContent = question.questionText;

    document.getElementById('option-1').textContent = question.optionList[0];
    document.getElementById('option-2').textContent = question.optionList[1];
    document.getElementById('option-3').textContent = question.optionList[2];
    document.getElementById('option-4').textContent = question.optionList[3];
}

// finish quiz
function finishQuiz(event) {
    // hide question form
    document.getElementById('question-prompt-card').style.display = 'none';
    
    // show quiz result
    document.getElementById('quiz-result-card').style.display = 'block';
}

// resstart quiz
function restartQuiz() {
    // hide quiz result
    document.getElementById('quiz-result-card').style.display = 'none';

    // show start quiz form
    document.getElementById('start-quiz-card').style.display = 'block';
}