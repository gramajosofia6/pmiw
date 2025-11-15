//Sofia Gramajo 119051/4
//Lourdes Godoy 119044/5
// video:https://youtu.be/YQuJMrZqyOg?si=CiMMBCZZpdvLzB3Y
let estado = 0;
let imagenes = []; // arreglo de imágenes
let dialogos = []; // arreglo para los texto
let sonido; //variable para sonido
let fuente; //variable para la fuente para el texto


 function preload() {
  for (let i = 0; i < 21; i++) {
    imagenes[i] = loadImage('data/imagen' + i + '.jpg');
  }
   soundFormats('mp3', 'wav'); // formatos de sonido admitidos
   sonido = loadSound('data/sonidoAmbiente.wav'); //subida de sonido
   dialogos = loadStrings('data/dialogos.txt'); //subida de fuente para el texto
 }

  function setup() {
  createCanvas(640, 480);
  fuente = loadFont ('data/Schoolbell-Regular.ttf');
  textFont(fuente);
  sonido.loop();
  }
 function draw() {
   background(0);
   dibujarP(estado);
  }

  function mousePressed() {
  //TODOS LOS POSIBLES FINALES
   if ((estado == 10 || estado == 12 || estado === 18 || estado === 19) && clickEnBoton(500, 420, 90, 30)) {
     reiniciarPrograma();
     return;
   }
  // créditos en la portada
    if (estado == 0 && clickEnBoton(50, 420, 90, 30)) {
      estado = 100;
     return;
   }
  // volver de creditos a la portada
  if (estado === 100 && clickEnBoton (500, 420, 90, 30)) {
    estado = 0;
    return;
  }

  //PANTALLAS DE DECISIÓN
  if (estado == 4) { // decisión entre 5 o 7
    if (clickEnBoton(100, 410, 180, 30)) estado = 5;
    else if (clickEnBoton(400, 410, 180, 30)) estado = 7;
    return;
  }

  if (estado == 8) { // decisión entre 9 o 10
     if (clickEnBoton(200, 410, 90, 30)) estado = 9;
    else if (clickEnBoton(400, 410, 180, 30)) estado = 10;
    return;
  }

  if (estado == 11) { // decisión entre 12 o 13
    if (clickEnBoton(100, 410, 180, 30)) estado = 12;
    else if (clickEnBoton(400, 410, 180, 30)) estado = 13;
    return;
   }

  if (estado == 15) { // decisión entre 16 o 17
    if (clickEnBoton(100, 410, 180, 30)) estado = 16;
    else if (clickEnBoton(400, 410, 180, 30)) estado = 17;
    return;
  }

  // avance de los demas estados
  if (clickEnBoton(500, 420, 90, 30)) {
    if (estado == 0) estado = 1;
     else if (estado == 1) estado = 2;
    else if (estado == 2) estado = 3;
     else if (estado == 3) estado = 4;
    else if (estado == 5) estado = 6;
     else if (estado == 6) estado = 7;
    else if (estado == 7) estado = 8;
     else if (estado == 9) estado = 11;
    else if (estado == 13) estado = 14;
     else if (estado == 14) estado = 15;
    else if (estado == 16) estado = 17;
     else if (estado == 17) estado = 18;
    else if (estado == 18) estado = 19;
     else if (estado == 19) estado = 20;
  }
 }

function keyPressed() {
  userStartAudio(); //permite que el sonido funcione sin problema en cualquier navegador

  if (keyCode === ENTER) { // si se presiona la tecla enter comienza la musica de fondo
    if (!sonido.isPlaying()) {
      sonido.loop(); // es para que el sonido se escuche en bucle
    }
  }
  if (key === 'p' || key === 'P') {
    if (sonido.isPlaying()) {
      sonido.pause(); // si se presiona la tecla P pausa el sonido
    } else if (sonido.isPaused()) {
      sonido.play(); // reanuda desde donde se pauso el sonido
    }
   }
 }
