function Login(){

  var esqueceuSenha = loadImage('assets/login/loginEsqueceuSenha.png');

  var backButton = new Button(38, 38, btnBack);
  var continuarButton = new Button(856, 328, btn, 'CONTINUAR');

  this.draw = function(){
    clear();
    background(bg);
    backButton.draw();
    rect(138, 388, 638, 70);
    rect(138, 267, 638, 70);
    continuarButton.draw();
    image(esqueceuSenha, 892, 427, 208, 21);

    checkPress();
  };

  var checkPress = function(){

    if (buttonPressed(backButton)){
      state.currentScreen = 'telaInicial';
    }
  }


};
