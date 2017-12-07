function Sobre(){

	var logo = loadImage('assets/menu/logo_menu.png');
	var jogosButton = new Button(770, 19, btnJogos);
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
    perfilButton.draw();
    sobreButton.draw();

    image(logo, 82, 14);
		textFont(boldFont);
		textSize(42);
		text("EQUIPE", 156, 200);
		text("ORIENTADORES", 156, 440);
		textSize(30);
		textFont(regularFont);
		text("Douglas Silva, Mateus Pereira, Paulo José, Rebecca Dantas, Thays Lunes", 156, 230, 915, 150);
		text("José Aires, Raquel Freire, Glaudiney Mendonça, Georgia Cruz, Ricardo Brauner, Paula Marques", 156, 470, 915, 150);

    checkPress();

  };
  var checkPress = function(){

    if (buttonPressed(jogosButton)){
      state.currentScreen = 'menu';
    }

    if (buttonPressed(perfilButton)){
      state.currentScreen = 'perfil';
    }

  };

}
