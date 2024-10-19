function Jueguito () {
  background(0);
  fill(255);
  image(fotoSinopsis, 240, 40, 880, 560);
  textSize(24);
  text("Dipper despierta a los zombies en Gravity Falls mientras Mabel está en una fiesta de karaoke.\n Los gemelos descubren que solo las perfectas armonias pueden derrotar a los zombies, y \n Mabel no tiene mejor idea que comenzar el karaoke, algo que Dipper odia y se niega a hacer  \n¿Que hará Dipper? ¿Se unira al karaoke de Mabel y el Tio Stan? ¿Podran terminar con los zombies?\n                          \n¡Ayuda a los gemelos misterio, y al Tio Stan, a terminar con esto y poder seguir con su fiesta!", 230, 700-miVariable*2);
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
  //boton start
  if ( frameCount/60 >= 4 )
    text("presiona la tecla enter para comenzar", 500, 570);
}
function Dialogos() {
  background(0);
  image(hablan, 240, 40, 880, 560);

  // Muestra el dialogo
  fill(255);
  text(dialogos[indiceDialogo], 170, 150);

  // Avanza al siguiente texto después de 3 segundos
  tiempoDialogo++;
  if (tiempoDialogo >= 120) {
    indiceDialogo++;
    tiempoDialogo = 0;
  }
  // Muestra las opciones después del último texto
  if (indiceDialogo >= dialogos.length) {

    strokeWeight(2);
    stroke(255);
    fill(247, 107, 229); //color rosa
    text("Cantar con Mabel y el Tio Stan", 100, 527);
    text("Llamar a los agentes", 1030, 527);
    // Cambia el cursor según la opción seleccionada
    if (mouseX > 200 && mouseX < 500 && mouseY > 500 && mouseY < 550) {
      cursor(HAND);
    } else if (mouseX > 900 && mouseX < 1200 && mouseY > 500 && mouseY < 550) {
      cursor(HAND);
    } else {
      cursor(ARROW);
    }
  }
}
function Cantar() {
  background(0);
  image(cantando, 240, 40, 880, 560);
  stroke(0);
  fill(255);

  // Mostrar diálogo
  text(dialogosCantar[indiceDialogoCantar], 170, 150);

  // Avance de diálogos
  tiempoDialogoCantar++;
  if (tiempoDialogoCantar >= 90) {
    indiceDialogoCantar++;
    tiempoDialogoCantar = 0;
  }

  ////juego//////
  //segunda decision
  if (frameCount / 60 >= 45) {
    //despues de 45 segundos aparece la 2da decision
    strokeWeight(2);
    stroke(255);
    fill(247, 107, 229);  //color rosa
    text("Usar megáfono para aumentar el ruido", 80, 527);
    text("Utilizar dispositivo de resonancia", 980, 527);

    if (mouseX > 200 && mouseX < 500 && mouseY > 500 && mouseY < 550) {
      cursor(HAND);
    } else if (mouseX > 900 && mouseX < 1200 && mouseY > 500 && mouseY < 550) {
      cursor(HAND);
    } else {
      cursor(ARROW);
    }
  }

  // Aviso
  if (indiceDialogoCantar >= 7 && indiceDialogoCantar < 8) {  //esto esta para que el cartel de aviso no se superponga con los dialogos
    strokeWeight(2);
    stroke(255);
    fill(255, 0, 0);
    rect(400, 165, 575, 190, );
    stroke(0);
    fill(255);
    text("   Sus armonías no son suficientemente poderosas \n               para poder  derrotar a los zombies. \n                  Solo te quedan ¡10 SEGUNDOS!\n                    sino te convertiras en... \n                            UNO DE ELLOS!!", 440, 200);
  }
}
function Megafono() { //usar el megafono lleva al final bueno :)
  background(0);
  image(zombieSufre, 240, 40, 880, 560);
  ////juego/////
}
//final malo 1
function Agentes () {
   background(0);
  textSize(25);
  image(agentes, 240, 40, 880, 560);
  stroke(0);
  fill(255);
  text(dialogosAgentes[indiceDialogosAgentes], 500, 100);
  tiempoDialogosAgentes++;
  if (tiempoDialogosAgentes >= 60) {
    indiceDialogosAgentes++;
    tiempoDialogosAgentes = 0;
  }

  if (indiceDialogosAgentes >= 15) {
    sonidoPerder.play();
    strokeWeight(2);
    stroke(255);
    fill(255, 0, 0);
    rect(400, 165, 575, 190, );
    stroke(0);
    fill(255);
    text("Los agentes nunca atendieron, \n el Tio Stan, Mabel y Dipper \n ¡fueron convertidos en zombies! ", 440, 200);

    if (mouseX > 44 && mouseX < 40 + ancho && mouseY > 55 && mouseY < 55 + alto) {
      fill(246, 77, 150); //rosa
      cursor(HAND);
    } else {
      fill(38, 51, 70); //azul
      cursor(ARROW);
    }
    rect(40, 55, ancho, alto, 40);
    fill(255);
    textSize(25);
    text("volver a jugar", 65, 101);
  }
}


//}
//final malo 2
function DispoResonancia() {
  sonidoPerder.play();

  background(0);
  strokeWeight(2);
  stroke(255);
  fill(255, 0, 0);
  rect(400, 165, 575, 190, );
  stroke(0);
  fill(255);
  text("El dispositivo no funcionó y explotó AHORA ERES UN ZOMBIE CARBONIZADO", 440, 200);

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
  text("volver a jugar", 65, 101);
}
//final bueno
function LindoFinal() {
  sonidoGanar.play();

  background(0);
  image(finalFeliz, 240, 40, 880, 560);

  strokeWeight(2);
  stroke(255);
  fill(0, 128, 0);
  rect(400, 165, 575, 190, );
  stroke(0);
  fill(255);
  text("¡Enhorabuena! Has eliminado a todos los zombies, la cabaña esta en paz. ", 440, 200);

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
  text("volver a jugar", 65, 101);
}
