function LicaoNotas(){

	var texto1 = loadImage('assets/licoes/notas1.png');
  var texto2 = loadImage('assets/licoes/notas2.png');
  var texto3 = loadImage('assets/licoes/notas3.png');

  var backButton = new Button(40, 40, btnBack);

  var myText = "São sinais gráficos e sonoros que foram criados para representar as variações da altura do som musical. Existem sete notas musicais que são chamada de notas naturais:";
  var myText2 = "Além das 7 notas naturais, existem as que são identificadas por um sustenido (#) ou bemol (b) associados a essas notas.";
	var myText3 = "Além dos monossílabos, pode-se representar as notas musicais por meio de letras maiúsculas. Representação em inglês: ";
  
  this.draw = function(){
    clear();
    background(bgNoise);

    backButton.draw();

    fill(255);
    textAlign(LEFT);
    textFont(boldFont);
    textSize(45);
    text("NOTAS", 161, 150);
    textFont(regularFont);
    textSize(30);
    drawText(myText, 161, 180);
    drawText(myText2, 161, 361);
    drawText(myText3, 161, 508);

    image(texto1, 292, 303);
    image(texto2, 292, 446);
    image(texto3, 160, 593);

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