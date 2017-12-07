function TreinarOuvido(){

  var backButton = new Button(50, 50, btnBack);
  var continuarButton = new Button(width/2-142, height-height/7, btnGradient, "CONTINUAR");
  var explicacao = loadImage('assets/treinarOuvido/explicacao.png');

  var myText = "Clique no botão de som de referência para poder ter uma base de comparação com a nota musical que você terá que acertar.";
  var myText2 = "Depois clique no botão da nota musical para escutá-la. Por fim, escolha entre uma das três opções de possíveis notas.";

  this.draw = function(){

    clear();
    background(bgNoise);
    fill(255);

    backButton.draw();
    //textFont('assets/fonts/watchwordDot-Regular.otf');
    textSize(40);
    textFont(boldFont);
    text("TREINAR OUVIDO", width/7, 150);
    textSize(30);
    textFont(regularFont);
    drawText(myText, width/7, 180);
    image(explicacao, 348, 282);
    drawText(myText2, width/7, 446);
    //image(iconSound, width/2+82, height/3);
    // text("Clique no botão de som de referência        e com base nele,", width/7, height/3);
    //image(iconSong, width/1.5+50, height/3+35);
    // text("tente acertar qual nota é reproduzida ao clicar no botão      .", width/7, height/3+40);
    // text("Em seguida clique em uma das notas ao lado que pareça ser", width/7, height/3+80);
    // text("a opção correta.", width/7, height/3+120);

    textFont(boldFont);
    continuarButton.draw();
    textFont(regularFont);

    checkPress();

  };

  var checkPress = function(){

    if (buttonPressed(backButton)){
      state.currentScreen = 'menu';
    }

    if (buttonPressed(continuarButton)){
      state.currentScreen = 'treinarOuvidoJogo';
    }

  }

  var drawText = function(myText, x, y) {
    text(myText, x, y, 915, 150);
  };



};
