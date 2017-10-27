function Shot(x, y){
  this.x = x;
  this.y = y;
  this.r = 2;
  this.del = false;
}

Shot.prototype.show = function(){
  push();
  noStroke();
  fill(250);
  // rectMode(CENTER);
  ellipse(this.x, this.y, this.r, this.r * 4);
  pop();
}
  
//Speed of shot
Shot.prototype.move = function(){
  this.y -= 4;
}

Shot.prototype.hits = function(alien){

  var d = dist(this.x, this.y, alien.x, alien.y); 
  
  if(d < (this.r + alien.r) ){
    return true;
  } else {
    return false;
  }
}


