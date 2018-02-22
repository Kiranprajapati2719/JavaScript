class Alien{
  constructor(x, y, name){
    this.name = name;
    this.x = x;
    this.y = y;
    this.r = 20;
    this.delx = 1;

    if(this.name == 'Pointy'){
      this.color = 'lightgreen';
      this.val = 500;
      this.life = 3;
    } else if(this.name == 'Batty'){
      this.color = 'lightcoral';
      this.val = 300;
      this.life = 2;
    } else { //Turty
      this.color = 'aquamarine';
      this.val = 100;
      this.life = 1;
    }
  }

  show(){
    if(this.name == 'Pointy'){
      //Body
      push();
      beginShape();
      fill(this.color);
      noStroke();
      vertex(this.x-8, this.y-8);//a
      vertex(this.x-12,this.y-4);//b
      vertex(this.x-12,this.y-12);//c
      vertex(this.x-18,this.y+4);//d
      vertex(this.x-10,this.y+8);//e
      vertex(this.x-16,this.y+14);//f
      vertex(this.x-12,this.y+16);//g
      vertex(this.x-6, this.y+8);//h
      //another set
      vertex(this.x+6, this.y+8);//h'
      vertex(this.x+12,this.y+16);//g'
      vertex(this.x+16,this.y+14);//f'
      vertex(this.x+10,this.y+8);//e'
      vertex(this.x+18,this.y+4);//d'
      vertex(this.x+12,this.y-12);//c'
      vertex(this.x+12,this.y-4);//b'
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
    } else if (this.name == 'Batty'){
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
    } else {
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
  }

  move(){
    this.x = this.x + this.delx;
  }

  update(){
    if(this.x > (width - this.r) || this.x < this.r){
      this.delx *= -1;        //moves left and right
      this.y += this.r * 1.5; //3 is added
    }
  }
}
