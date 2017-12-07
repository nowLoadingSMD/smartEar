function LicaoTimbre(){

	var texto = loadImage('assets/licoes/timbre.png');

  var backButton = new Button(40, 40, btnBack);

  var myText = "O timbre é o formato característico de uma onda sonora de acordo com o material que a produziu. É o timbre que faz com que uma nota Ré tocada em uma flauta seja diferente da mesma nota tocada em um violão.";
  var myText2 = "Cada som que você escuta é uma onda sonora. Pelo fato dos sons terem suas ondas com formato diferente, se torna possível diferenciar uns dos outros. É isso que permite que você ouça dois sons na mesma nota musical e ainda assim consiga diferencia-los.";
	
  this.draw = function(){
    clear();
    background(bgNoise);

    backButton.draw();

    fill(255);
    textAlign(LEFT);
    textFont(boldFont);
    textSize(45);
    text("TIMBRE", 161, 150);
    textFont(regularFont);
    textSize(30);
    drawText(myText, 161, 180);
    drawText(myText2, 161, 520);

    image(texto, 307, 380);

    checkPress();

  };
  var checkPress = function(){
    if (buttonPressed(backButton)){
      state.currentScreen = 'licoes';
    }
  };
  var drawText = function(myText, x, y) {
    text(myText, x, y, 915, 150);
  };

}