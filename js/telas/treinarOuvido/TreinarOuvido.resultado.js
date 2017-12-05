function TreinarOuvidoResultado(){

  var novamenteButton = new Button(327, 586, btnTransparent, 'NOVAMENTE');
  var menuButton = new Button(667, 586, btnGradient, 'MENU');

  this.draw = function(){
    clear();
    background(bgNoise);

    var l = usuarios[idUsuario].pontos.treinarOuvido.length;
    var acertos = usuarios[idUsuario].pontos.treinarOuvido[l-1].acertos;
    var erros = usuarios[idUsuario].pontos.treinarOuvido[l-1].erros;

    fill(255);
    textFont(boldFont);
    textSize(42);
    textAlign(CENTER);
    text('RESULTADO', width/2, 143);

    textFont(regularFont);
    textSize(32);

    if (acertos >= 3) {
      text('Parace que você se saiu muito bem. Parabéns!', width/2, 233);
    } else {
      text('Parece que você não foi muito bem. Tente novamente.', width/2, 233);
    }

    text('Acertos', 548, 347);
    text('Erros', 548, 412);

    textSize(32);
    fill(111, 193, 62);
    text(acertos, 777, 347);
    fill(255, 92, 92);
    text(erros, 777, 412);

    novamenteButton.draw();
    menuButton.draw();

    checkPress();

  };

  var checkPress = function(){

    if (buttonPressed(novamenteButton)){
      state.currentScreen = 'treinarOuvido';
    }

    if (buttonPressed(menuButton)){
      state.currentScreen = 'menu';
    }

  };
}
