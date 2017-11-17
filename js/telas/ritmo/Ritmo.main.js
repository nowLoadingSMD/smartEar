function Ritmo(){

  var backButton = new Button(40, 40, btnBack);
  var ritmo = loadImage('assets/ritmo/ritmo.png');
  var comment = loadImage('assets/ritmo/comment.png');

  var continuarButton = new Button(498, 587, btnGradient, 'CONTINUAR');

  var myText = "Clique no botão      no momento exato em que o metrônomo estiver no tempo correspondente.";

  this.draw = function(){
    clear();
    background(bgNoise);

    backButton.draw();
    // image(ritmo, 161, 143);
    // image(comment, 161, 233);

    textSize(40);
    textFont(boldFont);
    text("RITMO", width/7, height/4);
    textFont(regularFont);
    textSize(30);
    drawText(myText);

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

  var drawText = function(myText) {
    text(myText, width/7, height/3, 915, 150);
  };

}
