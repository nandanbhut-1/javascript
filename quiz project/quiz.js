const questions = [
    {
        qns: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Markup Language", "Home Text Markup Language"],
        ans: "Hyper Text Markup Language"
    },
    {
        qns: "Which CSS property is used to change text color?",
        options: ["font-style", "text-color", "color", "background-color"],
        ans: "color"
    },
    {
        qns: "Which keyword is used to declare a constant in JavaScript?",
        options: ["var", "const", "let", "static"],
        ans: "const"
    },
    {
        qns: "Which method adds an element to the end of an array?",
        options: ["pop()", "unshift()", "shift()", "push()"],
        ans: "push()"
    },
    {
        qns: "Which event occurs when a user clicks an HTML element?",
        options: ["onchange", "onclick", "onmouseover", "onload"],
        ans: "onclick"
    }
];
let index = 0;
let id;
let correct = 0;
let incorrect = 0;

var username = prompt("Enter your name :")

function timer() {
    let second = 10;
    document.querySelector('.second').innerHTML = second;

    id = setInterval(() => {
        if (second == 0) {
            clearInterval(id);
            index++;
            checkQuestion();
            getQuestion();
            return;
        }
        second--;
        document.querySelector('.second').innerHTML = second;
    }, 1000);
}

function getQuestion() {
    timer();
    document.querySelector(".ques i").innerHTML = index + 1;
    document.querySelector(".ques span").innerHTML = questions[index].qns;
    for (const i in questions[index].options) {
        document.querySelectorAll("aside")[i].children[0].checked = false;
        document.querySelectorAll("aside")[i].children[0].value = questions[index].options[i];
        document.querySelectorAll("aside")[i].children[1].innerHTML = questions[index].options[i];
    }
}
getQuestion();


function checkQuestion() {
    var useroptn;
    if (document.querySelectorAll('.optn input')[0].checked) {
        useroptn = document.querySelectorAll('.optn input')[0].value;
    } else if (document.querySelectorAll('.optn input')[1].checked) {
        useroptn = document.querySelectorAll('.optn input')[1].value;
    } else if (document.querySelectorAll('.optn input')[2].checked) {
        useroptn = document.querySelectorAll('.optn input')[2].value;
    } else if (document.querySelectorAll('.optn input')[3].checked) {
        useroptn = document.querySelectorAll('.optn input')[3].value;
    }
    (questions[index - 1].ans == useroptn) ? document.querySelector('.correct').innerHTML = ++correct : document.querySelector('.incorrect').innerHTML = ++incorrect;
}

document.querySelector("button").onclick = function () {
    clearInterval(id);
    index++;
    if (index >= questions.length) {
        checkQuestion();
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result span").innerHTML = correct;
        document.querySelector(".result h1").innerHTML = username;
        console.log("Here");
        return;
    }
    checkQuestion();
    getQuestion();
}


document.querySelector(".yes").onclick = function () {
    index = 0;
    correct = 0;
    incorrect = 0;
    document.querySelector('.correct').innerHTML = 0;
    document.querySelector('.incorrect').innerHTML = 0;

    document.querySelector(".result").style.display = "none";
    getQuestion();
}

document.querySelector(".no").onclick = function () {
    document.body.innerHTML = "";
    document.write("<h1>Game Over</h1>");
}