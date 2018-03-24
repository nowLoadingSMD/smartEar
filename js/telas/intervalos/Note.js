function Note(x, y, imagem, correctBox, boxes, note){
  this.x = x;
  this.y = y;
  this.imagem = loadImage(imagem.url);
  this.imagemW = imagem.width;
  this.imagemH = imagem.height;
  this.centerX = this.x + this.imagemW/2;
  this.centerY = this.y + this.imagemH/2;
  this.note = note;
  this.corretPosX = correctBox.centerX;
  this.corretPosY = correctBox.centerY;
  this.boxes = boxes;
  this.insideCorrectBox = false;
  this.insideBox = false;
  this.draggable = false;

  this.draw = function(){
    //verifica se a nota está sendo arrastada ou não
    if (this.draggable) {
      this.centerX = mouseX;
      this.centerY = mouseY;
      this.x = this.centerX - this.imagemW/2;
      this.y = this.centerY - this.imagemH/2;
    }

    image(this.imagem, this.x, this.y);

    //verifica se a nota está no box certo
    if ((this.centerX == this.corretPosX) && (this.centerY == this.corretPosY)){
      this.insideCorrectBox = true;
    } else {
      this.insideCorrectBox = false;
    }

    this.insideBox = checkInside(this.boxes, this.centerX, this.centerY);

  };

  this.playNota = function(){
    this.note.play();
  }

  var checkInside = function(boxes, centerX, centerY){
    var result = false;
    boxes.forEach(function(item){
      if ((centerX == item.centerX) && (centerY == item.centerY)){
        result = true;
      }
    });
    return result;
  }

  //ajusta a nota para o centro do box quando estiver próxima
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
