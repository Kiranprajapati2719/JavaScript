//Global heroes
var ship;
var aliens = [];
var shots = [];
var lazers = [];
var alienNum = 47; 
var xoff1 = 0;
var xoff2 = 100;
var score = 0;

function setup() {
 
  initiate();
}

function draw() {

  var offValue = 0.01;

  background(45);

  //Score

  push();
  fill(255);
  noStroke();
  textSize(16);
  text('Invader B', width/2 -40, 25);
  text('Score', 480, 25);
  textAlign(RIGHT);
  text(score, 580, 25);
  pop();

  //Ship is drawn and updated
  
  ship.update();
  ship.show();
  ship.move();

  //Aliens are drawn and updated

  for(let i = 0; i < aliens.length; i++){
    aliens[i].move();
    aliens[i].show();
    
    //Edges checker

    if(aliens[i].x > (width - aliens[i].r) || aliens[i].x < aliens[i].r){
      aliens[i].update();
    }
  }

  //Lazers are drawn and updated

  for (var i = 0; i < lazers.length; i++) {
    lazers[i].show();
    lazers[i].update();
  }

  //Shots are drawn and hit is checked

  for(let i = 0; i < shots.length; i++){

    shots[i].move();
    shots[i].show();
    
    for(let j = 0; j < aliens.length; j++){
      
      if(shots[i].hits(aliens[j])){
        shots[i].del = true;
        aliens[j].life--;
      }    
    }
  }

  //Lazer are checked with ship

  for(let i = 0; i < lazers.length; i++){    

    if(lazers[i].hits(ship)){
      //GameOver
      gameOver();
    }
  }

  // Shots are deleted

  for(let i = shots.length-1; i >= 0; i--){
    if(shots[i].del){
      shots.splice(i, 1); //delete shots that hits an alien
    } else if (shots[i].y < 0){
      shots.splice(i, 1); // delete overflown shots
    }
  }  

  // Aliens are deleted

  for(let j = aliens.length-1; j >= 0; j--){
    if(aliens[j].life === 0){
      score += aliens[j].val;
      aliens.splice(j, 1);
    }
  } 

  // Lazers are deleted

  for(let k = lazers.length-1; k >= 0; k--){
    if(lazers[k].y > height){
      lazers.splice(k, 1);
    }
  } 

  alienShoot();

  xoff1 += offValue;
  xoff2 += offValue;

} //draw

//  Alien Lazer generation

function alienShoot(){
  if(aliens.length > 10){

    if(frameCount % 50 == 0){
      alienLazer(aliens.length - 1);//last
    } else if(frameCount % 70 == 0){
      alienLazer(aliens.length - 3); //m1
    }else if(frameCount % 90 == 0){
      alienLazer(aliens.length - 5); //m2
    }else if((frameCount % 40 == 0)){
      alienLazer(aliens.length - 7); //first
    }else if((frameCount % 30 == 0)){
      alienLazer(aliens.length - 9); //first
    }

    //check gameOver
    for (var i = 0; i < aliens.length; i++){
      if(aliens[i].y > 350){
       gameOver();
      }
    }
  } else {
    //make alien turn to bumble bee 
    bumbleAlien();
    for(i = 0; i < aliens.length; i++){
      if(frameCount % 73 == 0){
       alienLazer(i);
      }
    }
  }
}

function alienLazer(i){
  var lazer = new Lazer(aliens[i].x, aliens[i].y);
  lazers.push(lazer); 
}

function bumbleAlien() {
  
  let range = 50;

  //clear default movement
  for (var i = 0; i < aliens.length; i++) {
    aliens[i].delx = 0;
  }

  //noiseBee
  for (var i = 0; i < aliens.length; i++) {
    aliens[i].x = map(noise(xoff1 + i*3), 0, 1, -range, width+range);
    aliens[i].y = map(noise(xoff2 + i*3), 0, 1, range, height-range);
  }
}

//Gameover
function gameOver() {
  noLoop();
}

//  Player customization and controller

function keyReleased(){
  if(key != ' '){
    ship.setDir(0);
  }
}

function keyPressed(){
  if( key === ' '){
    if(shots.length < 3){
      var bullet = new Shot(ship.x, ship.y-5);
      shots.push(bullet);
    }
  }

  if(keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if(keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}

function initiate() {

  createCanvas(600,400);
  angleMode(DEGREES);

  //Ship and Aliens are created
  
  ship = new Ship();

  var dX = 20; //0 + 20 = this.r of aliens 
  var dX2 = width - 60; //600-60 = width - 60
  var dX3 = 50; //gap from left screen
  // var dX4 = wi
  for(let i = 0; i < alienNum; i++){

    if(i < 12){
      //max no. of aliens 12
      aliens[i] = new Pointy(dX, 50);
      dX += 50;
    } else if(i < 23){
      //max no. of aliens 11
      aliens[i] = new Batty(dX2, 80);
      aliens[i].delx = -1;
      dX2 -= 50; 
    } else if(i < 35){
      //max no. of aliens 11
      aliens[i] = new Turty(dX3, 110);
      dX3 += 45;
      dX2 = width - 30;
    } else {
      //max no. of aliens 11
      aliens[i] = new Turty(dX2, 140);
      aliens[i].delx = -1;
      dX2 -= 45; 
    }
  }
}
