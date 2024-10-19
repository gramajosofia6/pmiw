function LosCreditos() {
  background(0);
    textSize(35);
    text("         Creadoras del juego: \n Godoy Lourdes y Sofia Gramajo \n  \n          Creador de la serie: \n               Alex Hirsch \n  \n       Trabajo Practico Final \nProfesor: Matias Jauregui Lorda\n             PMIW - Comision 2 \n                     \n                      2024 ©", width / 3, height / 5);
    //boton back
    if (mouseX > 44 && mouseX < 40+ancho && mouseY > 55 && mouseY < 55+alto) {
      fill(246, 77, 150); //rosa
      cursor(HAND);
    } else {
      fill(38, 51, 70); //azul
      cursor(ARROW);
    }
    rect(40, 55, ancho, alto, 40);
    fill(255);
    textSize(25);
    text("volver al inicio", 65, 101);
  }
  
