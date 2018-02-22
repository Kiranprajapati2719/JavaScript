class Shot{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.r = 2;
    this.del = false;
  }

  show(){
    push();
    noStroke();
    fill(250);
    ellipse(this.x, this.y, this.r, this.r * 4);
    pop();
  }

//Speed of shot
  move(){
   this.y -= 4;
  }

  hits(alien){
    var d = dist(this.x, this.y, alien.x, alien.y);
    return (d < (this.r + alien.r) )? true : false;
  }
  
}
