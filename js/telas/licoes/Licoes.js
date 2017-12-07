function Licoes(){

  var logo = loadImage('assets/telaInicial/logo.png');

  var jogosButton = new Button(613, 19, btnJogos);
  var licoesButton = new Button(767, 19, btnLicoesPress);
  var perfilButton = new Button(921, 19, btnPerfil);
  var sobreButton = new Button(1072, 19, btnSobre);

  var notasButton = new Button(329, 357, btnGradient, 'NOTAS');
  var ritmoButton = new Button(665, 357, btnGradient, 'RITMO');
  var intervalosButton = new Button(329, 495, btnGradient, 'INTERVALOS');
  var cantarButton = new Button(665, 499, btnGradient, 'TIMBRE');

  this.draw = function(){
    clear();
    background(bgNoise);

    fill(24, 24 ,24);
    noStroke();
    rect(0, 0, 1280, 74);

    fill(255);
    jogosButton.draw();
    licoesButton.draw();
    perfilButton.draw();
    sobreButton.draw();

    logo.resize(46, 0);
    image(logo, 82, 14);
    textFont(logoFont);
    textSize(30);
		text("Smart Ear", 145, 50);

    fill(255);
    textSize(40);
    textFont(boldFont);
    text("LIÇÕES BÁSICAS", width/7, 170);
    textFont(regularFont);
    textSize(32);
    text("Para melhor entendimento da teoria musical, leis as aulas abaixo e em seguida se divirta com os jogos.", width/7, 210, 950, 150);

    notasButton.draw();
    ritmoButton.draw();
    intervalosButton.draw();
    cantarButton.draw();

    checkPress();

  };

  var checkPress = function(){

    if (buttonPressed(notasButton)){
      state.currentScreen = 'treinarOuvido';
    }

    if (buttonPressed(ritmoButton)){
      state.currentScreen = 'intervalos';
    }

    if (buttonPressed(intervalosButton)){
      state.currentScreen = 'licaoIntervalos';
    }

    if (buttonPressed(cantarButton)){
      state.currentScreen = 'licaoTimbre';
    }

    if (buttonPressed(jogosButton)){
      state.currentScreen = 'menu';
    }

    if (buttonPressed(sobreButton)){
      state.currentScreen = 'sobre';
    }

    if (buttonPressed(perfilButton)){
      state.currentScreen = 'perfil';
    }

  };


}
