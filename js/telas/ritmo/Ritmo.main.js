function Ritmo(){

  var backButton = new Button(40, 40, btnBack);
  var ritmo = loadImage('assets/ritmo/ritmo.png');
  var comment = loadImage('assets/ritmo/comment.png');
  var iconNota = loadImage("assets/icons/icon_nota.png");

  var continuarButton = new Button(498, 587, btnGradient, 'CONTINUAR');
  var explicacao = loadImage('assets/ritmo/explicacao.png');
  var myText = "Você deve começar apertando o play para iniciar o metrônomo. Depois clique no botão das notas no momento exato em que a barra verde do som do metrônomo estiver passando por elas.";

  this.draw = function(){
    clear();
    background(bgNoise);

    backButton.draw();
    // image(ritmo, 161, 143);
    // image(comment, 161, 233);
    //image(iconNota, 415, 233);
    textSize(40);
    textFont(boldFont);
    text("RITMO", width/7, 150);
    textFont(regularFont);
    textSize(30);
    drawText(myText, width/7, 180);
    image(explicacao, 334, 340);

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

  var drawText = function(myText, x, y) {
    text(myText, x, y, 915, 150);
  };

}
