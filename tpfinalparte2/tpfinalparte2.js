//Sofia Gramajo 119051/4
//Lourdes Godoy 119044/5
//video : https://youtu.be/Irpju5JWzaA?si=p29Cyil63kFqpjEm
   let juego; // Objeto de la clase Juego 
  let fondos = {};      // Objeto para fondos (el del juego notmal,la de instrucciones,portada y de intro)
   let iconosItem = [];  // Arreglo para los 8 objetos
  let fuente; //variable para la fuente
   let sonido; //variable para sonido
  let btnComenzar, btnSiguiente, btnComenzarJuego, btnReiniciar, btnCreditos, btnVolver;

    function preload() {  
    
     fondos.portada = loadImage('data/portada.jpg');
    fondos.introduccion = loadImage('data/introduccion.png');
     fondos.instrucciones = loadImage('data/instrucciones.png');
    fondos.ganar = loadImage('data/imagenganar.png');
    fondos.perder = loadImage('data/imagenperder.png');
     fondos.creditos = loadImage('data/creditos.png');
    fondos.juego = loadImage('data/fondo_juego.png'); 
     fondos.sonido = loadImage('data/botonsonido.png');

    // Carga de los 8 objetos
       for (let i = 0; i < 8; i++) {
         iconosItem[i] = loadImage(`data/objeto${i}.png`);  
     }
     soundFormats('mp3', 'wav'); // formatos de sonido admitidos
     sonido = loadSound('data/sonidoAmbiente.wav'); //subida de sonido
  }

     function setup() {
     createCanvas(640, 480);
    fuente = loadFont ('data/Schoolbell-Regular.ttf');
    textFont(fuente);
     sonido.loop();
    userStartAudio(); //sin esta linea de codigo el navegador no me deja ejecutar el sonido
    
     juego = new Juego(8); // indica que debe buscar 8 objetos
    
     imageMode(CORNER); 
    
     // instancia de todos los botones 
      let btnAncho = 200;
      let btnAlto = 50;
      let btnX = width / 2 - btnAncho / 2;
      let btnY = height - 150;
    
    // botones de flujo principal
      btnComenzar = new Boton("Comenzar", btnX, btnY, btnAncho, btnAlto);
     btnSiguiente = new Boton("Siguiente", btnX, btnY, btnAncho, btnAlto);
     btnComenzarJuego = new Boton("¡A jugar!", btnX, btnY, btnAncho, btnAlto);

    // botones para las pantallas de Ganar/Perder 
     btnReiniciar = new Boton("Reiniciar", width / 2 - 150, height / 2 + 50, 100, 40); // Izquierda
      btnCreditos = new Boton("Creditos", width / 2 + 50, height / 2 + 50, 100, 40); // Derecha
     btnVolver = new Boton("volver", btnX, btnY, 200, 50);
 }

        function draw() {
           juego.dibujarPantallas(); 
        }
        function mouseClicked() {
    // usamos la estructura if para manejar el estado del juego
     if (juego.estado === "PORTADA") {
        if (btnComenzar.fuePresionado(mouseX, mouseY)) {
            juego.estado = "INTRODUCCION"; 
           }
     } 
    
         else if (juego.estado === "INTRODUCCION") {
            if (btnSiguiente.fuePresionado(mouseX, mouseY)) {
                 juego.estado = "INSTRUCCIONES"; 
           }
       }
    
          else if (juego.estado === "INSTRUCCIONES") {
             if (btnComenzarJuego.fuePresionado(mouseX, mouseY)) {
                  juego.iniciar(); //  inicia el juego (cambia a estado: JUGANDO)
           }
        }
    
          else if (juego.estado === "JUGANDO") {
              // delega la verificación de clic al arreglo de objetos
                     juego.revisarClick(mouseX, mouseY);
                   }
              else if (juego.estado === "GANAR" || juego.estado === "PERDER") {
                // Manejo de los dos botones en la pantalla final
              if (btnReiniciar.fuePresionado(mouseX, mouseY)) {
                     juego.estado = "PORTADA"; // Vuelve a empezar
             }
                if (btnCreditos.fuePresionado(mouseX, mouseY)) {
                            juego.estado = "CREDITOS"; 
                    }
           }
                 else if (juego.estado === "CREDITOS") {
                   if (btnVolver.fuePresionado(mouseX, mouseY)) {
                        juego.estado = "PORTADA"; // Vuelve a la portada
               }
           }
    }
    
    function mousePressed(){ //manejo de sonido
    if (juego.estado === "PORTADA" || juego.estado === "INTRODUCCION" || juego.estado === "INSTRUCCIONES" || juego.estado === "CREDITOS" || juego.estado === "GANAR" || juego.estado === "PERDER") {
    
    if (mouseX > 15 && mouseX < 55 && mouseY > 15 && mouseY < 55) { //coordenadas de donde esta el icono de sonido
    // en este if si el sonido NO está sonando, que empiece
    if (!sonido.isPlaying()) {
      sonido.loop();
    // si el sonido ya está sonando, que se pause
    } else {
      sonido.stop();
     }
   }
 }
    }
      
