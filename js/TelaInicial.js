function TelaInicial(){

  var loginButton = new Button(833, 347, btn, 'Entrar');
  var cadastrarButton = new Button(833, 465, btn, 'Cadastrar');

  this.draw = function(){
    clear();
    background(42, 42, 42);
    fill(130);
    ellipseMode(CORNER);
    ellipse(85, 138, 125, 125);
    fill(255);
    rect(230, 175, 297, 66);
    rect(86, 345, 496, 117);
    rect(86, 490, 487, 30);

    loginButton.draw();
    cadastrarButton.draw();

    checkPress();

  };

  var checkPress = function(){

    if (buttonPressed(loginButton)){
      state.currentScreen = 'login';
    }

    if (buttonPressed(cadastrarButton)){
      state.currentScreen = 'cadastrar';
    }

  }

};
