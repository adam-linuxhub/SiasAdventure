let questions = [];

let currentQuestion;

let player;



fetch("data/questions.json")

.then(response => response.json())

.then(data => {

    questions=data;

    startGame();

});



function startGame(){


player =
PlayerStorage.load();


updateStats();


currentQuestion =
questions[
Math.floor(
Math.random()*questions.length
)
];


displayQuestion();


}



function displayQuestion(){


document
.getElementById(
"question-text"
)
.textContent =
currentQuestion.question;



const answers =
document.getElementById(
"answers"
);



answers.innerHTML="";



currentQuestion.answers.forEach(
(answer,index)=>{


const label =
document.createElement(
"label"
);


label.className =
"answer-option";


label.innerHTML = `

<input 
type="radio"
name="answer"
value="${index}">

${answer}

`;



answers.appendChild(label);


});



document
.getElementById(
"hint-text"
)
.textContent =
currentQuestion.hint;


}



document
.getElementById(
"submit-answer"
)
.onclick =
function(){


const selected =
document.querySelector(
"input[name='answer']:checked"
);



if(!selected){

alert(
"Choose an answer first!"
);

return;

}


checkAnswer(
Number(selected.value)
);


};



function checkAnswer(answer){


const explanation =
document.getElementById(
"explanation"
);



if(answer === currentQuestion.correct){


player.correct++;

player.xp +=10;

player.stars +=5;


explanation.innerHTML =
`
🧙 Wizzy says:

Fantastic Sia! ⭐

${currentQuestion.explanation}

`;



}
else{


explanation.innerHTML =
`
🧙 Wizzy says:

Good try!

The correct answer was:

${currentQuestion.answers[currentQuestion.correct]}

<br><br>

${currentQuestion.explanation}

`;



}



player.questionsAnswered++;


PlayerStorage.save(player);


updateStats();


explanation.classList.remove(
"hidden"
);



};



document
.getElementById(
"dont-know"
)
.onclick =
function(){


const explanation =
document.getElementById(
"explanation"
);


explanation.innerHTML =
`
🧙 Wizzy says:

That's okay Sia!

Every wizard learns by practising.

<br><br>

The answer is:

${currentQuestion.answers[currentQuestion.correct]}

<br><br>

${currentQuestion.explanation}

`;



explanation.classList.remove(
"hidden"
);


};



function updateStats(){


document
.getElementById(
"stars"
)
.textContent =
player.stars;



document
.getElementById(
"level"
)
.textContent =
player.level;



document
.getElementById(
"xp-progress"
)
.style.width =
Math.min(
player.xp,
100
)+"%";


}