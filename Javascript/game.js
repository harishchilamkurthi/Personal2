//create secrenumber
var secretNumber=4;
//ask for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check guess
if(guess === secretNumber){
	alert("absolutely"); // & ||
}
///otherwise, you are wri\ong
// else{
// 	alert("wrong");
// }
//otherwise, check if higher
else if (guess> secretNumber) {
	alert("too high. try again");
}
//otherwise, check if lower
else{
	alert("too low. try again");
}


