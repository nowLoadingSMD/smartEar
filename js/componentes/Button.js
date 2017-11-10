//Componente de botao que podera ser reusado em diversas telas

function Button(x, y, img, texto = ''){
  //Atributos que serao usados para desenhar o botao
  this.x = x;
  this.y = y;
  this.width = img.width;
  this.height = img.height;
  this.image = loadImage(img.url);
  this.texto = texto;

  this.draw = function(){
    image(this.image, this.x, this.y, this.width, this.height);
    fill(255);
    textSize(20);
    textAlign(CENTER);
    text(this.texto, this.x + this.width/2, this.y + this.height/2 + 5);
    textAlign(LEFT);
  }

}
