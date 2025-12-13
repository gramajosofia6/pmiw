 class Barra {
    
    constructor(x, y, itemTam) { 
        this.x = x; 
        this.y = y;
        this.itemTam = itemTam; 
        this.borde = 10;        
    }

    
       dibujar(objetosEscondidos) {
        let posicionX = this.x; // variable que guarda la posición horizontal actual para dibujar
        
        for (let i = 0; i < objetosEscondidos.length; i++) {
            let obj = objetosEscondidos[i];
            let img = iconosItem[obj.indiceImagen]; // variable global cargada en preload

            push();
            
           
            if (obj.encontrado) {
                // tinte gris para simular que está "tachado" 
                tint(150, 150, 150, 255); 
            }
            
           
            image(img, posicionX, this.y, this.itemTam, this.itemTam);

            //  Si fue encontrado, dibujar la línea 
            if (obj.encontrado) {
                noFill();
                stroke(255, 0, 0); 
                strokeWeight(4);
                
                // calcula el punto medio vertical del icono
                let centroY = this.y + this.itemTam / 2;
                
              
                line(posicionX, centroY, posicionX + this.itemTam, centroY);
            }
            
            pop();

            // mueve la posición X para el siguiente icono
            posicionX += this.itemTam + this.borde;
        }
    }
}
