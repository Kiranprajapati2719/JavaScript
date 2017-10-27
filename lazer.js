function Lazer(x, y){
  this.x = x;
  this.y = y;
  this.r = 3;
  this.color = 'yellow';
}

Lazer.prototype.show = function(){
  push();
  fill(this.color);
  noStroke();
  ellipse(this.x, this.y, 2 * this.r);
  pop();
}  

Lazer.prototype.update = function (){
  this.y += 5;
}

Lazer.prototype.hits = function(ship){

  var d = dist(this.x, this.y, ship.x, ship.y); 
  
  if(d < (this.r + ship.r) ){
    return true;
  } else {
    return false;
  }
}
