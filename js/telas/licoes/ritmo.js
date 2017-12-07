function LicaoRitmo(){

  var backButton = new Button(40, 40, btnBack);

  var myText = "Ritmo pode ser descrito como um movimento coordenado, uma repetição de intervalos musicais regulares ou irregulares, fortes ou fracos, longos ou breves, presentes na composição musical.\n \nPode ser ainda definido como a marcação do tempo de uma música. E para ajudar nessa marcação, existe o aparelho chamado Metrônomo. Um metrônomo marca o tempo dentro de um compasso, e um compasso nada mais é do que a forma de dividir grupos de sons dentro de uma composição.\n \nOu seja, o metrônomo é responsável por marcar a duração de cada som dentro de uma música.";

  this.draw = function(){
    clear();
    background(bgNoise);

    backButton.draw();

    fill(255);
    textAlign(LEFT);
    textFont(boldFont);
    textSize(45);
    text("RITMO", 161, 150);
    textFont(regularFont);
    textSize(30);
    drawText(myText, 161, 180);

    checkPress();

  };
  var checkPress = function(){
    if (buttonPressed(backButton)){
      state.currentScreen = 'licoes';
    }
  };
  var drawText = function(myText, x, y) {
    text(myText, x, y, 915, 600);
  };

}
