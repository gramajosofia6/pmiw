class Bala {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocidad = -5;
  }

  dibujar() {
    fill(0, 0, 255);
    image(bala,this.x,this.y, 30, 30);
  }

  mover() {
    this.y += this.velocidad;
  }
}
