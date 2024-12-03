/*  **********************************************************
    **       BEGIN klasse Hero bij voorbeeld Levels         **
    ********************************************************** */


class Hero {
  constructor(l) {
      this.x = 100;
      this.y = random(100,canvas.height - 100);
    
      this.v = 3 + l;
      this.kleur = 'red';
  }

  beweeg() {
    if(keyIsDown(DOWN_ARROW)) {
        this.y += this.v;
    }
    if(keyIsDown(UP_ARROW)) {
        this.y -= this.v;
    }
    if(keyIsDown(LEFT_ARROW)) {
        this.x -= this.v;
    }
    if(keyIsDown(RIGHT_ARROW)) {
        this.x += this.v;
    }       
 
  }

  teken() {
      push();
      noStroke();
      fill(this.kleur);
      rect(this.x,this.y,60,60);
      pop();
  }
}

/*  **********************************************************
    **       EINDE klasse Hero bij voorbeeld Levels         **
    ********************************************************** */