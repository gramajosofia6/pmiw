///////VIDEO:
 //Godoy Lourdes - Gramajo Sofía comisión 2 

let pantalla;
let fuente;
let sonidoGanar, sonidoPerder;
let imagenes = [];
let miVariable = 1;
let tiempoCantar=0;
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
let indiceDialogoCantar = 0;
let tiempoDialogoCantar = 0;
let empezoSonidoGanar, empezoSonidoPerder;


function preload()  {
  imagenes[1] = loadImage("data/imagen_01.jpg");
  imagenes[2] = loadImage("data/imagen_02.jpg");
  imagenes[3] = loadImage("data/imagen_03.jpg");
  imagenes[4] = loadImage("data/imagen_04.jpg");
  imagenes[5] = loadImage("data/imagen_05.jpg");
  imagenes[6] = loadImage("data/imagen_06.jpg");
  imagenes[7] = loadImage("data/imagen_07.jpg");
  
  sonidoPerder = loadSound('data/game-over-39-199830.mp3');
  sonidoGanar = loadSound('data/brass-fanfare-with-timpani-and-winchimes-reverberated-146260.mp3');
  dialogos = loadStrings('data/texto.txt');
  dialogosCantar = loadStrings('data/dialogosCantar.txt');
  empezoSonidoGanar = false;
  empezoSonidoPerder = false;
}
 
 
function setup() {
  createCanvas(640, 480);
  pantalla = "inicio";
  fuente = loadFont('data/Creepster-Regular.ttf');
  textFont(fuente);
}

function draw() {
  background(255, 0, 0);
  miVariable = frameCount;
  if (pantalla === "inicio") {
    Inicio();
  }
  if (pantalla === "creditos") {
    Creditos();
  }
  if (pantalla === "jugar") {
    Jugar();
  }
  if (pantalla === "dialogos") {
    Dialogos();
  }
  if (pantalla === "agentes") {
    Agentes();
  }
  if (pantalla === "cantar") {
    CantarMabelyDipper();
  }
  if (pantalla === "victoria") {
    Victoria();
  }
  if (pantalla === "perder") {
    Perder();
  }
}

  function mousePressed() {
   if (pantalla === "inicio") {
    if (mouseX > 100 && mouseX < 220 && mouseY > 400 && mouseY < 450) {
      pantalla = "jugar";
    } else if (mouseX > 430 && mouseX < 550 && mouseY > 400 && mouseY < 450) {
      pantalla = "creditos";
    }
  }
  
  if (pantalla === "dialogos") {
    if (mouseX > 100 && mouseX < 220 && mouseY > 400 && mouseY < 450) {
      pantalla = "cantar";
    } else if (mouseX > 430 && mouseX < 550 && mouseY > 400 && mouseY < 450) {
      pantalla = "agentes";
    }
  }
  
  if (pantalla === "creditos" || pantalla === "jugar") {
    botonVolverAlInicio();
  }
}
 
    


function botonVolverAlInicio() {
  if (mouseX > 30 && mouseX < 180 && mouseY > 30 && mouseY < 80) {
    pantalla = "inicio";
    reiniciarJuego();

  }
}





function keyPressed() {
  if (pantalla == "jugar") {
    if (keyCode === ENTER) {
      pantalla = "dialogos";
    }
  }
  if (pantalla == "agentes") {
    if (key === 'v') {
      pantalla = "inicio";
      reiniciarJuego();
    }
  }
  if (pantalla == "victoria") {
    if (key === 'v') {
      pantalla = "inicio";
      reiniciarJuego();
    }
  }
}
