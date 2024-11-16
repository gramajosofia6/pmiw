class Enemigo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocidad = 2; //velocidad a la que bajan los zombis
  }

  dibujar() {
    image(zombieImage,this.x,this.y,60,60);
   
  }

  mover() {
    this.y += this.velocidad;  //actualiza la  posición de los zombis
  }
}
