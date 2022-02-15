//Challenge 1 :- Your Age in Days 
function ageInDays()
{
    var birthYear = prompt("What year were you born ?");
    var days = (2022-birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAns = document.createTextNode('You are '+days + ' days old');
    h1.setAttribute('id','days');
    h1.appendChild(textAns);
    document.getElementById('flex-box-res').appendChild(h1);
}

function reset1(){
    document.getElementById('days').remove();
}

//Challenge-2
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);

}

//Challenge -3 R P S

function rpsGame(yourChoice){
// console.log(yourChoice);
var humanCh,botCh;
 humanCh = yourChoice.id;
  botCh = noTochoice(randToRps()); 
result = winner(humanCh,botCh);
message = finalMessage(result[0]);
 rpsFrontEnd(yourChoice,botCh,message);

}
//to genrate a random number and then take it and make it a object
function randToRps(){
    return Math.floor(Math.random() * 3); 
}
//it converts the no to any of RPS
function noTochoice(num){
    return ['rock','paper','scissors'][num];
}

//decides the winner and returns scores

function winner (yourChoice, botCh){
    var rpsDatabase = {
        'rock' :{
            'scissors' : 1, 'rock': 0.5 , 'paper': 0  },
        'paper':{'scissors' : 0, 'rock': 1 , 'paper': 0.5},
        'scissors' : {'scissors' : 0.5, 'rock': 0 , 'paper': 1}
    }
    var yourScore = rpsDatabase[yourChoice][botCh];
    var compScore = rpsDatabase[botCh] [yourChoice];

    return [yourScore,compScore];

}
//here your score is given from result in rpsGame function
function finalMessage(yourScore){
    console.log(yourScore);
    if(yourScore === 0){
        return {'message': 'You lost :(', 'color': 'red'};
    }else if (yourScore === 0.5){
        return {'message': 'Draw .. :|', 'color': 'yellow'};
    }
    else if(yourScore === 1) {
        return{'message': 'You Won :)', 'color': 'green'};
    }
} //returns message and color which will be used to display messsage in frontend

//this is the frond end diaplay function all the DOM happens here
function rpsFrontEnd(humanImageChoice, botImageChoice , finalMessage){
    //a data base is created
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    //remove the previous images 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
//new div is creted each for batchoice your choice and results
    var humanDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var botDiv = document.createElement('div');
 //innner html is changed from here
    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice.id] + "' height =250 width =250 style='box-shadow: 0px 10px 50px rgba(20, 48, 230, 0.8);' >"
   messageDiv.innerHTML="<h1 style='color: "+finalMessage['color'] +"; font-size: 60px; padding: 30px;'>"+finalMessage['message']+"</h1>";
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height =250 width =250 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 0.8);' >"
   //each div is now appended here in the sequence
    document.getElementById('flexbox-rps-div').appendChild(humanDiv);
    document.getElementById('flexbox-rps-div').appendChild(messageDiv);
    document.getElementById('flexbox-rps-div').appendChild(botDiv);
}


//Challenge - 4 Change the colors of all buttons
 var all_button = document.getElementsByTagName('button');
 var copyAll = [];
 for (let i =0 ; i< all_button.length; i++){
     copyAll.push(all_button[i].classList[1]);
 }

 function buttonColorChange(buttonThingy){
if(buttonThingy.value === 'red'){
    buttonRed();
}
else if (buttonThingy.value === 'green'){
    buttonGreen();
}
else if(buttonThingy.value === 'blue'){
    buttonBlue();
}
else if(buttonThingy.value === 'reset'){
    buttonReset();
}
else{
    randomColor();
}
 }

 function buttonRed(){
     for( let i =0 ; i< all_button.length ; i++){
         all_button[i].classList.remove(all_button[i].classList[1]); 
         all_button[i].classList.add('btn-danger');
     }
 }
 function buttonGreen(){
    for( let i =0 ; i< all_button.length ; i++){
        all_button[i].classList.remove(all_button[i].classList[1]); 
        all_button[i].classList.add('btn-success');
    }
}
function buttonBlue(){
    for( let i =0 ; i< all_button.length ; i++){
        all_button[i].classList.remove(all_button[i].classList[1]); 
        all_button[i].classList.add('btn-primary');
    }

}

function buttonReset(){
    
        for( let i =0 ; i< all_button.length ; i++){
            all_button[i].classList.remove(all_button[i].classList[1]); 
            all_button[i].classList.add(copyAll[i]);
        }
    
}

function randomColor(){
    for( let i =0 ; i< all_button.length ; i++){
        var choices = ['btn-primary', 'btn-danger','btn-warning','btn-success'];
        all_button[i].classList.remove(all_button[i].classList[1]); 
        all_button[i].classList.add(choices[Math.floor(Math.random() * 4)]);
    }
}

