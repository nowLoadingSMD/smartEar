function TreinarOuvido(){

  var backButton = new Button(50, 50, btnBack);
  var continuarButton = new Button(width/2-142, height-150, btnGradient, "CONTINUAR");

  this.draw = function(){

    clear();
    background(bgNoise);
    fill(255);

    backButton.draw();

    textSize(40);
		text("TREINAR OUVIDO", width/7, height/4);
		textSize(30);
    image(iconSound, width/2+57, height/3-30);
    text("Clique no botão de som de referência        e com base nele,", width/7, height/3);
    image(iconSong, width/1.5+75, height/3+10);
    text("tente acertar qual nota é reproduzida ao clicar no botão      .", width/7, height/3+40);
		text("Em seguida clique em uma das notas ao lado que pareça ser", width/7, height/3+80);
		text("a opção correta.", width/7, height/3+120);

    continuarButton.draw();

    checkPress();

  };

  var checkPress = function(){

    if (buttonPressed(backButton)){
      state.currentScreen = 'menu';
    }

    if (buttonPressed(continuarButton)){
      state.currentScreen = 'treinarOuvidoJogo';
    }

  }

};
