function Ship(){
  this.x = width/2;
  this.y = height-5;
  this.r = 12;
  this.xdir = 0;
}

Ship.prototype.show = function(){
  
  //Shape
  // push();
  // noFill();
  // stroke(255);
  // ellipse(this.x, this.y -10, this.r);
  beginShape();
  push();
  fill(255);
  noStroke();
  vertex(this.x-20, this.y);//n
  vertex(this.x, this.y-20);//b
  vertex(this.x+10, this.y-10);//c
  vertex(this.x+20, this.y);//o
  pop();
  endShape(CLOSE);
}

Ship.prototype.update = function(){

  if(ship.x >= (width - 20)){
    this.x = (width - 20);
  } else if (ship.x <= 20){
    this.x = 20;
  } 
}

Ship.prototype.setDir = function(dir){
  this.xdir = dir;
}
   
Ship.prototype.move = function(){
  this.x += this.xdir * 5;
}
