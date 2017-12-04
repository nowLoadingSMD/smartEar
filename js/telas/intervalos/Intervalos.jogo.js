function IntervalosJogo(){

  var box = [];

  box[0] = {
    centerX: width/5,
    centerY: height/2.9 + 70
  };

  box[1] = {
    centerX: width/2,
    centerY: height/2.9 + 70
  };

  box[2] = {
    centerX: width - width/5,
    centerY: height/2.9 + 70
  };

  var firstDraw = true;

  var note = [];

  var exercise = new IntervalosExercicios();
  var exerciseList = [];

  var currentExercise = 0;

  var check = false;

  var pause = false;
  var posPause = 0;
  var estadoPause = false;
  var continuar = new Button(23, 125, pauseContinuar);
  var reiniciar = new Button(23, 294, pauseReiniciar);
  var sair = new Button(23, 463, pauseSair);
  var imgContinuar = loadImage('assets/pause/continuar.png');
  var imgReiniciar = loadImage('assets/pause/reiniciar.png');
  var imgSair = loadImage('assets/pause/sair.png');

  var backButton = new Button(50, 50, btnBack);
  var continueButton = new Button(width/2-286/2, height-height/6, btnGradient, 'CONTINUAR');
  var voceAcertou = loadImage('assets/intervalos/voceAcertou.png');

  this.draw = function(){

    if (firstDraw){
      for(var i = 0; i < 5; i++){
         exerciseList.push(exercise.getExercicio());
       }
       setNewExercise();
       firstDraw = false;
    }

    clear();
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

    if(pause)
      showPause();

    note.forEach(function(item){
      item.draw();
    });

    note.forEach(function(item){
      item.adjustPosition(box);
    });

    checkPress();

    var check = note.reduce(function(res, item){
      return item.inCorretPos && res;
    }, true);

    if (check) {
      drawFeedback();
    }

  }; // End of this.draw();

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

  var drawFeedback = function(){
    fill(0, 100);
    rect(0, 0, 1280, 720);
    image(voceAcertou, 462, 62);
    continueButton.draw();

    if (buttonPressed(continueButton)){
      check = false;
      currentExercise++;
      console.log(currentExercise);

      if (currentExercise > 4) {
        state.currentScreen = 'intervalosResultado';
        firstDraw = true;
        currentExercise = 0;
        note = [];
      } else {
        setNewExercise();
      }
    }
  }

  var checkPress = function(){
    if (buttonPressed(backButton)){
      pause = true;
    }

    if (buttonPressed(sair)){
      state.currentScreen = 'menu';
      pause = false;
      estadoPause = false;
      posPause = 0;
    }

    if (buttonPressed(reiniciar)){
      state.currentScreen = 'intervalos';
      pause = false;
      estadoPause = false;
      posPause = 0;
    }
    if (buttonPressed(continuar)){
      estadoPause = true;
    }
    if (buttonPressed(backButton)) {
      state.currentScreen = 'intervalos';
      check = false;
      firstDraw = true;
      currentExercise = 0;
      note = [];
    }

    if(mouseIsPressed){
      note.forEach(function(item){
        var d = dist(mouseX, mouseY, item.x + item.imagemW/2, item.y + item.imagemH/2);
        if (d < 50) {
          if (!item.draggable){
            item.playNota();
          }
          item.draggable = true;
        }
    });
    } else {
      note.forEach(function(item){
        item.draggable = false;
      });
    }
};

  var setNewExercise = function(){
    note[0] = new Note(width/2-100, height-height/4, btnSong, box[0], exerciseList[currentExercise].nota[0]);
    note[1] = new Note(width/2, height-height/4, btnSong, box[1], exerciseList[currentExercise].nota[1]);
    note[2] = new Note(width/2+100, height-height/4, btnSong, box[2], exerciseList[currentExercise].nota[2]);
  };

  var showPause = function(){
      background(35, 38, 37, 70);
      fill(68, 72, 71);
      noStroke();
      rect(0, 0, posPause, 720);
      textFont(regularFont);
      fill(255);
      
      if(posPause<128){
        image(imgContinuar, posPause-105, 125);
        image(imgReiniciar, posPause-105, 294);
        image(imgSair, posPause-105, 463);
        text("CONTINUAR", posPause-120, 235);
        text("REINICIAR", posPause-108, 403);
        text("SAIR", posPause-85, 570);
        if(!estadoPause)
          posPause+=10;
      }
      if(estadoPause)
        posPause-=10;
      if(posPause>=128 && !estadoPause){
        continuar.draw();
        text("CONTINUAR", 8, 235);
        reiniciar.draw();
        text("REINICIAR", 20, 403);
        sair.draw();
        text("SAIR", 43, 570);
      }

      if(estadoPause && posPause<=0){
        estadoPause = false;
        pause = false;
      }
      
      checkPress();
  };

}
