function Note(x, y, imagem, box, note){
  this.x = x;
  this.y = y;
  this.imagem = loadImage(imagem.url);
  this.imagemW = imagem.width;
  this.imagemH = imagem.height;
  this.centerX = this.x + this.imagemW/2;
  this.centerY = this.y + this.imagemH/2;
  this.note = note;
  this.corretPosX = box.centerX;
  this.corretPosY = box.centerY;
  this.inCorretPos = false;
  this.draggable = false;

  this.draw = function(){

    if (this.draggable) {
      this.centerX = mouseX;
      this.centerY = mouseY;
      this.x = this.centerX - this.imagemW/2;
      this.y = this.centerY - this.imagemH/2;
    }

    image(this.imagem, this.x, this.y);

    if ((this.centerX == this.corretPosX) && (this.centerY == this.corretPosY)){
      this.inCorretPos = true;
    } else {
      this.inCorretPos = false;
    }

  };

  this.playNota = function(){
    this.note.play();
  }

  this.adjustPosition = function(arr){

    var centerX = this.centerX;
    var centerY = this.centerY;

    if (this.draggable == false) {
      arr.forEach(function(item, index){

        var d = dist(centerX, centerY, item.centerX, item.centerY);

        if (d < 50){
          centerX = item.centerX;
          centerY = item.centerY;
        }

      });
    }

    this.centerX = centerX;
    this.centerY = centerY;
    this.x = this.centerX - this.imagemW/2;
    this.y = this.centerY - this.imagemH/2;

  };
}
