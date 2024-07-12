/*let expectedname = "John";
var myName = "Nick";
var dadName = "John";
var momName = "Linda";
if ( expectedname === myName) {
    console.log("Hi me!")
} else if (expectedname === dadName) {
    console.log ("Hi dad!")
} else if (expectedname === momName) {
    console.log ("Hi mom!")
} else {
    console.log ("Hi noname!")
}

let sheepCounted = 0;
while (sheepCounted < 10) {
    console.log ("Sheep counted: " + sheepCounted + "!");
    sheepCounted++;
}
console.log ("Zzzzzzz...");


let animals = ["dog", "cat", "monkey", "parrot"];
for (i = 0; i < animals.length; i++) {
    console.log ("There is a " + animals[i] + " in the zoo");
}

let personName = "Leonardo";
for (i = 0; i < personName.length; i++) {
    console.log ("There is a letter " + personName[i] + " in this name");
}

for (let x = 1; x < 10000; x = x * 3) {
    console.log(x)
}



 
let animals = ["Cat", "Fish", "Dog", "Unicorn"];
for (i = 0; i < animals.length; i++) {
    animals[i] = animals[i] + " is awesome animal!";
    console.log(animals);
}

// Мій варіант
var alphabet =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var randomWordLength = Math.floor(Math.random() * 20);
var randomWord = "";
console.log(randomWordLength);
for (i = 0; i < randomWordLength; i++) {
    let randomLetter = Math.floor(Math.random() * 26);
    randomWord +=  alphabet[randomLetter];
    
}
console.log (randomWord);

// Варіант книжки по підказках
var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var randomString = "";
while (randomString.length < 6) {
    randomLet = Math.floor(Math.random() * alphabet.length);
    randomString += alphabet[randomLet];
}
console.log(randomString);

var input = "javascript is awesome";
var output = "";
for (let i = 0; i < input.length; i++) {
    if (input[i] === "a"){
        output += 4;
    } else if (input[i] === "e"){
        output += 3;
    } else if (input[i] === "i"){
        output += 1;
    } else if (input[i] === "o"){
        output += 0;
    } else {
        output += input[i];
    }
}
console.log (output);

let likeCats = confirm("Do you like cats?");
if (likeCats) {
    console.log("You are good kitty!");
} else {
    console.log("Oops, no problem. Still< you`re great!.");
}
alert("Javascript is awesome!");

*/

var words = [
    "cat",
    "monkey",
    "elephant",
    "house",
    "car",
];
var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;
var remainingAttempts = 3;

while (remainingLetters > 0 && remainingAttempts > 0){
alert(answerArray.join(" "));
var guess = prompt("Guess letter or press cancel to exit. You have: " + remainingAttempts + " attempts").toLowerCase();
if (guess === null) {
    break;
} else if (guess.length !== 1) {
    alert("Please, write only one letter.");
} else {
    var correctguess = false;
    for (var j = 0; j < word.length; j++){  
       if (word[j] === guess) {
        if (answerArray[j] === "_"){
            answerArray[j] = guess;
            remainingLetters--;
            correctguess = true;
        }
        }
    }
    if (!correctguess) {
        remainingAttempts--;
    }
}
}
if (remainingAttempts < 1) {
    alert("Sorry, you ran out of attempts. The word was " + word);
}
alert(answerArray.join(" "));
alert("Awesome! Word for guess was " + word);