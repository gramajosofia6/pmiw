function Inicio() {
  background(0);
  image(imagenes[1], 0, 0, 640, 480);
  textFont(fuente);
  textSize(70);
  fill(119, 167, 65);
  text("KARAOKE ZOMBIE", 100, 120);
  fill(38, 51, 70);
  rect(90, 400, 120, 50, 40);
  rect(430, 400, 120, 50, 40);
  stroke(0);
  fill(255);
  textSize(20);
  text("Jugar", 125, 430);
  text("Creditos", 457, 430);
  
 
  
}

function Creditos() {
  background(0);
  textSize(25);
  fill(255);
  text("Creadoras del juego: \n Godoy Lourdes y Sofia Gramajo \n \n Creador de la serie: \n Alex Hirsch \n \n Trabajo Practico Final \nProfesor: Matias Jauregui Lorda\n PMIW - Comision 2 \n \n 2024", width / 4, height / 4);
  fill(38, 51, 70);
  rect(30, 30, 150, 50, 40);
  fill(255);
  textSize(20);
  text("volver al inicio", 45, 60);
}

function Jugar() {
  image(imagenes[2], 0, 0, 640, 480);
  textSize(20);
  text("Dipper despierta a los zombies en Gravity Falls mientras Mabel \n está en una fiesta de karaoke. Los gemelos descubren que solo \n las perfectas armonias pueden derrotar a los zombies, y Mabel \n no tiene mejor idea que comenzar el karaoke, algo que Dipper \n               odia y se niega a hacer.¿Que hará Dipper? \n             ¿Se unira al karaoke de Mabel y el Tio Stan? \n                  ¿Podran terminar con los zombies?\n \n¡Ayuda a los gemelos misterio, y al Tio Stan, a terminar con esto \n              y poder seguir con su fiesta de karaoke!", 55, 500-miVariable*1);
  fill(38, 51, 70); 
  rect(30, 30, 150, 50, 40);
  fill(255);
  textSize(20);
  text("volver al inicio", 45, 60);
  if (frameCount / 60 >= 6) {
    text("presiona la tecla 'enter' para comenzar", 150, 450);
  }
}

function Dialogos() {
  image(imagenes[3], 0, 0, 640, 480);
  // Muestra el dialogo
  fill(255);
  textSize(20);
  textAlign(LEFT);
  textWrap(WORD);
  text(dialogos[indiceDialogo], 70, 250, 500);
  // Avanza al siguiente texto después de 3 segundos
  tiempoDialogo++;
  if (tiempoDialogo >= 120) {
    indiceDialogo++;
    tiempoDialogo = 0;
  }
  // Muestra las opciones después del último texto
  if (indiceDialogo >= dialogos.length) {
    fill(38, 51, 70);
    rect(100, 400, 120, 50, 100);
    rect(430, 400, 120, 50, 80);
    stroke(0);
    fill(255);
    textSize(20);
    text("Cantar con Mabel y el tio Stan", 50, 430);
    text("Llamar Agentes", 430, 430);
  }
}

function CantarMabelyDipper() {
  image(imagenes[4], 0, 0, 640, 480);
  fill(255, 0, 0);
  rect(180, 150, 380, 180);
  fill(255);
   text("             Sus armonías no son suficientemente  \n     poderosas para poder  derrotar a los zombies. \n                  Solo te quedan ¡10 SEGUNDOS!\n                    sino te convertiras en..... \n                            ¡¡UNO DE ELLOS!!", 170, 200);    
  tiempoCantar++;
  if (tiempoCantar>= 600) {  //600 frames igual a 10 seg
    pantalla = "victoria";
  }
}

function Victoria() {
  //final feliz
  if (empezoSonidoGanar === false){
    sonidoGanar.play();
    empezoSonidoGanar = true;
  }
  image(imagenes[6], 0, 0, 640, 480);
  fill(0, 255, 0);
  rect(180, 150, 380, 180);
  fill(255);
  text("¡FELICIDADES! pudiste derrotar \n a los zombies justo a tiempo,\n ahora es momento de festejar", 255, 220);
  text("presiona la tecla 'v' para volver a jugar", 200, 450);
}




function Perder() {
  //final malo 1
  if (empezoSonidoPerder === false){
    sonidoPerder.play();
    empezoSonidoPerder = true;
  }
  image(imagenes[7], 0, 0, 640, 480);
  fill(255, 0, 0);
  rect(180, 150, 380, 180);
  fill(255);
  text("lamentablemente no llegaste a tiempo a derrotar todos los zombies", 255, 220);
  text("presiona la tecla 'v' para volver a jugar", 200, 450);
 
}

function Agentes() {
  //final malo 2
  if (empezoSonidoPerder === false){
    sonidoPerder.play();
    empezoSonidoPerder = true;
  }
  image(imagenes[5], 0, 0, 640, 480);
  fill(255, 0, 0);
  rect(180, 150, 360, 150);
  fill(255);
  text("Perdiste el tiempo llamando a los Agentes,\n   y ellos no pudieron ayudarte porque \n       ¡¡fueron convertidos en zombies!!", 200, 200);
  text("presiona la tecla 'v' para volver a jugar", 200, 450);
}


function reiniciarJuego() {
  pantalla = "inicio";
  indiceDialogo = 0;
  tiempoDialogo = 0;
  empezoSonidoGanar = false;
  empezoSonidoPerder = false;
 
 
}
