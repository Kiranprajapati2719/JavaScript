function Lazer(x, y){
  this.x = x;
  this.y = y;
  this.r1 = 3;
  this.r2 =  3;
  this.color = 'yellow';
}

Lazer.prototype.show = function(){
  push();
  fill(255,200);
  noStroke();
  ellipse(this.x, this.y, 2*this.r2, 2 * this.r1);
  pop();
}  

Lazer.prototype.update = function (){
  this.y += 5;
}

Lazer.prototype.hits = function(ship){

  var d = dist(this.x, this.y, ship.x, ship.y); 
  
  if(d < (this.r1 + ship.r) ){
    return true;
  } else {
    return false;
  }
}
