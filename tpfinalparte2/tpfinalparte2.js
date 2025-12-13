//Sofia Gramajo 119051/4
//Lourdes Godoy 119044/5
//video : https://youtu.be/Irpju5JWzaA?si=p29Cyil63kFqpjEm

 let juego;         
 let pantallas;     
  let fondos = {};   
 let iconosItem = []; 
  let fuente;        
 let sonido;        


function preload() {

    fondos.portada = loadImage('data/portada.jpg');
    fondos.introduccion = loadImage('data/introduccion.png');
    fondos.instrucciones = loadImage('data/instrucciones.png');
     fondos.juego = loadImage('data/fondo_juego.png');
    fondos.ganar = loadImage('data/imagenganar.png');
    fondos.perder = loadImage('data/imagenperder.png');
    fondos.creditos = loadImage('data/creditos.png');
    fondos.sonido = loadImage('data/botonsonido.png'); 

    // carga de iconos de los 8 objetos
        for (let i = 0; i < 8; i++) {
        iconosItem[i] = loadImage('data/objeto' + i + '.png');
    }

    fuente = loadFont ('data/Schoolbell-Regular.ttf');
    soundFormats('mp3', 'wav');
    sonido = loadSound('data/sonidoAmbiente.wav');
   }


   function setup() {
    createCanvas(640, 480);
    textFont(fuente);
    imageMode(CORNER); 
    rectMode(CENTER);  
    
    // inicia el audio en loop
     sonido.loop();
    userStartAudio(); 
    
    //creo las instancias de las clases de lógica y visualización
    juego = new Juego(8); 
    pantallas = new Pantallas(juego); 
}


function draw() {    
    // para actualizra la lógica de juego (tiempo y condiciones)
    juego.actualizarTiempo(); 
    pantallas.dibujar();
}
