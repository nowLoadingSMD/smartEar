function IntervalosJogo(){

  var notas = [];
  var box = [];

  var exercicios = new IntervalosExercicios();
  var exerciciosList = [];

  var exercicioAtual = 0;
  var check = false;

  var backButton = new Button(50, 50, btnBack);
  var continuarButton = new Button(width/2-286/2, height-height/6, btnGradient, 'CONTINUAR');

  var voceAcertou = loadImage('assets/intervalos/voceAcertou.png');

  box[0] = {
    centerX: ((width/5) + (175-175/5)/2),
    centerY: ((height/2.9 + 70) + (175-175/5)/2),
  };

  box[1] = {
    centerX: (width/2) + (175-175/5)/2,
    centerY: (height/2.9 + 70) + (175-175/5)/2,
  };

  box[2] = {
    centerX: (width - width/5) + (175-175/5)/2,
    centerY: (height/2.9 + 70) + (175-175/5)/2,
  };

  //console.log(box[1]);

  notas[0] = new Nota(width/2-100, height-height/5, btnSong, box[0], sound.fa);
  notas[1] = new Nota(width/2, height-height/5, btnSong, box[1], sound.fa);
  notas[2] = new Nota(width/2+100, height-height/5, btnSong, box[2], sound.fa);

  //console.log(notas);

  //console.log(sound);


  this.draw = function(){

    if (exercicioAtual == 0){
      for(var i = 0; i < 5; i++){
         exerciciosList.push(exercicios.getExercicio());
       }
       notas.forEach(function(item, index){
         item.nota = exerciciosList[exercicioAtual].notas[index];
       });
       exercicioAtual++;
      console.log(notas);
     }

    if (check == false){
      clear();
    }

    background(bgNoise);
    backButton.draw();

    textSize(30);
    text("Intervalo:", 10+width/5-175/2, height/4.5); //175/2 é o raio da primeira elipse
    fill(111, 193, 62);
    text("Dó# - Mi#", 150+10+width/5-175/2, height/4.5);
    fill(255);
    textAlign(CENTER);
    text("Escolha uma das notas abaixo", width/2, height-height/3);
    stroke(240);
    drawBoard(2, 35, 175);

    notas.forEach(function(item){
      item.draw();
      item.ajustPosition(box);
    });

    checkPress();

    var result = notas.reduce(function(res, item){
      return item.inCorretPos && res;
    }, true);

    if (result) {
      check = true;
      image(voceAcertou,  462, 62);
      continuarButton.draw();
    }

    fill(150);
    ellipse(box[0].centerX, box[0].centerY, 10, 10);

  };

  var drawBoard = function(lineWeight, spacing, ellipseSize) {
    drawStrings(lineWeight, spacing);
    drawEllipses(ellipseSize, spacing*2);
  }

  var drawStrings = function(weight, spacing) {
    strokeWeight(weight);
    for (i = 0; i < 5; i++) {
      line(0, height/2.9+spacing*i, width, height/2.9+spacing*i);
    }
  }

  var drawEllipses = function(size, hSpacing) {
    fill("#2A2A2A");
    ellipse(width/5, height/2.9+hSpacing, size, size);
    ellipse(width/2, height/2.9+hSpacing, size, size);
    ellipse(width-width/5, height/2.9+hSpacing, size, size);

    fill("#7F7F7F");
    noStroke();
    ellipse(width/5, height/2.9+hSpacing, size-size/5, size-size/5);
    ellipse(width/2, height/2.9+hSpacing, size-size/5, size-size/5);
    ellipse(width-width/5, height/2.9+hSpacing, size-size/5, size-size/5);

    stroke(255);
  }

  var checkPress = function(){

    if (buttonPressed(backButton)){
      state.currentScreen = 'intervalos';
    }

    // if (buttonPressed(continuarButton)){
    //   check = false;
    //   exercicioAtual++;
    // }

    //console.log(notas);

    if(mouseIsPressed){
      notas.forEach(function(item){
        var d = dist(mouseX, mouseY, item.x, item.y);
        if (d < 50) {
          if (!item.draggable){
            item.playNota();
          }
          item.draggable = true;
        }
    });
  } else {
    notas.forEach(function(item){
      item.draggable = false;
    });
  }

};

}

function Nota(x, y, imagem, box, nota){
  this.x = x;
  this.y = y;
  this.imagem = loadImage(imagem.url);
  this.nota = nota;
  this.corretPosX = box.centerX;
  this.corretPosY = box.centerY;
  this.inCorretPos = false;
  this.draggable = false;

  this.draw = function(){

    if (this.draggable) {
      this.x = mouseX;
      this.y = mouseY;
    }
    fill(200);
    ellipse(this.x, this.y, 10, 10);
    image(this.imagem, this.x, this.y);

    if ((this.x == this.corretPosX) && (this.y == this.corretPosY)){
      this.inCorretPos = true;
    } else {
      this.inCorretPos = false;
    }

  };

  this.playNota = function(){
    this.nota.play();
  }

  this.ajustPosition = function(arr){

    var x = this.x;
    var y = this.y;

    if (this.draggable == false) {
      arr.forEach(function(item, index){
        //console.log(this.x);
        //console.log(this.y);
        var d = dist(x, y, item.centerX, item.centerY);

        if(index == 0){
          //console.log(d);
        }

        if (d < item.w){
          x = item.centerX;
          y = item.centerY;
        }

      });
    }

    this.x = x;
    this.y = y;

  };
}
