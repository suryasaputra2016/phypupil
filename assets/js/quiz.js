// number of questions
let numberOfQuestion = 3;

// show label
document.getElementById('number-of-questions-label').textContent = "Number of questions: " + numberOfQuestion;

// bind number of questions slider to numberOfQuestion
document.getElementById('number-of-questions').addEventListener('change', updateNumberOfQuestion)

// update numberOfQuestion
function updateNumberOfQuestion() {
    numberOfQuestion = Number(document.getElementById('number-of-questions').value);
    document.getElementById('number-of-questions-label').textContent = "Number of questions: " + numberOfQuestion;
}

// Questions
let questions = [
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
document.getElementById('previous-question-button').addEventListener('click', goToPreviousQuestion);

// add event listener to next question button
document.getElementById('next-question-button').addEventListener('click', goToNextQuestion);



// start quiz
function startQuiz(event) {
    event.preventDefault();

    // hide start quiz form
    document.getElementById('start-quiz-card').style.display = 'none';

    // show question form
    document.getElementById('question-prompt-card').style.display = 'block';

    // show first question
    showQuestion(0)
}

// show question
function showQuestion(number) {
    document.getElementById('question-id').value = number;
    document.getElementById('question-title').textContent = questions[number].title;
    document.getElementById('question-image').src = questions[number].imagePath;
    document.getElementById('question-body').textContent = questions[number].questionText;

    document.getElementById('option-1').textContent = questions[number].optionList[0];
    document.getElementById('option-2').textContent = questions[number].optionList[1];
    document.getElementById('option-3').textContent = questions[number].optionList[2];
    document.getElementById('option-4').textContent = questions[number].optionList[3];

    document.getElementById('option-1').addEventListener('click', chooseOption);
    document.getElementById('option-2').addEventListener('click', chooseOption);
    document.getElementById('option-3').addEventListener('click', chooseOption);
    document.getElementById('option-4').addEventListener('click', chooseOption);

    // disable previous button for the first question
    if(number==0) {
        document.getElementById('previous-question-button').disabled = true;
    } else {
        document.getElementById('previous-question-button').disabled = false;
    }

    // disable next button for the last question
    if(number==numberOfQuestion-1) {
        document.getElementById('next-question-button').disabled = true;
    } else {
        document.getElementById('next-question-button').disabled = false;
    }
}

// finish quiz
function finishQuiz(event) {
    // hide question form
    document.getElementById('question-prompt-card').style.display = 'none';
    
    // show quiz result
    document.getElementById('quiz-result-card').style.display = 'block';
    showQuizResult();
}

// restart quiz
function restartQuiz() {
    // hide quiz result
    document.getElementById('quiz-result-card').style.display = 'none';

    // show start quiz form
    document.getElementById('start-quiz-card').style.display = 'block';
}

// go to previous question
function goToPreviousQuestion() {
    let questionID = document.getElementById('question-id').value;
    showQuestion(Number(questionID) - 1);
}

// go to next question
function goToNextQuestion() {
    let questionID = document.getElementById('question-id').value;
    showQuestion(Number(questionID) + 1);
}

// choose option
function chooseOption(event) {
    // show chosen option
    let parent = event.target.parentElement;
    for(option of parent.children) {
        option.classList.remove('active')
    }
    event.target.classList.add('active');

    let value =  event.target.value;
    let questionID = Number(document.getElementById('question-id').value);
    questions[questionID].answerChoice = Number(value);
}

// show quiz result
function showQuizResult() {
    
}