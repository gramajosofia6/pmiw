//sofia Gramajo-Lourdes Godoy 
//Comision 2 

//profe nos falto vincular dos pantallas  que  no pudimos resolver y son las que quedaron comentadas ya que nos complicaban la ejecución de otras pantallas , tambien falto reiniciar las variables, y nos confundimos con el tamaño del canvas, pero igualmente queremos cumplir con la entrega y tener una mínima devolución,gracias!


let alto, ancho, esquinaX1, esquinaY1;
let pantalla;
let sonidoGanar, sonidoPerder;
let FotoPortada, fotoSinopsis, hablan, cantando, zombieSufre, finalFeliz;
let fuente;
let miVariable = 1;
let dialogos = [
  "Mabel: ¡Dipper debemos unir nuestras voces para crear una perfecta armonia y terminar con estos zombies!",
  "Dipper: No cuentes conmigo, sabes que odio el karaoke.",
  "Mabel: Vamos sin ti no podemos hacerlo Dipper",
  "Dipper: Puedo llamar a los agentes del gobierno y tener otra manera de terminar con los zombies. Todo menos cantar.",
  "Tio Stan: Vamos chico, solo es cantar",
  "Mabel: No tenemos tiempo Dipper, ya estan dentro de la cabaña, ¡Tenemos que cantar!",
];
let indiceDialogo = 0;
let tiempoDialogo = 0;
let dialogosCantar;
let indiceDialogoCantar=0;
let tiempoDialogoCantar=0;
let dialogosAgentes;
let indiceDialogosAgentes=0;
let tiempoDialogosAgentes=0;



function preload() {
  FotoPortada = loadImage('data/FotoPortada.jpg');
  fotoSinopsis = loadImage('data/fotoSinopsis.jpg');
  hablan = loadImage('data/hablan.jpg');
  cantando = loadImage('data/cantando.jpg');
  agentes = loadImage('data/agentes.jpg');
  zombieSufre = loadImage('data/zombieSufre.jpg');
  finalFeliz = loadImage('data/finalFeliz.jpg');

  dialogos=loadStrings('data/texto.txt');
  dialogosCantar=loadStrings('data/dialogosCantar.txt');
  dialogosAgentes=loadStrings('data/dialogosAgentes.txt');
 
  sonidoGanar = loadSound ('data/brass-fanfare-with-timpani-and-winchimes-reverberated-146260.mp3');
  sonidoPerder = loadSound ('data/game-over-39-199830.mp3');
}
function setup() {
  createCanvas(1350, 700);

  pantalla = "inicio";
  alto = 80;
  ancho = 200;
  esquinaX1 = 150;
  esquinaY1 = 40;
  fuente = loadFont ('data/Creepster-Regular.ttf');
  textFont(fuente);
  textSize(64);
  console.log(dialogos);
}
function draw() {
  background(0);

  miVariable = frameCount;
  //estado 1
  if (pantalla == "inicio") {
    image(FotoPortada, 240, 40, 880, 560);
    textFont(fuente);
    textSize(90);
    fill(119, 167, 65);
    text("KARAOKE ZOMBIE", 400, 120);
    //colorcito en los botones
    if (mouseX > 200 && mouseX < 500 && mouseY > 500 && mouseY < 550) {
      fill(246, 77, 150); //rosa
      cursor(HAND);
    } else if (mouseX > 900 && mouseX < 1200 && mouseY > 500 && mouseY < 550) {
      fill(246, 77, 150);
      cursor(HAND);
    } else {
      fill(38, 51, 70); //azul
      cursor(ARROW);
    }
    //dibujo botones
    rect(180, 476, ancho, alto, 40);
    rect(970, 476, ancho, alto, 40);
    stroke(0);
    fill(255);
    textSize(25);
    text("Jugar", 250, 527);
    text("Creditos", 1030, 527);
  } else if (pantalla == "jugar") { //estado 2
    Jueguito();
  }
  if (pantalla == "creditos") { //estado 3
    LosCreditos ();
  }
  if (pantalla == "dialogos") { //estado 4
    Dialogos();
  }
  if (pantalla == "cantar") { //estado 5
    Cantar();
  }
  if (pantalla == "agentes") { //estado 6
    Agentes();
  }
  if (pantalla == "megafono") { //estado 7
    Megafono();
  }
  if (pantalla == 'dispoResonancia') { //estado 8
    DispoResonancia();
  }
  if (pantalla == 'final1') { //estado 9
    LindoFinal();
  }
}
   function mousePressed() {
      if (pantalla == "inicio") {
    if (mouseX > 200 && mouseX < 500 && mouseY > 500 && mouseY < 550) { //boton jugar
      pantalla = "jugar";
    } else if (mouseX > 900 && mouseX < 1200 && mouseY > 500 && mouseY < 550) { //boton creditos
      pantalla = "creditos";
    }
  }
  if (pantalla == "jugar") { //boton volver al inicio desde jugar
    if (mouseX > 44 && mouseX < 40+ancho && mouseY > 55 && mouseY < 55+alto) {
      pantalla = "inicio";
    }
  }
  if (pantalla == "creditos") { //boton volver al inicio desde creditos
    if (mouseX > 44 && mouseX < 40+ancho && mouseY > 55 && mouseY < 55+alto) {
      pantalla = "inicio";
    }
  }
  if (pantalla == "dialogos") { //boton cantar con mabel
    if (mouseX > 200 && mouseX < 500 && mouseY > 500 && mouseY < 550) {
      pantalla = "cantar";
    }
 
    if (mouseX > 900 && mouseX < 1200 && mouseY > 500 && mouseY < 550) {
      pantalla = "agentes";
    }
  }
    if (pantalla=="agentes"){ //volver a inicio desde agentes
    if (mouseX>44 && mouseX < 40+ancho && mouseY > 55 && mouseY < 55+alto){
      pantalla = "inicio";
      }
    }
  //if (pantalla == "cantar") { //boton megafono
  //  if (mouseX > 200 && mouseX < 500 && mouseY > 500 && mouseY < 550) {
  //    pantalla ="megafono";
  //  }
  //  if (mouseX > 900 && mouseX < 1200 && mouseY > 500 && mouseY < 550) { //boton dispositivo de resonancia
  //    pantalla == "dispoResonancia";
  //  }
  //}

   }    

function keyPressed () { //boton (enter) para comenzar el juego
  if (pantalla == "jugar") {
    if ( keyCode === ENTER) {
      pantalla = "dialogos";
    }
  }
}
