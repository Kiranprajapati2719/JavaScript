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
  noCursor();
  // alert('CONTROLS: \n\n Use the left and right arrow to move the airship \n Press the space bar to shoot lazer');
   // background-color: #000
}

function draw(offValue = 0.01) {

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
    aliens[i].update();
    aliens[i].move();
    aliens[i].show();
  }

  //Lazers are drawn and updated

  for (let i = 0; i < lazers.length; i++) {
    //Lazers are deleted
    if(lazers[i].hits(ship)){
      //GameOver
      gameOver();
    }

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

  if(ship.y > -50){

    if(score >= 11600){
      // console.log('Hello');
      ship.y -= 2;
    }
  }
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

    for(let i = 0; i < aliens.length; i++){
      if(frameCount % 73 == 0){
	//lazers[i].
       alienLazer(i);
       lazers[i].color = 'lightblue';
       lazers[i].r1 = 10;
       lazers[i].r2 = 1;
      }
    }
  }
}

function alienLazer(i){
  var lazer = new Lazer(aliens[i].x, aliens[i].y);
  lazers.push(lazer); 
}

function bumbleAlien(range = 50) {
  
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
  
  let maxShots = 3;

  //Shoot Key

  if( key === ' '){
    if(shots.length < maxShots){
      var bullet = new Shot(ship.x, ship.y-5);
      shots.push(bullet);
    }
  }
  //Move Keys

  if(keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if(keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}

function initiate() {
  // var parg1 = createP('L');
  // parg1.style('display','inline-block');
  // parg1.style('width','20%');
  // parg1.style('background','red');
  // var button = createButton('Retry');
  // button.style('margin-top','420px');
  // button.style('margin-left','auto');
  // var wid = windowWidth*0.6;
  var canv = createCanvas(600, 400);
  var wid = (windowWidth/2) - 300; 
  var hei = (windowHeight/2) - 200;
  canv.position(wid,hei);
  // canv.style('margin-right','auto');
  // canv.style('margin-left','25%');
  // canv.style('margin-top','20px');
  // canv.style('margin-left','20%');
  // var parg2 = createP('R');
  // parg2.style('display','inline-block');
  // parg2.style('width','20%');
  // parg2.style('background','blue');
  angleMode(DEGREES);
  rectMode(CENTER);

  //Ship and Aliens are created
  
  ship = new Ship();

  var dX = 20; //0 + 20 = this.r of aliens 
  var dX2 = width - 60; //600-60 = width - 60
  var dX3 = 50; //gap from left screen
  // var dX4 = wi
  for(let i = 0; i < alienNum; i++){

    if(i < 12){
      //max no. of aliens 12 pointy
      aliens[i] = new Alien(dX, 50, 'Pointy'); 
      dX += 50;
    } else if(i < 23){
      //max no. of aliens 11 batty
      aliens[i] = new Alien(dX2, 80, 'Batty');
      aliens[i].delx = -1;
      dX2 -= 50; 
    } else if(i < 35){
      //max no. of aliens 11 turty
      aliens[i] = new Alien(dX3, 110);
      dX3 += 45;
      dX2 = width - 30;
    } else {
      //max no. of aliens 11 turty
      aliens[i] = new Alien(dX2, 140);
      aliens[i].delx = -1;
      dX2 -= 45; 
    }
  }
}

function frame2() {
  // body...
  var scr = createElement('div','Hello');
  scr.style('width','600px');
  scr.position('100','600');
  scr.html('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
}