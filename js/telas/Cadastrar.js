function Cadastrar(){

  var firstTime = true;

  var backButton = new Button(38, 38, btnBack);
  var continuarButton = new Button(856, 325, btnGradient, 'CONTINUAR');

  var cadastrarNome = new Input(137, 205, 'Nome');
  var cadastrarEmail = new Input(137, 325, 'Email');
  var cadastrarSenha = new Input(137, 445, 'Senha');

  this.draw = function(){
    clear();
    background(bg);
    backButton.draw();

    if (firstTime){ //Gambiarra pra evitar que varios elementos HTML sejam desenhados
      cadastrarNome.draw();
      cadastrarSenha.draw();
      cadastrarEmail.draw();
      firstTime = false;
    }

    continuarButton.draw();

    checkPress();

  };

  var checkPress = function(){

    if (buttonPressed(backButton)){
      firstTime = true;
      state.currentScreen = 'telaInicial';
      removeElements(); //Remover todos os elementos HTML da pagina
    } else if (buttonPressed(continuarButton)){
      firstTime = true;
      state.currentScreen = 'menu';
      removeElements();
    }

  };
};
