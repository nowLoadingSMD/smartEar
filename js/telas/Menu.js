function Menu(){




  var header = loadImage('assets/menu/header.png');
  var header2 = loadImage('assets/menu/header2.png');

  var jogosButton = new Button(83, 19, btnJogos);
  var perfilButton = new Button(769, 19, btnPerfil);
  var configButton = new Button(920, 19, btnConfig);
  var sobreButton = new Button(1072, 19, btnSobre);

  var intervalosButton = new Button(93, 340, intervalosIcon);
  var treinarOuvidoButton = new Button(394, 340, treinarOuvidIcon);
  var ritmoButton = new Button(689, 340, ritmoIcon);
  var cantarButton = new Button(984, 340, timbreIcon);

  this.draw = function(){
    clear();
    background(bgNoise);

    fill(0, 0 ,9);
    noStroke();
    rect(0, 0, 1280, 74);

    fill(255);
    jogosButton.draw();
    perfilButton.draw();
    configButton.draw();
    sobreButton.draw();

    image(header, 420, 141);
    image(header2, 189, 206);

    intervalosButton.draw();
    treinarOuvidoButton.draw();
    ritmoButton.draw();
    cantarButton.draw();

    checkPress();

  };

  var checkPress = function(){

    if (buttonPressed(treinarOuvidoButton)){
      state.currentScreen = 'treinarOuvido';
    }

    if (buttonPressed(cantarButton)){
      state.currentScreen = 'cantar';
    }

    if (buttonPressed(ritmoButton)){
      state.currentScreen = 'ritmo';
    }

  };


};
