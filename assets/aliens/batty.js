function Batty(x, y){
  this.x = x;
  this.y = y;
  this.r = 20;
  this.delx = 1;
  this.color = 'lightcoral';
  this.val = 300;
  this.life = 2;
} 

Batty.prototype.show = function(){

  //Double the vertexes of body
  //Body
  push();
  beginShape();
  fill(this.color);  
  noStroke();
  vertex(this.x-8, this.y-8);//a
  vertex(this.x-12, this.y-4);//b
  vertex(this.x-20, this.y-6);//c
  vertex(this.x-18, this.y+4);//d
  vertex(this.x-10, this.y+8);//e
  vertex(this.x-16, this.y+14);//f
  vertex(this.x-12, this.y+16);//g
  vertex(this.x-6, this.y+8);//h
  //another set
  vertex(this.x+6, this.y+8);//h'
  vertex(this.x+12, this.y+16);//g'
  vertex(this.x+16, this.y+14);//f'
  vertex(this.x+10, this.y+8);//e'
  vertex(this.x+18, this.y+4);//d'
  vertex(this.x+20, this.y-6);//c'
  vertex(this.x+12, this.y-4);//b'
  vertex(this.x+8, this.y-8);//a'
  endShape(CLOSE);
  pop();
  //Eyes
  push();
  beginShape();
  rectMode(CENTER);
  fill(45);
  noStroke();
  rect(this.x-4, this.y, 3, 3);
  rect(this.x+4, this.y, 3, 3);
  endShape();
  pop();
}

Batty.prototype.move = function(){
  this.x = this.x + this.delx;
}

Batty.prototype.update = function(){
  this.delx *= -1; //moves left and right
  this.y += this.r * 1.5; //30 is added
}  

 