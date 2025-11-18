    class Juego {
     constructor(totalObjetos) {
    // atributos de la clase juego
     this.estado = "PORTADA";
    this.tiempoLimite = 30;
     this.tiempoRestante = 30;
    this.objetosEncontrados = 0;
    this.totalObjetos = totalObjetos;
     this.objetosEscondidos = []; // arreglo de instancias de ObjetoEscondido
    this.barra = new barra(); //instancia de la clase barra
   }

    iniciar() {
     this.estado = "JUGANDO";
    this.tiempoRestante = this.tiempoLimite;
     this.objetosEncontrados = 0;

    this.configurarObjetos(); // prepara el arreglo de 8 objetos
   }

    configurarObjetos() {

    this.objetosEscondidos = [];


    this.objetosEscondidos.push(new ObjetoEscondido( 460, 315, 70, 70, "Lámpara real", 0));
     this.objetosEscondidos.push(new ObjetoEscondido( 130, 190, 80, 40, "lampara oro", 1));
    this.objetosEscondidos.push(new ObjetoEscondido( 140, 350, 60, 60, "alfomra", 2));
    this.objetosEscondidos.push(new ObjetoEscondido( 450, 200, 60, 60, "alfombra2", 3));
     this.objetosEscondidos.push(new ObjetoEscondido( 90, 260, 90, 50, "espada", 4));
    this.objetosEscondidos.push(new ObjetoEscondido( 375, 170, 60, 60, "gema", 5));
    this.objetosEscondidos.push(new ObjetoEscondido( 580, 55, 70, 70, "corona", 6));
     this.objetosEscondidos.push(new ObjetoEscondido( 330, 250, 30, 30, "anillo", 7));

    this.totalObjetos = this.objetosEscondidos.length;
   }

   revisarClick(px, py) {
    if (this.estado !== "JUGANDO") return;

    for (let obj of this.objetosEscondidos) {
      if (obj.fueClickeado(px, py)) {
        obj.encontrado = true;
        this.objetosEncontrados++;

        // revisa si ganó
        if (this.objetosEncontrados >= this.totalObjetos) {
          this.estado = "GANAR";
        }
        break;
      }
    }
   }

    actualizarTiempo() {
    // solo cuenta los 30 segundos del tiempo si estamos jugando
    if (this.estado === "JUGANDO") {

      if (frameCount % 60 === 0 && this.tiempoRestante > 0) {
        this.tiempoRestante--;
      }
     }
    }

  revisarCondiciones() {
    if (this.estado === "JUGANDO") {
    
      if (this.tiempoRestante <= 0) {
        this.estado = "PERDER";
      }
    }
  }

  // DIBUJO DE PANTALLAS
   dibujarPantallas() {
    // usamos la estructura else if para controlar el flujo de dibujo

     if (this.estado === "PORTADA") {
      this.dibujarPortada();
    } else if (this.estado === "INTRODUCCION") {
      this.dibujarIntroduccion();
     } else if (this.estado === "INSTRUCCIONES") {
      this.dibujarInstrucciones();
    } else if (this.estado === "JUGANDO") {
      this.dibujarJuego();
    }

    // las pantallas de ganar y perder
    else if (this.estado === "GANAR" || this.estado === "PERDER") {
      this.dibujarFinal(this.estado);
    } else if (this.estado === "CREDITOS") {
      this.dibujarCreditos();
    }

    // ponemos el temporizador y las reglas
    this.actualizarTiempo();
    this.revisarCondiciones();
  }

    dibujarPortada() {
    image(fondos.portada, 0, 0, width, height);
    image(fondos.sonido, 15, 15, 40, 40); //icono de sonido
     fill(255);
    stroke(237, 192, 26);
     textSize(20);
    textAlign(CENTER, CENTER);
    text("y los objetos perdidos", width / 2, height / 2 + 25);
     btnComenzar.dibujar();
  }

    dibujarIntroduccion() {
    image(fondos.introduccion, 0, 0, width, height);
    image(fondos.sonido, 15, 15, 40, 40); 
    fill(255);
     textAlign(CENTER, CENTER);
    textSize(15);
    text("Estás atrapado! Antes de que el tiempo \n termine (30 segundos) debes encontrar \n todos los objetos perdidos para que Aladin \n pueda ser liberado de la cueva.", 220, 116, 350, 150);
     btnSiguiente.dibujar();
   }

     dibujarInstrucciones() {
     image(fondos.instrucciones, 0, 0, width, height);
    image(fondos.sonido, 15, 15, 40, 40); 
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(15);
    text("Como Jugar:", 190, 35, 420, 150);
    text("Encuentra los 8 objetos que \n se muestran en el listados en \n la barra inferior", 250, 90, 300, 150);
    text("Si los encontras todos a tiempo ¡GANAS! \n Si se acaba el tiempo y no \n encontraste ninguno, ¡PERDES!", 250, 160, 300, 150);
     btnComenzarJuego.dibujar();
   }

    dibujarJuego() {

    image(fondos.juego, 0, 0, width, height);

     for (let obj of this.objetosEscondidos) {

   // el indiceImagen del objeto nos dice que imagen usar
      let img = iconosItem[obj.indiceImagen];
      // verificamos que la imagen exista para evitar errores si algo falla en la carga
      if (img) {
        push(); // guarda la configuración de dibujo actual
        if (obj.encontrado) {
          tint(255, 0, 0, 200); //esto pinta las imagenes cuando las encontras
        }

        image(img, obj.x, obj.y, obj.ancho, obj.alto);

        pop(); // restaura la configuración de dibujo original ,deshace el tint para otros dibujos
      }
    }
      // le pasamos el tiempo restante y el arreglo de objetos para que sepa qui mostrar
        this.barra.dibujar(this.tiempoRestante, this.objetosEscondidos);
  }

      dibujarFinal(resultado) {
    let imagenFinal = (resultado === "GANAR") ? fondos.ganar : fondos.perder;
    image(imagenFinal, 0, 0, width, height);
     image(fondos.sonido, 15, 15, 40, 40); 
     btnReiniciar.dibujar();
      btnCreditos.dibujar();
  }

    dibujarCreditos() {
    image(fondos.creditos, 0, 0, width, height);
    image(fondos.sonido, 15, 15, 40, 40); 
     fill(255);
    textAlign(CENTER, CENTER);
    textSize(36);
     text("Creditos", width / 2, 80);
    textSize(20);
    text("Creadoras: Gramajo Sofía \n y Godoy Lourdes \n PMIW ©2025", 250, 150, 350, 150);
      btnVolver.dibujar();
    }
  }

