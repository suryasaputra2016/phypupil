// number of questions
let numberOfQuestion = 5;

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
        answerChoice: undefined,
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
        answerChoice: undefined,
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
        answerChoice: undefined,
    },
    {
        title: "Question 4",
        imagePath: "",
        questionText: "A small ball is thrown with an initial velocity of 50 m/s making an angle of 37 degree with horizontal line. Assume the gravitational acceleration is 10 m/s^2 downward.\nHow far would it lands from its initial position?",
        optionList: [
            "120 meters",
            "180 meters",
            "240 meters",
            "480 meters",
        ],
        answerKey: 2,
        answerChoice: undefined,
    },
    {
        title: "Question 5",
        imagePath: "",
        questionText: "A small block of mass 2 kg is pushed with two oposing forces of 5 Newton to the right and 3 Newton to the left along a smooth horizontal plane.\nWhat is the block's acceleration?",
        optionList: [
            "1 m/s^2",
            "2 m/s^2",
            "4 m/s^2",
            "8 m/s^2",
        ],
        answerKey: 0,
        answerChoice: undefined,
    },
    {
        title: "Question 6",
        imagePath: "",
        questionText: "Two spherical charges are initially held apart. They repel each other with the force of 108 Newton.\nWhat would be the forces between them if their distance is increased to 3 times its initial value?",
        optionList: [
            "12 N",
            "36 N",
            "324 N",
            "972 N",
        ],
        answerKey: 0,
        answerChoice: undefined,
    },
    {
        title: "Question 7",
        imagePath: "",
        questionText: "A small ball is thrown with an initial velocity of 50 m/s making an angle of 37 degree with horizontal line. Assume the gravitational acceleration is 10 m/s^2 downward.\nHow far would it lands from its initial position?",
        optionList: [
            "120 meters",
            "180 meters",
            "240 meters",
            "480 meters",
        ],
        answerKey: 2,
        answerChoice: undefined,
    },
    {
        title: "Question 8",
        imagePath: "",
        questionText: "A small block of mass 2 kg is pushed with two oposing forces of 5 Newton to the right and 3 Newton to the left along a smooth horizontal plane.\nWhat is the block's acceleration?",
        optionList: [
            "1 m/s^2",
            "2 m/s^2",
            "4 m/s^2",
            "8 m/s^2",
        ],
        answerKey: 0,
        answerChoice: undefined,
    },
    {
        title: "Question 9",
        imagePath: "",
        questionText: "Two spherical charges are initially held apart. They repel each other with the force of 108 Newton.\nWhat would be the forces between them if their distance is increased to 3 times its initial value?",
        optionList: [
            "12 N",
            "36 N",
            "324 N",
            "972 N",
        ],
        answerKey: 0,
        answerChoice: undefined,
    },
    {
        title: "Question 10",
        imagePath: "",
        questionText: "A small ball is thrown with an initial velocity of 50 m/s making an angle of 37 degree with horizontal line. Assume the gravitational acceleration is 10 m/s^2 downward.\nHow far would it lands from its initial position?",
        optionList: [
            "120 meters",
            "180 meters",
            "240 meters",
            "480 meters",
        ],
        answerKey: 2,
        answerChoice: undefined,
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

    // add content and event listeners for all options
    let options = document.getElementById('options-container').children;
    for(let i = 0; i < options.length; i++) {
        options[i].textContent = questions[number].optionList[i];
        options[i].addEventListener('click', chooseOption);
        options[i].classList.remove('active');
    }
    if(questions[number].answerChoice !== undefined) {
        options[questions[number].answerChoice].classList.add('active');
    }

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

    // reset result table
    let resultTable = document.getElementById('result-table');
    resultTable.innerHTML = 
        `<tr>
            <th>No.</th>
            <th>Correct/Wrong</th>
            <th>Your Answer</th>
            <th>Right Answer</th>
        </tr>`;

    // reset answer choice
    for(question of questions) {
        question.answerChoice = undefined;
    }

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
    let questionID = Number(document.getElementById('question-id').value);

    // if option hasn't been choosen
    if(questions[questionID].answerChoice !== event.target.value) {
        // show chosen option
    let parent = event.target.parentElement;
    for(option of parent.children) {
        option.classList.remove('active')
    }
    event.target.classList.add('active');

    // save answer choice on questions
    let value =  event.target.value;
    questions[questionID].answerChoice = Number(value);
    } else { // if option has been choosen
        event.target.classList.remove('active');
        questions[questionID].answerChoice = undefined;
    }
    
}

// show quiz result
function showQuizResult() {
    // calculate and show point
    let point = 0;
    for(question of questions) {
        point += (question.answerChoice === question.answerKey) ? 1 : 0;
    }
    point = Math.round(point / numberOfQuestion * 100);
    document.getElementById('point-announcement').textContent = `Your point is ${point}/100`;

    let resultTable = document.getElementById('result-table');

    for(let i = 0; i < numberOfQuestion; i++) {
        let rowTable = document.createElement('tr');

        let cellOne = document.createElement('td');
        cellOne.textContent = i + 1;
        rowTable.appendChild(cellOne);

        let cellTwo = document.createElement('td');
        if(questions[i].answerChoice === questions[i].answerKey) {
            cellTwo.textContent = "Correct"
        } else if(questions[i].answerChoice === undefined) {
            cellTwo.textContent = "Empty";
            cellTwo.setAttribute("id", 'empty');
        }  else {
            cellTwo.textContent = "Wrong";
            cellTwo.setAttribute("id", 'wrong');
        }
        rowTable.appendChild(cellTwo);

        let cellThree = document.createElement('td');
        if(questions[i].answerChoice !== undefined) {
            cellThree.textContent = questions[i].optionList[questions[i].answerChoice];
        } else {
            cellThree.textContent = "-";
        }
        rowTable.appendChild(cellThree);

        let cellFour = document.createElement('td');
        cellFour.textContent = questions[i].optionList[questions[i].answerKey];
        rowTable.appendChild(cellFour);

        resultTable.appendChild(rowTable);
    }
}