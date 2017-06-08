var todos = ["Buy new turtles"];

var input = prompt("what would you like to do?");


while(input !== "quit"){

	//handle input
	if(input === "list"){
		listTodos();
	} else if(input === "new"){
		addTodos();
	}else if(input === "delete"){
		deleteTodos();
	};

	//ask for new input
	input = prompt("what would you like to do?");
}
console.log("you quit the app");

function listTodos(){
	console.log("*****************");
		todos.forEach(function(todo,index){
		console.log(index + ": " + todo);
		});
	console.log("*****************");
};

function addTodos(){
	//ask for the new todos
		var newTodo = prompt("Enter new todo");
		console.log("Added todo to the list");
			//add to todos array
		todos.push(newTodo);
};

function deleteTodos(){
	// ask index which needs to be deleted
		var index=prompt("Enter the index of the todo");
		// delete the todo
		// splice()
		todos.splice(index,1);
		console.log("Deleted item in the todo list");

};
