//Sofia Gramajo 119051/4
// Lourdes Godoy 
// tpfinalparte 1 -  la lampara de aladin
 
let estadoActual = 0; //  para empezar en la Portada (pantalla 0)
let pantalla = []; //arreglo para las pantallas
let imagenes = []; // arreglo de imágenes
let dialogos = []; // arreglo para los textos  // 
let botonComenzar;   
let botonCreditos;
let botonSiguiente;
let sonido; //variable para sonido
let fuente; //variable para la fuente para el texto

function preload() {
  for (let i = 0; i <= 20; i++) {
    imagenes[i] = loadImage('data/imagen' + i + '.jpg');
  }
   soundFormats('mp3', 'wav'); 
   sonido = loadSound('data/sonidoAmbiente.wav'); 
   dialogos = loadStrings('data/dialogos.txt'); 

}

function setup() {
  createCanvas(640, 480);
  fuente = loadFont ('data/Schoolbell-Regular.ttf');
  textFont(fuente);
  sonido.loop();
  //para los botones de la portada
  let w = 200; 
  let h = 50;  
  let x = width / 2 - w / 2;
  
  botonComenzar = { x: x, y: height * 0.7, w: w, h: h, texto: "COMENZAR", destino: 1 };
  botonCreditos = { x: x, y: height * 0.85, w: w, h: h, texto: "CRÉDITOS", destino: 20 };
  
  //para el boton siguiente 
  let wS = 140;
  let hS = 40; 
  let xS= width - wS -20 ; 
  let yS = height - hS - 20;
  
  botonSiguiente = {  //para encontrar los lugares del boton 
    x: xS,
    y: yS,
    w: wS,
    h: hS,
    texto: "Siguiente " 
  };
  
  
  
}


function draw() {
  background(0);
  dibujarP(estadoActual); 
  
}


function mousePressed() {
    
    //  LÓGICA DE PORTADA (Estado 0) 
    if (estadoActual === 0) {
        if (mouseEnBoton(botonComenzar)) {
            estadoActual = 1; 
        } else if (mouseEnBoton(botonCreditos)) {
            estadoActual = 100; 
        }
    }
    
    //  LÓGICA DE CRÉDITOS (Estado 100) 
    else if (estadoActual === 100) {
        // en la pantalla de créditos, cualquier clic puede llevar a la portada
        
        estadoActual = 0; 
    }
    
    // LÓGICA DE AVENTURA (Pantallas 1 a 19) 
    // Usamos <= 19 porque la lógica de avance es más específica y 19 es el último estado de historia.
    else if (estadoActual >= 1 && estadoActual <= 19) {

        //  PANTALLAS DE DECISIÓN (usamos las funciones auxiliares)
        
        // Estado 4: DECISIÓN (lleva a 5 o 7)
        if (estadoActual === 4) {
            if (mouseEnBotonDecision1()) { estadoActual = 5; return; } 
            else if (mouseEnBotonDecision2()) { estadoActual = 7; return; }
        }
        
        // Estado 8: DECISIÓN (lleva a 9 o 10)
        else if (estadoActual === 8) {
            if (mouseEnBotonDecision1()) { estadoActual = 9; return; } 
            else if (mouseEnBotonDecision2()) { estadoActual = 10; return; }
        }
        
        // Estado 11: DECISIÓN (lleva a 12 o 13)
        else if (estadoActual === 11) {
            if (mouseEnBotonDecision1()) { estadoActual = 12; return; } 
            else if (mouseEnBotonDecision2()) { estadoActual = 13; return; }
        }
        
        // Estado 15: DECISIÓN (lleva a 16 o 17)
        else if (estadoActual === 15) {
            if (mouseEnBotonDecision1()) { estadoActual = 16; return; } 
            else if (mouseEnBotonDecision2()) { estadoActual = 17; return; }
        }

        //  PANTALLAS FINALES (10, 12, 18, 19) - botones Reiniciar/Créditos
        else if (estadoActual === 10 || estadoActual === 12 || estadoActual === 18 || estadoActual === 19) {
            
           
      
            if (mouseEnBotonDecision1()) { estadoActual = 0; return; } // Botón Izquierda (Reiniciar)
            else if (mouseEnBotonDecision2()) { estadoActual = 100; return; } // Botón Derecha (Créditos)
        }

        //   (Botón Siguiente)
        // Solo se ejecuta si no se hizo clic en un botón de decisión o final.
        else if (mouseEnBoton(botonSiguiente)) {
            
            //  SALTOS NO SECUENCIALES (
            if (estadoActual === 6) {
                estadoActual = 9; // Salto: 6 -> 9
            } else if (estadoActual === 9) {
                estadoActual = 11; // Salto: 9 -> 11
            } else if (estadoActual === 16) {
                estadoActual = 18; // Salto: 16 -> 18
            } else if (estadoActual === 17) {
                estadoActual = 19; // Salto: 17 -> 19
            } 
            
            //  AVANCE SECUENCIAL  ( incluye 1 -> 2, 2 -> 3, 3 -> 4, 5 -> 6, etc.)
            else {
                estadoActual++; 
            }
        }
    }
}   
    
    
       

function dibujarDialogo(texto) {
    // si el texto para este estado no existe (es una línea vacía en el .txt), no hace nada.
    if (!texto) return; 

    // Geometría de la caja de diálogo (en la parte inferior)
    let cajaX = 45;
    let cajaY = height - 210; 
    let cajaW = width - 100;
    let cajaH = 110;

    // Fondo y estilo de la caja
    fill(0, 0, 0, 200); // negro semi-transparente 
    rect(cajaX, cajaY, cajaW, cajaH, 10); // esquinas redondeadas

   
    fill(255); 
    textSize(18);
    textAlign(LEFT, TOP); 

    // esto es para dibujar el texto dentro de la caja con un margen interno
    let margen = 15;
    text(texto, 
         cajaX + margen, 
         cajaY + margen, 
         cajaW - margen * 2, 
         cajaH - margen * 2 // puse un límite para el texto
    );
}

function keyPressed() {
  userStartAudio(); //permite que el sonido funcione sin problema en cualquier navegador

  if (keyCode === ENTER) { // si se presiona la tecla enter comienza la musica de fondo
    if (!sonido.isPlaying()) {
      sonido.loop();
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
