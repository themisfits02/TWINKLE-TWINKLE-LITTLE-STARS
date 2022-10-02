//Question bank
var questionBank= [
    {
        question : 'What sort of sun is a star?',
        option : ['Main sequence','Supergiant', 'Red giant', 'White drawf'],
        answer : 'Main sequence',
        answers : 'Our sun a main sequence star which is most common type of star.'
    },
    {
        question : 'What is the pattern of stars identifiable in the night sky called?',
        option : ['Nebula', 'Galaxy','Constellation','Supernova'],
        answer : 'Constellation',
        answers : 'A recognizable pattern of stars in the night sky is called Constellation.'
    },
    {
        question : 'What is the biggest type of star?',
        option : ['Red giant', 'Supergiant','Blue giant','White drawf'],
        answer : 'upergiant',
        answers : 'Supergiants are the biggest stars, about 500-1000 times bigger than the sun.'
    },
    {
        question : 'What colour of the stars are the hottest ?',
        option : ['Yellow','Red','Blue', 'White'],
        answer : 'Blue',
        answers : 'Blue giants are hottest type of stars.'
    },
    {
        question : 'What are the stars mainly made of?',
        option : ['Rock','Hot liquid','Dust particles','Hot gas'],
        answer : 'Hot gas',
        answers : 'Stars are mainly made of hydrogen and helium gas.'
    },
    {
        question : 'What is our home Galaxy called?',
        option : ['The solar system','The big bang','The rosy road','The milky way'],
        answer : 'The milky way',
        answers : 'The milky way also called akash Ganga.'
    },
    {
        question : 'How many stars are there in milky way?',
        option : ['6 million','200 million','1000 billion','200 billion'],
        answer : '200 billion',
        answers : 'There are around 200 billion stars in our solar system.'
    },
    {
        question : 'What is the name of baby stars?',
        option : ['Drawf','Giant','Protostars','Nebulas'],
        answer : 'Protostars',
        answers : 'A protostar is a collection of gas that has collapsed down from a giant molecular cloud.'
    },
    {
        question : 'Black holes are formed when stars lose gas to burn , from a red super giant, cools down and, becomes so dense..',
        option : ['The stars flattens like a pancake.','The matter of stars collapses on itself.','The stars turns into a giant ice ball.','The star explodes'],
        answer : 'The matter of stars collapses on itself.',
        answers : 'The matter of stars collapses on itself. '
    },
    {
        question : 'In what form do both low-mass and high-mass stars begin and end their life cycles?',
        option : ['Black holes','Nebulae','White drawf','Red giants'],
        answer : 'Nebulae',
        answers : 'Nebulae are the gas clouds where stars can form.'
    },
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answers;
        answers.appendChild(list);
    }
}


displayQuestion();