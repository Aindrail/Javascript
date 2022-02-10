//Conditional , Control flow (if else)

var age = prompt('What is your age?');
if((age>=18) && (age<=35)){
    status1 = 'target demo';
    console.log(status1);
}
else{
    status1 = 'Not interseted';
    console.log(status1);
}

//Switch
 switch (6){
case 0 :
    text = 'Sunday';
    break;
case 5 :
    text = 'Friday';
    break;
case 6 :
    text = 'Saturday';
    break;
    default :
    text = 'Useless days'

 }
 console.log(text);