//sofia Gramajo
//comision 2
//https://youtu.be/-hopE8HGAfw
let numCuadrados = 7;
let tamanoCuadrado = 400 / numCuadrados; // Tamaño inicial de cada cuadrado
let tamanoIncremento = 10; // Incremento de tamaño cuando se hace clic
let desplazamientoX = 400; // Punto de inicio en el eje X
let numFilas = 400 / tamanoCuadrado; // Número de filas
let diametroCirculo = 15; // Diámetro inicial de los círculos
let incrementoCirculo = 5; // Incremento o decremento del diámetro de los círculos
let colores;

function preload () {
  img=loadImage ("data/ilusion2.jpg");
}


function setup() {
  createCanvas (800, 400);
  colores = color(random (255),random (113),random(53),random(75));
}


function draw() {
  background (0);
  image(img, 0, 0, 400, 400);

  for (let fila = 0; fila < numFilas; fila++) {
    for (let i = 0; i < numCuadrados; i++) {
       let x = desplazamientoX + i * tamanoCuadrado;
      let y = fila * tamanoCuadrado;

      grillas (x, y, tamanoCuadrado);
      dibujarCirculos(x, y, tamanoCuadrado, diametroCirculo);
    }
  }
   fill(0);
  if (key==='r') {
    colores=0;
    diametroCirculo=15;
    redraw();
  }
}
   
  
function grillas( x, y, tamano) {
  // Dibuja el borde blanco 
  stroke(160);
  strokeWeight(12);
  fill (colores);
  rect(x, y, tamano, tamano);
}


function dibujarCirculos( x, y, tamano, diametro) {
  // Dibuja los círculos en las esquinas del cuadrado
  fill(255); // Círculos blancos
  noStroke();

  // Esquina superior izquierda
  ellipse(x, y, diametro, diametro);

  // Esquina superior derecha
  ellipse(x + tamano, y, diametro, diametro);

  // Esquina inferior izquierda
  ellipse(x, y + tamano, diametro, diametro);

  // Esquina inferior derecha
  ellipse(x + tamano, y + tamano, diametro, diametro);
}


function  keyPressed() {
  // Agranda los círculos cuando se presiona la tecla "t"
  if (key === 't') {
    diametroCirculo += incrementoCirculo;
  }

  // Achica los círculos cuando se presiona la tecla "y"
  if (key === 'y') {
    diametroCirculo -= incrementoCirculo;

    // Asegura que el diámetro no sea menor que 0
    if (diametroCirculo < 0) {
      diametroCirculo = 0;
    }
  }
}

 function  mousePressed() {
  colores = color(random (255),random (113),random(53),random(75));
}
