       function mouseClicked() {
    // navegación entre pantallas
      if (juego.estado === "PORTADA") {
        if (juego.btnComenzar.fuePresionado(mouseX, mouseY)) {
            juego.estado = "INTRO"; 
        }
    } 
      else if (juego.estado === "INTRO") {
        if (juego.btnSiguiente.fuePresionado(mouseX, mouseY)) {
            juego.estado = "INST"; 
        }
    } 
      else if (juego.estado === "INST") {
   
        if (juego.btnComenzar.fuePresionado(mouseX, mouseY)) {
            juego.iniciar(); 
        }
    } 
    else if (juego.estado === "JUGANDO") {
        //  verificación de colision a la clase Jueglo
        juego.revisarClick(mouseX, mouseY);
    } 
    else if (juego.estado === "GANAR" || juego.estado === "PERDER") {
        
        if (juego.btnReiniciar.fuePresionado(mouseX, mouseY)) {
            juego.estado = "PORTADA"; 
        }
        if (juego.btnCreditos.fuePresionado(mouseX, mouseY)) {
            juego.estado = "CREDITOS";  
        }
    } 
    else if (juego.estado === "CREDITOS") {
        if (juego.btnVolver.fuePresionado(mouseX, mouseY)) {
            juego.estado = "PORTADA"; 
        }
    }
}
 
   function mousePressed() {  
    
     if (mouseX > 15 && mouseX < 55 && mouseY > 15 && mouseY < 55) { 
        
        // si el sonido NO está sonando, que empiece
        if (!sonido.isPlaying()) {
            sonido.loop();
        // si el sonido ya está sonando, que se pause
        } else {
            sonido.stop();
        }
    }
}
