function CantarResultado(){

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
    image(resultado, 512, 143);
    image(comment, 252, 233);
    image(acertos, 494, 347);
    image(erros, 494, 412);
    image(total, 494, 477);

    textFont('assets/fonts/watchwordDot-Regular.otf');
    textSize(32);
    fill(111, 193, 62);
    text('2', 768, 347);
    text('2', 768, 477);
    fill(255, 92, 92);
    text('3', 768, 412);

    novamenteButton.draw();
    menuButton.draw();

    checkPress();

  };

  var checkPress = function(){

    if (buttonPressed(novamenteButton)){
      state.currentScreen = 'cantar';
    }

    if (buttonPressed(menuButton)){
      state.currentScreen = 'menu';
    }

  };

}
