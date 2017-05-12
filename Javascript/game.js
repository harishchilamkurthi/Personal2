//create secrenumber
var secretNumber=4;
//ask for guess
var stringGuess = Number(prompt("Guess a number"));

//check guess
if(guess === secretNumber){
	alert("absolutely"); // & ||
}
///otherwise, you are wri\ong
// else{
// 	alert("wrong");
// }
//otherwise, check if heigher
else if (guess> secretNumber) {
	alert("too high. try again");
}
//otherwise, check if lower
else{
	alert("too low. try again");
}


