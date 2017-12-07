function LicaoIntervalos(){

	var texto = loadImage('assets/licoes/intervalos.png');

  var backButton = new Button(40, 40, btnBack);

  var myText = "Intervalo musical é a distância entre dois sons. Podemos usar esse termo para dizer: intervalo de um tom, intervalo de um semitom. Qualquer distância entre duas notas é um intervalo.";
  var myText2 = "A distância entre dois sustenidos é chamada de tom. Semitom, portanto, seria a distância entre apenas um sustenido (representado pelo símbolo #). Logo, um tom e meio = um tom + um semitom.";
	
  this.draw = function(){
    clear();
    background(bgNoise);

    backButton.draw();

    fill(255);
    textAlign(LEFT);
    textFont(boldFont);
    textSize(45);
    text("INTERVALOS", 161, 150);
    textFont(regularFont);
    textSize(30);
    drawText(myText, 161, 180);
    drawText(myText2, 161, 520);

    image(texto, 156, 319);

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