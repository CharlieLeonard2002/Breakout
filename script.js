var balX = 50;
var balY = 50;

var SpeedX = 6;
var SpeedY = 3;

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // stel vulkleur in
  fill(100, 100, 255);

 // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');

  // teken een cirkel
  ellipse(balX,balY,80,80);

  balX = balX + SpeedX;
  balY = balY + SpeedY;

  if(balX >= 1280) {
      SpeedX = Speedx * -1;
      
  }
 if(balY >= 720)
  SpeedY 
}