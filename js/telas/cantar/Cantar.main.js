function Cantar(){

  var backButton = new Button(40, 38, btnBack);
  var continuarButton = new Button(498, 587, btnGradient, 'CONTINUAR');
  var timbre = loadImage('assets/cantar/timbre.png');
  var comment = loadImage('assets/cantar/comment.png');

  this.draw = function(){
    clear();
    background(bgNoise);

    backButton.draw();
    image(timbre, 160, 143);
    image(comment, 160, 233);

    continuarButton.draw();

    checkPress();

  };

  var checkPress = function(){

    if (buttonPressed(backButton)){
      state.currentScreen = 'menu';
    }
    if (buttonPressed(continuarButton)){
      state.currentScreen = 'cantarJogo';
    }

  };
}
