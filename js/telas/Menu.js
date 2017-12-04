function Menu(){

  var header = loadImage('assets/menu/header.png');
  var header2 = loadImage('assets/menu/header2.png');
  var logo = loadImage('assets/menu/logo_menu.png');

  var jogosButton = new Button(770, 19, btnJogosPress);
  var perfilButton = new Button(921, 19, btnPerfil);
  var sobreButton = new Button(1072, 19, btnSobre);

  var intervalosButton = new Button(166, 351, intervalosIcon);
  var treinarOuvidoButton = new Button(425, 351, treinarOuvidIcon);
  var ritmoButton = new Button(684, 351, ritmoIcon);
  var cantarButton = new Button(943, 351, timbreIcon);

  this.draw = function(){
    clear();
    background(bgNoise);

    fill(24, 24 ,24);
    noStroke();
    rect(0, 0, 1280, 74);

    fill(255);
    jogosButton.draw();
    perfilButton.draw();
    sobreButton.draw();

    image(logo, 82, 14);
    // image(header, 420, 141);
    // image(header2, 189, 206);

    textSize(42);
    textFont(boldFont);
    textAlign(CENTER);
    text("Escolha um dos jogos", width/2, height/4.5);
    textFont(regularFont);
    textSize(32);
    text("Quanto mais você jogar, melhor compreenderá a teoria musical", width/2, height/3);

    intervalosButton.draw();
    treinarOuvidoButton.draw();
    ritmoButton.draw();
    cantarButton.draw();

    textSize(20);
    textAlign(CENTER);
    text("INTERVALOS", 166+171/2, 351+230);
    text("TREINAR OUVIDO", 425+171/2, 351+230);
    text("RITMO", 684+171/2, 351+230);
    text("TIMBRE", 943+171/2, 351+230);

    checkPress();

  };

  var checkPress = function(){

    if (buttonPressed(treinarOuvidoButton)){
      state.currentScreen = 'treinarOuvido';
    }

    if (buttonPressed(intervalosButton)){
      state.currentScreen = 'intervalos';
    }

    if (buttonPressed(cantarButton)){
      state.currentScreen = 'cantar';
    }

    if (buttonPressed(ritmoButton)){
      state.currentScreen = 'ritmo';
    }

    if (buttonPressed(sobreButton)){
      state.currentScreen = 'sobre';
    }

    if (buttonPressed(perfilButton)){
      state.currentScreen = 'perfil';
    }

  };


}
