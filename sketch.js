var canvas;
var database;
var gameState = 0, contestantCount, quiz, question, person, allPeople,Bgmusic
var backgroundColor = "lightblue";


function preload(){
  Bgmusic=loadSound("Backgroundmusic.mp3")
}
function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background(backgroundColor);
 

  Bgmusic.play()
//remember to CALL play() here with some expression or condition
//
drawSprites()
}
