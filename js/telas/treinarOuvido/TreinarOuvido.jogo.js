function TreinarOuvidoJogo(){

  var soundButton = new Button(width/2-70, height/2-45, btnSound);

  var songButton = new Button(width/2-70, height/2+75, btnSong);

  var backButton = new Button(50, 50, btnBack);

  var doSusButton = new Button(width/2+255, height/2 - 75, btn, "DÓ#");
  var faSusButton = new Button(width/2+255, height/2 + 45, btn, "FA#");
  var solSusButton = new Button(width/2+255, height/2 + 165, btn, "SOL#");

  var check = false;

  this.draw = function(){

    background(35, 38, 37);

    backButton.draw();

    textSize(25);
		text("Sm de referência: lá", width/7+40, height/2-12);
    soundButton.draw();

    text("Que nota é essa?", width/7+40, height/2+108);
    songButton.draw();

    doSusButton.draw();
    faSusButton.draw();
    solSusButton.draw();

    checkPress();

  }

  var checkPress = function(){

    if (buttonPressed(backButton)){
      state.currentScreen = 'treinarOuvido';
    }

    if (buttonPressed(soundButton)){
      la.play();
    }

    if (buttonPressed(songButton)){
      fa.play();
    }

    if (buttonPressed(faSusButton)){
      check = true;
      background(35, 38, 37, 80);
      textSize(40);
      fill(111, 193, 62);
      text("VOCÊ ACERTOU!", width/2-140, 120);
      textSize(30);
      fill(255);
      text("Parabéns! A nota correta era ", width/2-190, 200);
      fill(111, 193, 62);
      text("Fá", width/2+205, 200);
    }

    if (buttonPressed(doSusButton) || (buttonPressed(solSusButton))){
      check = true;
      background(35, 38, 37, 80);
      textSize(40);
      fill(255, 92, 92);
      text("VOCÊ ERROU!", width/2-120, 120);
      textSize(30);
      fill(255);
      text("A nota correta era ", width/2-120, 200);
      fill(255, 92, 92);
      text("Fá", width/2+130, 200);
    }

  };


}
