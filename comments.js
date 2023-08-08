// Create web server
// Create a web server that responds to a request to /comments.json with a JSON representation of the comments array that we defined in the previous exercise. If a GET request is made to any other path, respond with a 404 status code.

// var http = require('http');
// var comments = require('./comments');

// var server = http.createServer(function(request, response) {
//   response.setHeader('Content-Type', 'application/json');
//   if (request.method === 'GET' && request.url === '/comments.json') {
//     response.statusCode = 200;
//     response.write(JSON.stringify(comments));
//   } else {
//     response.statusCode = 404;
//     response.write('Page not found');
//   }

//   response.end();
// });

// server.listen(3000);

// Path: comments.js
// Create web server
// Create a web server that responds to a request to /comments/new with a form that allows the user to enter a new comment. When the form is submitted, the comment should be added to the array and the user should be redirected to /comments.

// var http = require('http');
// var fs = require('fs');
// var qs = require('querystring');
// var comments = require('./comments');

// function renderForm(request, response) {
//   response.setHeader('Content-Type', 'text/html');
//   response.write('<!DOCTYPE html>');
//   response.write('<html>');
//   response.write('<head>');
//   response.write('<title>New Comment</title>');
//   response.write('<link rel="stylesheet" href="/css/site.css">');
//   response.write('</head>');
//   response.write('<body>');
//   response.write('<form method="post" action="/comments">');
//   response.write('<textarea name="comment"></textarea>');
//   response.write('<input type="submit" value="Submit Comment">');
//   response.write('</form>');
//   response.write('</body>');
//   response.write('</html>');
//   response.end();
// }

// function renderComments(request, response) {
//   response.setHeader('Content-Type', 'text/html');
//   response.write('<!DOCTYPE html>');
//   response.write('<html>');
//   response.write('<head>');
//   response.write('<title>Comments</title>');
//   response.write('<link rel="stylesheet" href="/css/site.css">');
//   response.write('</head>');
//   response.write

