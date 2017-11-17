function Cantar(){

  var backButton = new Button(40, 38, btnBack);
  var continuarButton = new Button(498, 587, btnGradient, 'CONTINUAR');
  var timbre = loadImage('assets/cantar/timbre.png');
  var comment = loadImage('assets/cantar/comment.png');

  var myText = "Para esse exercício, você terá que cantar a nota pedida. Para lhe ajudar, escute-a clicando no botão       .Você também terá que manter o som de sua voz por pelo menos 2 segundos. ";

  this.draw = function(){
    clear();
    background(bgNoise);

    backButton.draw();
    // image(timbre, 160, 143);
    // image(comment, 160, 233);

    textFont(boldFont);
    textSize(40);
    text("TIMBRE", width/7, height/4);
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
      state.currentScreen = 'cantarJogo';
    }

  };

  var drawText = function(myText) {
    text(myText, width/7, height/3, 915, 150);
  };
}
