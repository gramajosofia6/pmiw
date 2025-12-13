class Juego {
      constructor(totalObjetos) {
        this.estado = "PORTADA"; 
        this.tiempoLimite = 30; 
         this.tiempoRestante = this.tiempoLimite;
        this.objetosEncontrados = 0;
         this.totalObjetos = totalObjetos;
         this.objetosEscondidos = []; 
       
        // instanciación de Botones 
        let btnAncho = 200;
        let btnAlto = 50;
         let btnX = width / 2 - btnAncho / 2;
        let btnY = height - 100; 

       
        this.btnComenzar = new Boton(btnX, btnY, btnAncho, btnAlto, "Comenzar");
        this.btnSiguiente = new Boton(btnX, btnY, btnAncho, btnAlto, "Siguiente");
        this.btnVolver = new Boton(btnX, btnY, btnAncho, btnAlto, "Volver");
        
        // botones de pantalla final
        this.btnReiniciar = new Boton(width / 2 - 150, height / 2 + 50, 100, 40, "Reiniciar"); 
        this.btnCreditos = new Boton(width / 2 + 50, height / 2 + 50, 100, 40, "Créditos");   

       
        
        // en barra definimos el tamaño del ítem
        let itemTam = 40; 
        //pos fija
        this.barra = new Barra(125, 430, itemTam); 

        // inicializa los objetos escondidos
        this.configurarObjetos();
    }

    // prepara o reinicia el juego antes de pasar al estado jugando
       iniciar() {
        this.estado = "JUGANDO";
        this.tiempoRestante = this.tiempoLimite;
        this.objetosEncontrados = 0;
        this.configurarObjetos(); // vuelve a crear los objetos para reiniciar su estado
    }


    configurarObjetos() {
        this.objetosEscondidos = [];
        this.objetosEscondidos.push(new ObjetoEscondido(460, 315, 70, 70, 0)); 
        this.objetosEscondidos.push(new ObjetoEscondido(130, 190, 80, 40, 1));
         this.objetosEscondidos.push(new ObjetoEscondido(140, 350, 60, 60, 2));
        this.objetosEscondidos.push(new ObjetoEscondido(450, 200, 60, 60, 3));
         this.objetosEscondidos.push(new ObjetoEscondido(90, 260, 90, 50, 4));
        this.objetosEscondidos.push(new ObjetoEscondido(375, 170, 60, 60, 5));
        this.objetosEscondidos.push(new ObjetoEscondido(580, 55, 70, 70, 6));
         this.objetosEscondidos.push(new ObjetoEscondido(330, 250, 30, 30, 7));

        this.totalObjetos = this.objetosEscondidos.length;
    }

    // verifica si el clic  encontró un objeto
    revisarClick(posx, posy) {
        if (this.estado !== "JUGANDO") return; 

        for (let i = 0; i < this.objetosEscondidos.length; i++) {
            let objActual = this.objetosEscondidos[i];
            
            if (objActual.fueClickeado(posx, posy)) { 
                
                objActual.encontrado = true;
                this.objetosEncontrados++;
                
                break; 
            }
        }
        
        this.revisarCondiciones();
    }

    // logica para descontar el tiempo 
       actualizarTiempo() {
        if (this.estado === "JUGANDO") {
            if (frameCount % 60 === 0 && this.tiempoRestante > 0) {
                this.tiempoRestante--;
                
                // Condición de derrota
                if (this.tiempoRestante <= 0) {
                    this.estado = "PERDER";
                }
            }
        }
    }
    
    //revisa si se cumplen las condiciones de ganar
    revisarCondiciones() {
        if (this.objetosEncontrados >= this.totalObjetos) {
            this.estado = "GANAR";
        }
    }
}
