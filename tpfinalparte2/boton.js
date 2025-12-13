   class Boton {
    
    constructor(x, y, ancho, alto, texto) {
        this.x = x;
         this.y = y;
        this.ancho = ancho;
        this.alto = alto;
         this.texto = texto;
    }

   
      dibujar() {
        rectMode(CORNER);
        fill(135, 36, 119); 
         stroke(205, 180, 95); 
        strokeWeight(2);


        rect(this.x, this.y, this.ancho, this.alto, 10); 

        fill(255); 
        textSize(24);
        textAlign(CENTER, CENTER);

        // centra el texto dentro del botón
        text(this.texto, this.x + this.ancho / 2, this.y + this.alto / 2);
    }

    // método para verificar si una coordenada (clic del ratón) está sobre el botón.
     fuePresionado(posx, posy) {
       
        let colisionX = posx > this.x && posx < this.x + this.ancho;
        let colisionY = posy > this.y && posy < this.y + this.alto;
        
        if (colisionX && colisionY) {
            return true;                     // Retorna TRUE si hay colisión.
        } else {
            return false;
        }
    }
}
