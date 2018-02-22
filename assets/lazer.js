class Lazer{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.r1 = 3;
    this.r2 =  3;
    this.color = 'yellow';
  }

  show(){
    push();
    fill(255,200);
    noStroke();
    ellipse(this.x, this.y, 2*this.r2, 2 * this.r1);
    pop();
  }

  update(){
    this.y += 5;
  }

  hits(){
    var d = dist(this.x, this.y, ship.x, ship.y);
    return (d < (this.r1 + ship.r) )? true : false;
  }
}
