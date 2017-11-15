function Login(){

  var firstTime = true;

  var esqueceuSenha = loadImage('assets/login/loginEsqueceuSenha.png');

  var backButton = new Button(38, 38, btnBack);
  var continuarButton = new Button(856, 328, btnGradient, 'CONTINUAR');

  var loginNome = new Input(138, 267, 'Nome ou Email');
  var loginSenha = new Input(138, 388, 'Senha');

  this.draw = function(){
    clear();
    background(bg);
    backButton.draw();

    if (firstTime){ //Gambiarra pra evitar que se crie varios elementos HTML
      loginNome.draw();
      loginSenha.draw();
      firstTime = false;
    }

    continuarButton.draw();
    image(esqueceuSenha, 892, 427, 208, 21);

    checkPress();
  };

  var checkPress = function(){

    if (buttonPressed(backButton)){
      firstTime = true;
      state.currentScreen = 'telaInicial';
      removeElements(); //Remover todos os elementos HTML da pagina
    }

    if (buttonPressed(continuarButton)){
      firstTime = true;
      removeElements();
      state.currentScreen = 'menu';
    }
  }


};
