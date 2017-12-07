function Tutorial(){

	var continuarButton = new Button(1153, 583, pauseContinuar);
	var voltarButton = new Button(42, 583, pauseSair);
  var naoButton = new Button(327, 587, btnTransparent, 'NÃO, OBRIGADO');
  var tourButton = new Button(667, 587, btnGradient, 'FAZER TOUR');
  var contButton = new Button(667, 587, btnGradient, 'CONTINUAR');
  var refazerButton = new Button(327, 587, btnTransparent, 'REFAZER TUTORIAL');
  var licoesButton = new Button(591, 360, btnLicoes);
  var myText = "";
  var telas = [];
  telas[0] = loadImage('assets/tutorial/tela0.png');
  telas[1] = loadImage('assets/tutorial/tela1.png');
  telas[2] = loadImage('assets/tutorial/tela2.png');
  telas[3] = loadImage('assets/tutorial/tela3.png');
  telas[4] = loadImage('assets/tutorial/tela4.png');
  telas[5] = loadImage('assets/tutorial/tela5.png');
  telas[6] = loadImage('assets/tutorial/tela0.png');

  var telaAtual = 0;

	this.draw = function(){
    clear();
    removeElements();
    background(telas[telaAtual]);
    fill(255);
    switch(telaAtual){
      case 0:
        textSize(50);
        textFont(boldFont);
        textAlign(CENTER);
        text("Olá, " + usuarios[idUsuario].nome, 640, 180);
        textSize(30);
        textFont(regularFont);
        myText = "Antes de começar, nós recomendamos que você faça um pequeno tour pela interface do Smart Ear.\n Não vai demorar.";
        drawText(myText, 185, 230);
				textFont(boldFont);
				naoButton.draw();

				if (buttonPressed(naoButton)){ // Teste movido para ca para nao ser possivel pressionar o botao quando ele nao aparecer
						telaAtual=0;
						state.currentScreen = 'menu';
				}

        tourButton.draw();

				if (buttonPressed(tourButton)){
						telaAtual = 1;
				}
				textFont(regularFont);
      break;
      case 1:
        continuarButton.draw();
        textSize(20);
        textFont(boldFont);
        text("CONTINUAR", 1135, 690);
      break;
      case 2:
        continuarButton.draw();
        voltarButton.draw();
        textSize(20);
        textFont(boldFont);
        text("CONTINUAR", 1135, 690);
        text("VOLTAR", 44, 690);
      break;
      case 3:
        continuarButton.draw();
        voltarButton.draw();
        textSize(20);
        textFont(boldFont);
        text("CONTINUAR", 1135, 690);
        text("VOLTAR", 44, 690);
      break;
      case 4:
        continuarButton.draw();
        voltarButton.draw();
        textSize(20);
        textFont(boldFont);
        text("CONTINUAR", 1135, 690);
        text("VOLTAR", 44, 690);
      break;
      case 5:
        continuarButton.draw();
        voltarButton.draw();
        textSize(20);
        textFont(boldFont);
        text("CONTINUAR", 1135, 690);
        text("VOLTAR", 44, 690);
      break;
      case 6:
        licoesButton.draw();
        refazerButton.draw();
        contButton.draw();
        textSize(50);
        textFont(boldFont);
        textAlign(CENTER);
        text("É isso!", 640, 180);
        textSize(30);
        textFont(regularFont);
        myText = "Agora você pode continuar para o menu principal\n ou ver as lições antes de começar a jogar.";
        drawText(myText, 185, 230);
        textSize(20);
        textFont(boldFont);
        text("VER LIÇÕES", 642, 490);
      break;
    }
    checkPress();
		console.log(telaAtual);

  };
  var checkPress = function(){

    if (buttonPressed(continuarButton)){
      if(telaAtual!=6)
        telaAtual++;
    }

    if (buttonPressed(voltarButton)){
      if(telaAtual != 6)
        telaAtual--;
    }
    if (buttonPressed(contButton)){
      telaAtual=0;
      state.currentScreen = 'menu';
			usuarios[idUsuario].badges.newbie = true;
			notification.push('newbie');
    }
    if (buttonPressed(refazerButton)){
      telaAtual = 1;
    }
    if(buttonPressed(licoesButton)){
      telaAtual=0;
      state.currentScreen = 'licoes';
			usuarios[idUsuario].badges.newbie = true;
			notification.push('newbie');
    }

  };

  var drawText = function(myText, x, y) {
    text(myText, x, y, 915, 150);
  };

}
