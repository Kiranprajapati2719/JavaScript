function Ship(){
  this.x = width/2;
  this.y = height-30;
  this.r = 10;
  this.xdir = 0;
}

Ship.prototype.show = function(){
  // beginShape();
  push();
  stroke(255);
  noFill();
  // textAlign(CENTER);
  // text(shipName,this.x, this.y+2);
  pop();
  // endShape();

  // Alien moving limit needs to be redefined

  push(); 
  beginShape(); //TRIANGLE_STRIP
  noFill();
  // fill('light');
  // noStroke();
  stroke('lightblue');
  
  vertex(this.x,this.y-24);     //A Start_point 
  vertex(this.x-8,this.y-12);    //B
  vertex(this.x-8,this.y-8);    //C
  vertex(this.x-20,this.y);     //D
  vertex(this.x-22,this.y-2);   //E
  vertex(this.x-24,this.y);     //F
  vertex(this.x-24,this.y+8);   //G
  vertex(this.x-20,this.y+6);    //H
  vertex(this.x-8,this.y+4);    //I
  vertex(this.x-6,this.y+16);    //J 
  vertex(this.x-12,this.y+22);    //K
  vertex(this.x-5,this.y+22);     //L 1
  vertex(this.x-5,this.y+25);     //M 2
  vertex(this.x-2,this.y+25);     //N 3
  vertex(this.x-2,this.y+22);     //O 4

  vertex(this.x,this.y+22);    //P  End point 

  vertex(this.x+2,this.y+22);     //O
  vertex(this.x+2,this.y+25);     //N
  vertex(this.x+5,this.y+25);     //M
  vertex(this.x+5,this.y+22);     //L
  vertex(this.x+12,this.y+22);    //K
  vertex(this.x+6,this.y+16);    //J
  vertex(this.x+8,this.y+4);    //I
  vertex(this.x+20,this.y+6);    //H
  vertex(this.x+24,this.y+8);   //G
  vertex(this.x+24,this.y);     //F
  vertex(this.x+22,this.y-2);   //E
  vertex(this.x+20,this.y);     //D
  vertex(this.x+8,this.y-8);    //C
  vertex(this.x+8,this.y-12);    //B 
  endShape(CLOSE);
  pop();
}

Ship.prototype.update = function(){

  if(ship.x >= (width - 30)){
    this.x = (width - 30);
  } else if (ship.x <= 30){
    this.x = 30;
  } 
}

Ship.prototype.setDir = function(dir){
  this.xdir = dir;
}
   
Ship.prototype.move = function(){
  this.x += this.xdir * 5;
}
