function Turty(x, y){
  this.x = x;
  this.y = y;
  this.r = 20;
  this.delx = 1;
  this.color = 'aquamarine';
  this.val = 100;
  this.life = 1;
} 

Turty.prototype.show = function(){
  //Body
  push();
  beginShape();  
  fill(this.color);  
  noStroke();
  vertex(this.x-6, this.y-8);//a 
  vertex(this.x-18, this.y+4);//b 
  vertex(this.x-10, this.y+8);//c 
  vertex(this.x-16, this.y+14);//d 
  vertex(this.x-12, this.y+16);//e 
  vertex(this.x-6, this.y+8);//f 
  //another set
  vertex(this.x+6, this.y+8);//f'
  vertex(this.x+12, this.y+16);//e'
  vertex(this.x+16, this.y+14);//d' 
  vertex(this.x+10, this.y+8);//c'
  vertex(this.x+18, this.y+4);//b'
  vertex(this.x+6, this.y-8);//a' 
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

Turty.prototype.move = function(){
  this.x = this.x + this.delx;
}

Turty.prototype.update = function(){
  this.delx *= -1; //moves left and right
  this.y += this.r * 1.5; //30 is added
}  

 