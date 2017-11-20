function TelaInicial(){
  var logo = loadImage('assets/telaInicial/telaInicialLogo.png');
  var textd = loadImage('assets/telaInicial/telaInicialText.png');
  var comment = loadImage('assets/telaInicial/telaInicialComment.png');

  var loginButton = new Button(833, 347, btnTransparent, 'Entrar');
  var cadastrarButton = new Button(833, 465, btnGradient, 'Cadastrar');

  this.draw = function(){
    clear();
    background(bg);
    fill(255);
    // image(logo, 85, 133);
    textFont(logoFont);
    textSize(60);
    text("Smart Ear", 250, 260);
    ellipse(width/7-20, 230, 150, 150);
    // image(text, 86, 345, 496, 117);
    textSize(58);
    textFont(boldFont);
    text("APRENDA MÚSICA DE", 85, height/2+30);
    text("UM JEITO FÁCIL", 85, height/2+100);
    // image(comment, 86, 490, 487, 30);
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


    // var drawText = function(myText) {
    //   text(myText, width/7, height/2, width/2-100, 150);
    // };

};
