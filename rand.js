function random(){
const decimal = Math.random();
const times10 = decimal * 10;
const final = Math.floor(times10);
console.log(final);
}
//random();

function times2(x){
    const number = x * 2;
    console.log(number);
}
//times2(2);

//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////

/*function random(){
    const number = Math.random()* 21;
    const final = Math.floor(number);
console.log(final); 
}
//random();*/

function randomLetter(){
    const number = Math.random()*alphabet.length;
    const index = Math.floor(number);
    const letter = alphabet[index];
    console.log(letter)
} 
randomLetter();