function IntervalosJogo(){

  // var exercicios = new IntervalosExercicios();
  //
  // var exerciciosList = [];
  //
  // var exercicioAtual = 0;
  var check = false;

  var backButton = new Button(50, 50, btnBack);
  var continuarButton = new Button(width/2-286/2, height-height/6, btnGradient, 'CONTINUAR');

  var opButton1 = new Button(width/2-100, height-height/5, btnSong);
  var opButton2 = new Button(width/2, height-height/5, btnSong);
  var opButton3 = new Button(width/2+100, height-height/5, btnSong);


  this.draw = function(){

    // if (exercicioAtual == 0){
    //   for(var i = 0; i < 5; i++){
    //     exerciciosList.push(exercicios.getExercicio());
    //   }
    // }

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

    opButton1.draw();
    opButton2.draw();
    opButton3.draw();

    checkPress();

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
    if (buttonPressed(opButton1)) {
      state.currentScreen = 'intervalosResultado';
    }
    //
    // if (buttonPressed(soundButton)){
    //   exerciciosList[exercicioAtual].notaReferencia.play();
    // }
    //
    // if (buttonPressed(songButton)){
    //   exerciciosList[exercicioAtual].notaObjetivo.play();
    // }
    //
    // if (buttonPressed(continuarButton)){
    //   check = false;
    //   exercicioAtual++;
    // }

  };


}
