function Sobre(){

	var logo = loadImage('assets/menu/logo_menu.png');
	var texto = loadImage('assets/sobre/sobre.png');

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
    image(texto, 156, 176);
    
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