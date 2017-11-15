//Componente de botao que podera ser reusado em diversas telas

function Button(x, y, img, texto = ''){
  //Atributos que serao usados para desenhar o botao
  this.x = x;
  this.y = y;
  this.width = img.width;
  this.height = img.height;
  this.image = loadImage(img.url);
  this.texto = texto;
  this.tamanho = 266;
  this.tamanho2 = 230;
  this.opcd = 300;

  this.draw = function(){
    if(this.width == 197 && this.height == 197){
      if ((mouseX >= this.x) && (mouseX <= this.x + this.width) && (mouseY >= this.y) && (mouseY <= this.y + this.height)){
        switch(this.x){
          case 93:
            stroke(82,255,255, this.opcd);
          break;
          case 394:
            stroke(255,82,200, this.opcd);
          break;
          case 689:
            stroke(255,206,82, this.opcd);
          break;
          case 984:
            stroke(177,255,82, this.opcd);
          break;
        }
        fill(255,255,255,0);
        ellipse(this.x+98.5, this.y+98.5, this.tamanho, this.tamanho);
        ellipse(this.x+98.5, this.y+98.5, this.tamanho2, this.tamanho2);
        if(this.tamanho<266){
          this.tamanho++;
        }
        if(this.tamanho == 266 && this.tamanho2<230){
          this.tamanho2++;
        }
        if(this.tamanho2 == 230){
          this.opcd-=10;
          if(this.opcd<0){
            this.opcd = 300;
            this.tamanho = 195;
            this.tamanho2 = 195;
          }
        }
    }else{
      this.tamanho = 266;
      this.tamanho2 = 230;
      this.opcd = 300;
      switch(this.x){
              case 93:
                stroke(82,255,255, this.opcd);
              break;
              case 394:
                stroke(255,82,200, this.opcd);
              break;
              case 689:
                stroke(255,206,82, this.opcd);
              break;
              case 984:
                stroke(177,255,82, this.opcd);
              break;
      }
      fill(255,255,255,0);
      ellipse(this.x+98.5, this.y+98.5, 266, 266);
      ellipse(this.x+98.5, this.y+98.5, 230, 230); 
    }
  } 
  image(this.image, this.x, this.y, this.width, this.height);
  noStroke();
  fill(255);
  textSize(20);
  textAlign(CENTER);
  text(this.texto, this.x + this.width/2, this.y + this.height/2 + 5);
  if ((mouseX >= this.x) && (mouseX <= this.x + this.width)){
    if ((mouseY >= this.y) && (mouseY <= this.y + this.height)){
      noStroke();

      if(this.width != 197 && this.height != 197){
        fill(255,255,255,30);
      	rect(this.x, this.y, this.width, this.height, 120);
      }
      fill(255);
	  }
  }
    textAlign(LEFT);
  }

}
