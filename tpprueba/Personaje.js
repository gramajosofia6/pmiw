class Personaje {
  constructor() {
    this.x = 320;
    this.y = 410;
    this.vida = 3;
  }

  dibujar() {
   
    image(dipperImage,this.x, this.y, 50, 50);
  }
}
