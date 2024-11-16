//declaración de variables
let jugador;
let balas = [];
let enemigos = [];
let vidas = 3;
let zombisMaximos = 20;
let zombisRestantes = zombisMaximos;
let zombieImage, dipperImage,fondoImage,bala,vida,cerebro,portadaImage;
let pantalla = "inicio";
let fuente;
let sonidoVictoria;
let sonidoDerrota;
let mostrarInstrucciones= true;
let tiempoMostrarInstrucciones=6000;   //6 seg
let tiempoInicio=null;

//carga de imágenes
function preload() {
  // Cargar imágenes y sonidos del juego
  zombieImage = loadImage('data/zombie.png')
  dipperImage = loadImage('data/dipper.png')
  fondoImage = loadImage('data/fondo1.jpg')
  imagen_06= loadImage ('data/imagen_06.jpg');
  imagen_07= loadImage ('data/imagen_07.jpg');
  bala = loadImage ('data/bala.png');
  vida = loadImage ('data/vida.png');
  cerebro=loadImage('data/cerebro.png');
  portadaImage = loadImage('data/portada.jpg')
  fuente = loadFont('data/Creepster-Regular.ttf');
  sonidoVictoria = loadSound('data/brass-fanfare-with-timpani-and-winchimes-reverberated-146260.mp3')
  sonidoPerder = loadSound('data/game-over-39-199830.mp3');
}

function setup() {
  // Crear canvas y establecer framerate
  createCanvas(640, 480);
  frameRate(30);
  jugador = new Personaje();
  textFont(fuente);
}

function draw() {
  
  // Mostrar pantalla de inicio, créditos o juego según corresponda
  if (pantalla === "inicio") {
    inicio();
  } else if (pantalla === "creditos") {
    creditos();
  } else if (pantalla === "juego") {
    // Dibujar fondo del juego
    image(fondoImage, 0, 0, width, height);
    jugador.dibujar();             //se pone esto porque es necesario reiniciar las variables en ciertos momentos
    actualizarBalas();
    actualizarEnemigos();
    crearEnemigos();
    
    // Dibujar vidas
    fill(255, 0, 0);
    noStroke();
    textSize(16);
    text("vidas:",545,25);
    for (let i = 0; i < vidas; i++) {
      image(vida,610 - i*20,20,15,15);
    }
    
    // Dibujar zombis restantes
    fill(0, 255, 0);
    noStroke();
    for (let i = 0; i < zombisRestantes; i++) {
      image (cerebro,20+i*20,20,20,20);
    }
    
    // condiciones de victoria y derrota
    
   if (vidas <= 0 || zombisRestantes <= 0) {
  background(0);
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  
  if(vidas <= 0){
    sonidoPerder.play();
    image(imagen_07, 0, 0, 640, 480);
    text("Lamentablemente no llegaste a tiempo a derrotar todos los zombies", width / 2, height / 2);
  }else{
    sonidoVictoria.play();
    image(imagen_06, 0, 0, 640, 480);
    text("¡FELICIDADES! Pudiste derrotar todos los zombies justo a tiempo", width / 2, height / 2);
  }
  
  fill(119, 167, 65);
  rect(220, 400, 200, 50, 40);
  fill(255);
  textSize(20);
  text("Volver a jugar", 320, 420);
  noLoop();
}
  }
}
   

//función para mostrar pantalla de inicio
function inicio() { 
   if (mouseX > 100 && mouseX < 220 && mouseY > 400 && mouseY < 450 && mouseIsPressed) {
    pantalla = "juego";
  } else if (mouseX > 430 && mouseX < 550 && mouseY > 400 && mouseY < 450 && mouseIsPressed) {
    pantalla = "creditos";
  }
  
  if (mouseX > 220 && mouseX < 420 && mouseY > 400 && mouseY < 450 && mouseIsPressed) {
  pantalla = "juego";
  vidas = 3;
  zombisRestantes = zombisMaximos;
  balas = [];
  enemigos = [];
}
  
  image(portadaImage, 0, 0, width, height);
  fill(119, 167, 65);
  textSize(70);
  text("KARAOKE ZOMBIE",320,100);
  fill(38, 51, 70);
  rect(90, 400, 120, 50, 40);
  rect(430, 400, 120, 50, 40);
  stroke(0);
  fill(255);
  textSize(20);
  text("Jugar", 150, 420);
  text("Creditos", 490, 420);


 // Mostrar instrucciones durante 6 segundos
    // Inicializar tiempoInicio si es null
  if (tiempoInicio === null) {
    tiempoInicio = Date.now();
  }

  // Mostrar instrucciones durante 6 segundos
  if (mostrarInstrucciones && Date.now() - tiempoInicio < tiempoMostrarInstrucciones) {
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Utiliza las flechas para moverte", width / 2, height / 2 - 20);
    text("y el espacio para disparar.", width / 2, height / 2);
    text("Acaba con esos zombis!", width / 2, height / 2 + 20);
  } else {
    mostrarInstrucciones = false;
  }
 
   
   
   
  
  // Botón jugar
    if (mouseX > 100 && mouseX < 220 && mouseY > 400 && mouseY < 450) {
    if (mouseIsPressed) {
      pantalla = "juego";
    }
  }

  // Botón créditos
  if  (mouseX > 430 && mouseX < 550 && mouseY > 400 && mouseY < 450) {
    if (mouseIsPressed) {
      pantalla = "creditos";
    }
  }
}

//función para mostrar pantalla de créditos
function creditos() {
   if (mouseX > 30 && mouseX < 180 && mouseY > 30 && mouseY < 80 && mouseIsPressed) {
    pantalla = "inicio";
  }
  background(0);
  fill(255);
  textSize(20);
  text("Creadoras del juego: Sofia Gramajo y Godoy Lourdes ", width /2,height/3);
  text("         Creadoras del juego: \n Godoy Lourdes y Sofia Gramajo \n  \n          Creador de la serie: \n               Alex Hirsch \n  \n       Trabajo Practico Final \n     Profesor: Matias Jauregui Lorda\n             PMIW - Comision 2 \n                     \n       2024 ©", width /2 , height / 2);
   fill(38, 51, 70);
  rect(30, 30, 150, 50, 40);
  fill(255);
  textSize(20);
  text("volver al inicio",100, 53);



}

//función para mover el jugador de derecha e izquierda y disparar con el espacio
function keyPressed() {
  if (keyCode === LEFT_ARROW && jugador.x > 0) {
    jugador.x -= 15;
  } else if (keyCode === RIGHT_ARROW && jugador.x < width - 20) {
    jugador.x += 15;
  } else if (keyCode === 32) {
    dispararBala();
  }
}

//función para actualizar balas
function actualizarBalas() {
  for (let i = balas.length - 1; i >= 0; i--) {
    balas[i].mover();
    //mover se usa para actualizar la posición de la bala
    balas[i].dibujar();
    if (balas[i].y < 0) {
      balas.splice(i, 1);
    } else {
      verificarColision(balas[i]);       
}
}
}

//función para verificar la colision (ej;una bala choca un zombie,o un zombi llega al borde inferior)
function verificarColision(bala) {
for (let i = enemigos.length - 1; i >= 0; i--) {
if (dist(bala.x, bala.y, enemigos[i].x, enemigos[i].y) < 15) {           //se usa un dist para calcular la distancia entre  la bala y el enemigo //si la distancia es menor que 15 es una colision
enemigos.splice(i, 1);
balas.splice(balas.indexOf(bala), 1);                //el splice esta para eliminar el enemigo del arreglo  y con las balas pasa lo mismo
if (zombisRestantes > 0) {  
zombisRestantes--;                                   //si todavia quedan zombies por crear se decrementa el contador
}
}
}
}

//actualiza enemigos
function actualizarEnemigos() {
for (let i = enemigos.length - 1; i >= 0; i--) {
enemigos[i].mover();
enemigos[i].dibujar();
if (enemigos[i].y > height) {
enemigos.splice(i, 1);
vidas--;
}
}
}

//crear enemigos (el 20 es la frecuencia en la que se crean los zombis)
function crearEnemigos() {
if (frameCount % 20 === 0 && zombisRestantes > 0) {
enemigos.push(new Enemigo(random(width / 2 - 100, width / 2 + 100), 0));
}
}

//dispara balas
function dispararBala() {
balas.push(new Bala(jugador.x + 10, jugador.y));          // el push agrega una nueva bala al arreglo "balas" cuado el jugador dispara / lo mismo pasa en enemigos
}

function Reiniciar() {
  vidas = 3;
  zombisRestantes=zombisMáximos;
  balas=[];
  enemigos=[];
  pantalla = "inicio";
  loop();
}

function mousePressed() {
  if (mouseX > 220 && mouseX < 420 && mouseY > 400 && mouseY < 450) {
    pantalla = "juego";
    vidas = 3;
    zombisRestantes = zombisMaximos;
    balas = [];
    enemigos = [];
    loop();
  }
}
