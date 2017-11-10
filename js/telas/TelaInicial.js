function TelaInicial(){

  var text = loadImage('assets/telaInicial/telaInicialText.png');
  var comment = loadImage('assets/telaInicial/telaInicialComment.png');

  var loginButton = new Button(833, 347, btnTransparent, 'Entrar');
  var cadastrarButton = new Button(833, 465, btnGradient, 'Cadastrar');

  this.draw = function(){
    clear();
    background(bg);
    fill(130);
    ellipseMode(CORNER);
    ellipse(85, 138, 125, 125);
    fill(255);
    image(text, 230, 175, 297, 66);
    image(text, 86, 345, 496, 117);
    image(comment, 86, 490, 487, 30);

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
