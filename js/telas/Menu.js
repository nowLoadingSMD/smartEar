function Menu(){

  var treinarOuvidIcon = {
      url: 'assets/menu/treinarOuvidoIcon.png',
      width: 223,
      height: 226
  };

  var header = loadImage('assets/menu/header.png');
  var header2 = loadImage('assets/menu/header2.png');

  var perfilButton = new Button(618, 19, btnPerfil);
  var configButton = new Button(769, 19, btnConfig);
  var equipeButton = new Button(920, 19, btnEquipe);
  var sobreButton = new Button(1072, 19, btnSobre);

  var treinarOuvidoButton = new Button(380, 297, treinarOuvidIcon);


  this.draw = function(){
    clear();
    background(35, 38, 37);

    fill(24, 24 ,24);
    noStroke();
    rect(0, 0, 1280, 74);

    fill(255);
    perfilButton.draw();
    configButton.draw();
    equipeButton.draw();
    sobreButton.draw();

    image(header, 420, 141);
    image(header2, 189, 206);

    treinarOuvidoButton.draw();

    checkPress();

  };

  var checkPress = function(){

    if (buttonPressed(treinarOuvidoButton)){
      state.currentScreen = 'treinarOuvido';
    }

  };


};
