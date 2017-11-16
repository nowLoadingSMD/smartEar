function Ritmo(){

  var backButton = new Button(40, 40, btnBack);
  var ritmo = loadImage('assets/ritmo/ritmo.png');
  var comment = loadImage('assets/ritmo/comment.png');

  var continuarButton = new Button(498, 587, btnGradient, 'CONTINUAR');

  this.draw = function(){
    clear();
    background(bgNoise);

    backButton.draw();
    image(ritmo, 161, 143);
    image(comment, 161, 233);

    continuarButton.draw();

    checkPress();

  };

  var checkPress = function(){

    if (buttonPressed(backButton)){
      state.currentScreen = 'menu';
    }

    if (buttonPressed(continuarButton)){
      state.currentScreen = 'ritmoJogo';
    }

  };

}
