//Componente de texto que podera ser reusado em diversas telas

function Input(x, y, texto = ''){
  //Atributos que serao usados para desenhar o campo de texto
  this.x = x;
  this.y = y;
  this.texto = texto;
  //this.campo;
  /*this.draw = function(){
    campo = createInput();
    campo.position(x,y);
    campo.attribute("type", "text");
    campo.attribute("placeholder", texto);
  }*/
}
