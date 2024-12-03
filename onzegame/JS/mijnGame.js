function preload() {
    achtergrondmuziek = loadSound("sounds/bensound-groovyhiphop.mp3");
    zand = loadImage("images/achtergrondzand.jpg");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    
    textFont("Monospace");
    textSize(44);
    textAlign(CENTER,CENTER);  
    frameRate(50);
    spel = new Spacers();
    spel.nieuwSpel();
}

function draw() {
  background(zand);
    if (spel.actief && !spel.levelGehaald) {
        spel.update();
    }
    spel.teken();
}

function keyTyped() {
  if (!spel.actief && !spel.levelGehaald) {
    // begin spel
    spel.actief = true;
    achtergrondmuziek.loop();
  }
  if ((spel.levelGehaald && !spel.afgelopen) && keyCode == ENTER) {
    // level gehaald tijdens het spel
    spel.nieuwLevel();
  }
  if ((spel.afgelopen) && keyCode == 32) {
    // einde spel => 32 = ENTER 
    achtergrondmuziek.stop();
    spel.nieuwSpel();
  }  
}