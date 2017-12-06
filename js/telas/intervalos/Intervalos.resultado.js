function IntervalosResultado(){

  var resultado = loadImage('assets/treinarOuvido/resultado/resultado.png');
  var comment = loadImage('assets/treinarOuvido/resultado/comment.png');
  var acertos = loadImage('assets/treinarOuvido/resultado/acertos.png');
  var erros = loadImage('assets/treinarOuvido/resultado/erros.png');
  var total = loadImage('assets/treinarOuvido/resultado/total.png');

  var novamenteButton = new Button(327, 586, btnTransparent, 'NOVAMENTE');
  var menuButton = new Button(667, 586, btnGradient, 'MENU');

  this.draw = function(){
    clear();
    background(bgNoise);

    var l = usuarios[idUsuario].pontos.intervalos.length;
    var r = usuarios[idUsuario].pontos.intervalos[l-1].right;
    var w = usuarios[idUsuario].pontos.intervalos[l-1].wrong;

    fill(255);
    textFont(boldFont);
    textSize(42);
    textAlign(CENTER);
    text('RESULTADO', width/2, 143);

    textFont(regularFont);
    textSize(32);
    if (w >= 3) {
      text('Parece que você não foi muito bem. Tente novamente.', width/2, 233);
    } else {
      text('Parece que você se saiu muito bem. Parabéns!', width/2, 233);
    }

    text('Acertos', 548, 347);
    text('Erros', 548, 412);
    
    fill(111, 193, 62);
    text(r, 777, 347);
    fill(255, 92, 92);
    text(w, 777, 412);


    novamenteButton.draw();
    menuButton.draw();

    checkPress();

  };

  var checkPress = function(){

    if (buttonPressed(novamenteButton)){
      state.currentScreen = 'intervalos';
    }

    if (buttonPressed(menuButton)){
      state.currentScreen = 'menu';
    }

  };
}
