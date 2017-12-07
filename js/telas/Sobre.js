function Sobre(){

	var logo = loadImage('assets/telaInicial/logo.png');
	var nowloading = loadImage('assets/sobre/nowloadinglogo.png');
	var ufc = loadImage('assets/sobre/ufclogo.png');
	var smd = loadImage('assets/sobre/smdlogo.png');

	var jogosButton = new Button(613, 19, btnJogos);
  var licoesButton = new Button(767, 19, btnLicoesMenu);
  var perfilButton = new Button(921, 19, btnPerfil);
  var sobreButton = new Button(1072, 19, btnSobrePress);

	this.draw = function(){
    clear();
    background(bgNoise);

    fill(24, 24 ,24);
    noStroke();
    rect(0, 0, 1280, 74);

    fill(255);
    jogosButton.draw();
		licoesButton.draw();
    perfilButton.draw();
    sobreButton.draw();

		ufc.resize(62, 102);
		smd.resize(117, 90);
		nowloading.resize(492, 127);

		logo.resize(46, 0);
    image(logo, 82, 14);
		textFont(logoFont);
		textSize(30);
		text("Smart Ear", 145, 50);

		textFont(boldFont);
		textSize(32);
		text("Smart Ear é um projeto desenvolvido pela equipe", 156, 200);
		image(nowloading, 156, 244);
		text("sob a orientação dos professores", 156, 445);
		textFont(regularFont);
		// text("Douglas Silva, Mateus Pereira, Paulo José, Rebecca Dantas, Thays Lunes", 156, 230, 915, 150);
		text("José Aires, Raquel Freire, Glaudiney Mendonça, Georgia Cruz, Ricardo Brauner e Paula Marques.", 156, 475, 915, 150);
		image(ufc, 1019, 573);
		image(smd, 1103, 576);



    checkPress();

  };
  var checkPress = function(){

    if (buttonPressed(jogosButton)){
      state.currentScreen = 'menu';
    }

		if (buttonPressed(licoesButton)){
			state.currentScreen = 'licoes';
		}

    if (buttonPressed(perfilButton)){
      state.currentScreen = 'perfil';
    }

  };

}
