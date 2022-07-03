var readlineSync = require("readline-sync");

console.log("welcome to F.R.I.E.N.D.S. quiz");

//this is line breaker, like it leaves a line.
console.log("\n");


var username = readlineSync.question("Your Name? ");

console.log("\n");

console.log("Welcome to THE QUIZ, " + username + "!");

var score = 0;

function quiz(question, answer) {
    var userAnswer = readlineSync.question(question);
    if (userAnswer == answer) {
        console.log("correct! ");
        score++;
    } else {
        console.log("wrong! ");
        score--;
    }
    console.log("your score is ", score);
    console.log("-------------------");
}

//questions
var questions = [{
        question: "match number 1.2\n",
        answer: "1.2"
    },
    {
        question: "match number 25.1 \n",
        answer: "25.1"
    },
    {
        question: "match number 2588.1 \n",
        answer: "2588.1"
    },
    {
        question: "match number 25.881 \n",
        answer: "25.881"
    },
    {
        question: "match number 1.255 \n",
        answer: "1.255"
    },
    {
        question: "match number 77777 \n",
        answer: "77777"
    },
    {
        question: "match number 898 \n",
        answer: "898"
    },
    {
        question: "match number 871 \n",
        answer: "871"
    },

    {
        question: "match number 155 \n",
        answer: "155"
    },
    {
        question: "match number 102.2 \n",
        answer: "102.2"
    },
    {
        question: "match number 7784 \n",
        answer: "7784"
    },
    {
        question: "match number 884 \n",
        answer: "884"
    },
    {
        question: "match number 985 \n",
        answer: "985"
    },
    {
        question: "match number 787 \n",
        answer: "787"
    },
    {
        question: "match number 8754 \n",
        answer: "8754"
    },
    {
        question: "match number 554 \n",
        answer: "554"
    },
    {
        question: "match number 8454 \n",
        answer: "8454"
    },
    {
        question: "match number 8745 \n",
        answer: "8745"
    },
    {
        question: "match number 841 \n",
        answer: "841"
    },
    {
        question: "match number 8451 \n",
        answer: "8451"
    },
];

//LOOP
for (var i = 0; i < questions.length; i++) {
    let index = Math.floor(Math.random() * 20);
    var currentq = questions[index];
    quiz(currentq.question, currentq.answer);
}

//To display the final score.
// 20 - 18 

// 15 - 17 Very Good

// 12 - 14 Good

// 7 - 11 Fair

// 0 - 6 Fail
if (score >= 18) {
    console.log("Excellent , YOUR FINAL SCORE IS: " + score + "/20")
} else if (score >= 15 && score > 18) {
    console.log("Very Good , YOUR FINAL SCORE IS: " + score + "/20")

} else if (score >= 12 && score < 15) {
    console.log("Good , YOUR FINAL SCORE IS: " + score + "/20")

} else if (score >= 7 && score < 12) {
    console.log("Fair , YOUR FINAL SCORE IS: " + score + "/20")
} else {
    console.log("Fail YOUR FINAL SCORE IS: " + score + "/20")
}