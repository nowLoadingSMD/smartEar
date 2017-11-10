function Cadastrar(){

  var backButton = new Button(38, 38, btnBack);
  var continuarButton = new Button(856, 325, btnGradient, 'CONTINUAR');

  this.draw = function(){
    clear();
    background(bg);
    backButton.draw();
    rect(137, 205, 638, 70);
    rect(137, 325, 638, 70);
    rect(137, 445, 638, 70);
    continuarButton.draw();

    checkPress();

  };

  var checkPress = function(){

    if (buttonPressed(backButton)){
      state.currentScreen = 'telaInicial';
    } else if (buttonPressed(continuarButton)){
      state.currentScreen = 'menu';
    }

  };
};
