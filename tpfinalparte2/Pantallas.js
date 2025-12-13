   class Pantallas {
    constructor(juego) {
        // guardamos la referencia al objeto uego para acceder a su estado y datos
      this.juego = juego;
       }

    // método principal que decide que pantalla mostrar basado en el estado del juego
         dibujar() {

        if (this.juego.estado === "PORTADA") {
            this.dibujarPortada();
        } else if (this.juego.estado === "INTRO") { 
            this.dibujarIntroduccion();
         } else if (this.juego.estado === "INST") { 
            this.dibujarInstrucciones();
        } else if (this.juego.estado === "JUGANDO") {
            this.dibujarJuego();
         } else if (this.juego.estado === "GANAR" || this.juego.estado === "PERDER") {
            this.dibujarFinal(this.juego.estado);
        } else if (this.juego.estado === "CREDITOS") {
            this.dibujarCreditos();
         }
    }

    

    dibujarPortada() {
      
        image(fondos.portada, 0, 0, width, height);
        
        fill(255);
        stroke(237, 192, 26);
         textAlign(CENTER, CENTER);
        textSize(25);
        text("y los objetos perdidos", width / 2, height / 2 + 50);
        
         this.juego.btnComenzar.dibujar();
        image(fondos.sonido, 15, 15, 40, 40);
    }

    dibujarIntroduccion() {
        image(fondos.introduccion, 0, 0, width, height);

        fill(255);
        textAlign(LEFT, CENTER);
        textSize(15);    
        text("¡Estás atrapado! Antes de que el tiempo\ntermine (30 segundos) debes encontrar\ntodos los objetos perdidos para que Aladin\npueda ser liberado de la cueva.", 220, 116, 350, 150); 
        
        this.juego.btnSiguiente.dibujar();
        image(fondos.sonido, 15, 15, 40, 40);
    }

       dibujarInstrucciones() {
        image(fondos.instrucciones, 0, 0, width, height);
        
        fill(255);
        textAlign(CENTER, CENTER);        
        
         textSize(25);
        text("Cómo Jugar:", 190, 35, 420, 150); 
        
        textSize(15);        
        text("Encontrá los 8 objetos.", 250, 90, 300, 150);
        
        text( "Si los encontrás todos a tiempo, ¡GANAS!\nSi se acaba el tiempo y no\nencontraste todos, ¡PIERDES!", 250, 160, 300, 150 );

       
        this.juego.btnComenzar.dibujar(); 
        image(fondos.sonido, 15, 15, 40, 40);
    }

    dibujarJuego() {
        image(fondos.juego, 0, 0, width, height);

        // dibuja los objetos del escenario si están encontrados y  aplica un tinte.
        for (let obj of this.juego.objetosEscondidos) {
            let img = iconosItem[obj.indiceImagen];
            
            if (img) {
                push(); // guarda la configuración
                
                // si el objeto fue encontrado aplicamos un tinte  para que el jugador sepa que lo encontrado
                if (obj.encontrado) {
                    tint(255, 0, 0 ); 
                }
            
                image(img, obj.x, obj.y, obj.ancho, obj.alto);

                pop(); // Restaura la configuración
            }
        }
        
   

        // dibuja la barra de estado de los objetos encontrados/tachados 
        this.juego.barra.dibujar(this.juego.objetosEscondidos); 
       
        image(fondos.sonido, 15, 15, 40, 40);

        fill(255, 200, 0);
        textSize(24);
        textAlign(LEFT, BOTTOM);
        
        text(int(this.juego.tiempoRestante), 20, 480);
        
       
    }

    dibujarFinal(resultado) {
        let imagenFinal;
        
        if (resultado === "GANAR") {
            imagenFinal = fondos.ganar;
        } else {
            imagenFinal = fondos.perder;
        }

        image(imagenFinal, 0, 0, width, height);
        
        image(fondos.sonido, 15, 15, 40, 40);
        
        this.juego.btnReiniciar.dibujar();
        this.juego.btnCreditos.dibujar();
    }

      dibujarCreditos() {
        image(fondos.creditos, 0, 0, width, height);
        
         image(fondos.sonido, 15, 15, 40, 40);
        
        fill(255);
        textAlign(CENTER, CENTER);
        
         textSize(36);
        text("Créditos", width / 2, 80);
        textSize(20);
         text("Creadoras: Gramajo Sofía\ny Godoy Lourdes\nPMIW ©2025", width / 2, 180); 
        
        this.juego.btnVolver.dibujar();
    }
}
