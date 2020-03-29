const fs = require('fs');
const https = require('https');

// code om bestand aan te maken

fs.writeFile(__dirname+"/test.html","<h1>Hello World.</h1>",function(error){
  if(error){
    return console.log(error);
  } else {
    return console.log("OK, file created.");
  }
});

//code om foto down te laden van location url

// let location = "https://github.com/LearnWebCode/welcome-to-git/blob/master/images/dog.jpg";
// let location = "https://github.com/LearnWebCode/welcome-to-git/blob/master/images/dog.jpg?raw=true";
let location = "https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg";

https.get(location,function(response){
  response.pipe(fs.createWriteStream(__dirname+"/mydata.jpg"  ));
});