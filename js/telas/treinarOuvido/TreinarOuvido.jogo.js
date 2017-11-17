function TreinarOuvidoJogo(){

  var exercicios = new TreinarOuvidoExercicios();

  var exerciciosList = [];

  var exercicioAtual = 0;
  var noteChoosen;
  var check = false;

  var soundButton = new Button(523, 385, btnSound);
  var songButton = new Button(523, 255, btnSong);
  var backButton = new Button(50, 50, btnBack);
  var continuarButton = new Button(width/2-286/2, height-height/7, btnGradient, 'CONTINUAR');

  var opButton1 = new Button(832, 197, btnGradient);
  var opButton2 = new Button(832, 327, btnGradient);
  var opButton3 = new Button(832, 455, btnGradient);

  var txtSom = loadImage('assets/treinarOuvido/som.png');


  this.draw = function(){

    if (exercicioAtual == 0){
      for(var i = 0; i < 5; i++){
        exerciciosList.push(exercicios.getExercicio());
      }
    }

    if (check == false){
      clear();
    }

    opButton1.texto = exerciciosList[exercicioAtual].op1;
    opButton2.texto= exerciciosList[exercicioAtual].op2;
    opButton3.texto = exerciciosList[exercicioAtual].op3;

    background(bgNoise);

    backButton.draw();

    // image(txtSom, 162, 270);
    textSize(32);
    textFont(regularFont);
    text("Que nota é esta?", width/7, 300);
    text("Som de referência: ", width/7, 430);

    soundButton.draw();
    songButton.draw();

    opButton1.draw();
    opButton2.draw();
    opButton3.draw();

    checkPress();

    if (check == true){
      showFeedback(exerciciosList[exercicioAtual].right, noteChoosen);
    }

    if (exercicioAtual == 5){
      exercicioAtual = 0;
      state.currentScreen = 'treinarOuvidoResultado';
    }

  };

  var checkPress = function(){

    if (buttonPressed(backButton)){
      state.currentScreen = 'treinarOuvido';
    }

    if (buttonPressed(soundButton)){
      exerciciosList[exercicioAtual].notaReferencia.play();
    }

    if (buttonPressed(songButton)){
      exerciciosList[exercicioAtual].notaObjetivo.play();
    }

    if (buttonPressed(opButton1)){
      check = true;
      noteChoosen = exerciciosList[exercicioAtual].op1;

    }

    if (buttonPressed(opButton2)){
      check = true;
      noteChoosen = exerciciosList[exercicioAtual].op2;
    }

    if (buttonPressed(opButton3)){
      check = true;
      noteChoosen = exerciciosList[exercicioAtual].op3;
    }

    if (buttonPressed(continuarButton)){
      check = false;
      exercicioAtual++;
    }

  };

  var showFeedback = function(right, chose){

    if (right == chose){
      background(35, 38, 37, 80);
      textSize(40);
      fill(111, 193, 62);
      textAlign(CENTER);
      text("VOCÊ ACERTOU!", width/2, 90);
      textSize(30);
      fill(255);
      text("Parabéns! A nota correta era ", width/2, 154);
      fill(111, 193, 62);
      text(right, width/2+230, 155);
      continuarButton.draw();
    } else {
      background(35, 38, 37, 80);
      textSize(40);
      fill(255, 92, 92);
      textAlign(CENTER);
      text("VOCÊ ERROU!", width/2, 90);
      textSize(30);
      fill(255);
      text("A nota correta era ", width/2, 154);
      fill(255, 92, 92);
      text(right, width/2+170, 155);
      continuarButton.draw();
    }

    textAlign(LEFT);

  };


}
