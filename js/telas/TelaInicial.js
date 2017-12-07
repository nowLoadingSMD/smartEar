function TelaInicial(){
  var logo = loadImage('assets/telaInicial/logo.png');
  var textd = loadImage('assets/telaInicial/telaInicialText.png');
  var comment = loadImage('assets/telaInicial/telaInicialComment.png');

  var loginButton = new Button(833, 347, btnTransparent, 'ENTRAR');
  var cadastrarButton = new Button(833, 465, btnGradient, 'CADASTRAR');

  this.draw = function(){
    clear();
    background(bg);
    fill(255);
    logo.resize(155, 155);
    image(logo, 85, 133);
    textFont(logoFont);
    textSize(65);
    text("Smart Ear", 260, 240);
    textSize(58);
    textFont(boldFont);
    text("APRENDA MÚSICA DE", 85, height/2+30);
    text("UM JEITO FÁCIL", 85, height/2+100);
    textSize(32);
    textFont(regularFont);
    text("Comece os exercícios agora mesmo", 85, height/2+150);

    loginButton.draw();
    cadastrarButton.draw();

    checkPress();

  };

  var checkPress = function(){

    if (buttonPressed(loginButton)){
      state.animationPlaying = true;
      opacity = 150;
      state.currentScreen = 'login';
    }

    if (buttonPressed(cadastrarButton)){
      state.currentScreen = 'cadastrar';
    }

  }

};
