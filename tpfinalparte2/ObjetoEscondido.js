  class ObjetoEscondido { 
   
    constructor(x, y, ancho, alto, indiceImagen) { 
        this.x = x;         
         this.y = y;         
        this.ancho = ancho; // ancho del área de colisión
        this.alto = alto;   // alto  -------------------
         this.indiceImagen = indiceImagen; 
        this.encontrado = false; // Eestado true  si el jugador hizo clic, FALSE si no.
    }

    // metodo para verificar si el clic ocurrio dentro deu area
         fueClickeado(posx, posy) {
        // solo puede ser clickeado si todavía no fue encontrado
        if (!this.encontrado) {
            return (
                posx > this.x && 
                posx < this.x + this.ancho &&
                posy > this.y && 
                posy < this.y + this.alto
            );
        }
        // si ya fue encontrado, devuelve false 
        return false;
    }
}
