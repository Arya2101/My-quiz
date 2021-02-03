var GameState = 0;
var ContestantCount;
var db;
var quiz;
var question;
var contestant;
var allContestant;

function setup(){
  db = firebase.database();
  createCanvas(850,350);
 
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("blue");
 
  if(ContestantCount === 4){
    quiz.update(1);
  }
  if(GameState == 1){
    question.hide();
    background("yellow");
    quiz.play();
  }

}

