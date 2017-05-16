var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
});


	var books =[{
		title : 'book1',
		price : 10
	},{
		title : 'book2',
		price : 20
	},{
		title : 'book3',
		price : 30
	}];

//books collection

app.get('/books', function(req, res){
 res.json(books)
});
 
app.get('/book/:id', function(req, res){
 var book = books[req.params.id]; //books[0]
 res.json(book)
});

app.post('/books', function(req, res){
	books.push(req.body);//what ever comes in req.body will be ur books object.
	res.json(book);
});

app.put('/book/:id', function(req, res){
	var book = req.body;
	var bookToEdit = books[req.params.id];
	book.ToEdit = book;
	//update logid
	books.push(bookToEdit);//what ever comes in req.body will be ur books object.
	res.json(book);
});

app.delete('/book/:id', function(req, res){
books.splice(1,req.params.id);
 res.json(book);
});


app.listen(3000, function(){
	console.log('server started on localhost 3000');
});