function Intervalos(){

  var backButton = new Button(50, 50, btnBack);
  var continuarButton = new Button(width/2-142, height-height/6, btnGradient, "CONTINUAR");
  var myText = "Nesse exercício você terá que colocar a nota na ordem certa da escala. Arraste a nota do botão         e coloque dentro dos círculos brancos."

  this.draw = function(){

    clear();
    background(bgNoise);
    fill(255);

    backButton.draw();

    textSize(40);
    textFont(boldFont);
    text("INTERVALOS", width/7, height/4);
    textFont(regularFont);
    textSize(30);
    image(iconSound, width/2-5, height/3+40);
    drawText(myText);

    continuarButton.draw();

    checkPress();

  };

  var checkPress = function(){

    if (buttonPressed(backButton)){
      state.currentScreen = 'menu';
    }

    if (buttonPressed(continuarButton)){
      state.currentScreen = 'intervalosJogo';
    }

  }

  var drawText = function(myText) {
    text(myText, width/7, height/3, 915, 150);
  };

};
