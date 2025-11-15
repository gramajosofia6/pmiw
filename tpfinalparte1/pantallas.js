 function dibujarP (numP) { //funcion con parametros para dibujar todas las pantallas de la aventura grafica
   if (numP < imagenes.length) {
    image(imagenes[numP], 0, 0, 640, 480);
   } //PORTADA
  if (numP == 0) {
     fill(255);
     stroke(247, 200, 25);
    strokeWeight(2);
     textSize(45);
     textAlign(CENTER, CENTER);
    text("La lámpara de Aladino", width/2, height/5);
      textSize(20);
    fill(59, 17, 99);
     stroke(255);
    strokeWeight (2);
     text("Presiona la tecla 'ENTER' para activar sonido ", 322, 420);
     text("Presiona la tecla 'P' para pausar sonido", 320, 450);

    //defino los botones de la portada
     dibujarBoton(500, 420, 90, 30, "Comenzar");
     dibujarBoton(50, 420, 90, 30, "Creditos");
   } else if (numP === 100) {
     creditos(); //mostrar pantalla creditos

    // pantallas del 1 a 19
   } else if (numP >= 1 && numP <= 19) {
     if (numP === 4) {
       dibujarBoton(100, 410, 180, 30, "entregar la lampara");
       dibujarBoton(400, 410, 180, 30, "negarse a entregarla");
     } else if (numP === 5) {
    } else if (numP === 6) {
     } else if (numP === 7) {
    } else if (numP === 8) {
       dibujarBoton(200, 410, 90, 30, "si");
      dibujarBoton(400, 410, 180, 30, "negarse por las dudas");
     } else if (numP === 9) {
    } else if (numP === 11) {
       dibujarBoton(100, 410, 180, 30, "riquezas desmedidas");
      dibujarBoton(400, 410, 180, 30, "prosperidad moderada");
     } else if (numP === 13) {
    } else if (numP === 14) {
     } else if (numP === 15) {
       dibujarBoton(100, 410, 180, 30, "enfrentarlo con violencia");
       dibujarBoton(400, 410, 180, 30, "engañarlo con astucia");
    } else if (numP === 16) {
     } else if (numP === 17) {
    } else if (numP === 18) {
     } else if (numP === 19) {
     }

    // POSIBLES FINALES
    //solo en estas pantallas aparecen los botones "reiniciar"
    if (numP == 10 || numP == 12 || numP == 18 || numP == 19) {
      dibujarBoton(500, 420, 90, 30, "Reiniciar");
    }
   }
  //  LÓGICA DE DIÁLOGOS
  //  DIBUJAR DIÁLOGO (aparece en todas las pantallas de historia 1-19)
  if (numP >= 1 && numP <= 19) {
     dibujarDialogo(dialogos[numP]);
  }

  // BOTÓN SIGUIENTE
  // el botón siguiente solo se dibuja si NO es una decisión y NO es un final
   if (
    numP >= 1 && numP <= 19 &&
     numP !== 4 && numP !== 8 && numP !== 11 && numP !== 15 &&
    numP !== 10 && numP !== 12 && numP !== 18 && numP !== 19
      ) {
    dibujarBoton(500, 420, 90, 30, "Siguiente");
  }
 }

  function dibujarDialogo(texto) { //funcion con parametros para mostrar los textos de cada pantalla de la aventura
  // Si el texto para este estado no existe (es una línea vacía en el .txt) no hace nada
  if (!texto) return;
  // coordeanadas para la cajita que contiene los textos
   let posX = 45;
   let posY = height - 210;
  let alto = width - 100;
   let ancho = 110;
  // estilo de la caja
   fill(0, 0, 0, 200); // negro semi-transparente
  rect(posX, posY, alto, ancho, 10); // el 10 se agrego para dar el efecto de esquinas redondeadas
    fill(255);
  textSize(18);
  // LEFT, TOP así se lee de izquierda a derecha
   textAlign(LEFT, TOP);
  // esto es para dibujar el texto dentro de la caja con un margen interno
    let margen = 15;
   text(texto,
    posX + margen,
     posY + margen,
     alto - margen * 2,
     ancho - margen * 2 // puse un límite para el texto
    );
 }

  function reiniciarPrograma() {
  estado = 0; //comienza desde la portada
  sonido.stop(); //detiene el sonido
  }




























 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
