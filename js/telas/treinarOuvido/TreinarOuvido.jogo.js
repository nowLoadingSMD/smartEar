function TreinarOuvidoJogo(){

  var exercicios = new Exercicios();

  var exerciciosList = [];

  for(var i = 0; i < 5; i++){
    exerciciosList.push(exercicios.getExercicio());
  }

  var exercicioAtual = 0;
  var noteChoosen;
  var check = false;

  var soundButton = new Button(width/2-70, height/2-45, btnSound);
  var songButton = new Button(width/2-70, height/2+75, btnSong);
  var backButton = new Button(50, 50, btnBack);
  var continuarButton = new Button(667, 585, btnGradient, 'CONTINUAR');

  var opButton1 = new Button(width/2+255, height/2 - 75, btnGradient, exerciciosList[exercicioAtual].op1);
  var opButton2 = new Button(width/2+255, height/2 + 45, btnGradient, exerciciosList[exercicioAtual].op2);
  var opButton3 = new Button(width/2+255, height/2 + 165, btnGradient, exerciciosList[exercicioAtual].op3);


  this.draw = function(){

    if (check == false){
      clear();
    }

    opButton1.texto = exerciciosList[exercicioAtual].op1;
    opButton2.texto= exerciciosList[exercicioAtual].op2;
    opButton3.texto = exerciciosList[exercicioAtual].op3;

    background(35, 38, 37);

    backButton.draw();

    textSize(25);
		text("Sm de referência: ", width/7+40, height/2-12);
    soundButton.draw();

    text("Que nota é essa?", width/7+40, height/2+108);
    songButton.draw();

    opButton1.draw();
    opButton2.draw();
    opButton3.draw();

    checkPress();

    if (check == true){
      showFeedback(exerciciosList[exercicioAtual].right, noteChoosen);
    }

    if (exercicioAtual == 5){
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
      text("VOCÊ ACERTOU!", width/2-140, 120);
      textSize(30);
      fill(255);
      text("Parabéns! A nota correta era ", width/2-190, 200);
      fill(111, 193, 62);
      text(right, width/2+205, 200);
      continuarButton.draw();
    } else {
      background(35, 38, 37, 80);
      textSize(40);
      fill(255, 92, 92);
      text("VOCÊ ERROU!", width/2-120, 120);
      textSize(30);
      fill(255);
      text("A nota correta era ", width/2-120, 200);
      fill(255, 92, 92);
      text(right, width/2+130, 200);
      continuarButton.draw();
    }

  };


}
