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
