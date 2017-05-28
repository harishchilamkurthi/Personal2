var todos = ["Buy new turtles"];

var input = prompt("what would you like to do?");


while(input !== "quit"){

	//handle input
	if(input === "list"){
		console.log(todos);
	} else if(input === "new"){
		//ask for the new todos
	var newTodo = prompt("Enter new todo");
		//add to todos array
		todos.push(newTodo);
}

	//ask for new input
	input = prompt("what would you like to do?");
}
console.log("you quit the app");