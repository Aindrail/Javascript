//Array
let fruits = ['banana','apple','mango','pineapple'];
fruits = new Array('banana','apple','mango','pineapple');
console.log(fruits[2]);
fruits[0]='pear';
console.log(fruits);

for ( let i =0 ; i< fruits.length ; i++){
    console.log(fruits[i]);
}

//Array common methods

console.log('to string',fruits.toString());
console.log(fruits.join(' - '));
console.log( fruits.pop() , fruits);
console.log(fruits.push('papaya'),fruits);
fruits[fruits.length]='NULL';
console.log(fruits);
fruits.shift(); //remove first element from a list
console.log(fruits);
fruits.unshift('kiwi'); //add element to first
console.log(fruits);

let vegi = ['tomato','spinach','cabbage','lettice'];
let allGros = fruits.concat(vegi);  //combine array
console.log(allGros);

console.log(allGros.slice(1,4));

console.log(allGros.reverse()); //revrerse the array

let numbers = [4,5,34,34,2,324,34,34,5,45323,32];
console.log(numbers.sort(function(a,b){return a-b})); //sort number use filter

let emptyArr = new Array();
for( let i =0 ; i<10 ; i++){
    emptyArr.push(i);
}
console.log(emptyArr);