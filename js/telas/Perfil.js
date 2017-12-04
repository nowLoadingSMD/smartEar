function Perfil(){
	var logo = loadImage('assets/menu/logo_menu.png');
	var foto = loadImage('assets/perfil/perfil.png');

	var jogosButton = new Button(770, 19, btnJogos);
	var perfilButton = new Button(921, 19, btnPerfilPress);
	var sobreButton = new Button(1072, 19, btnSobre);

	var editarButton = new Button(111, 458, btnGradient, 'EDITAR');
	var sairButton = new Button(111, 559, btnTransparent, 'SAIR');

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

	    editarButton.draw();
	    sairButton.draw();

	    textSize(25);
	    textFont(boldFont);
	    textAlign(CENTER);
	    text(usuarios[idUsuario].nome.toUpperCase(), 251, 380);
	    textSize(20);
	    textFont(regularFont);
	    text(usuarios[idUsuario].email, 251, 415);

	    textAlign(LEFT);
	    textSize(42);
	    textFont(boldFont);
	    text("RANKING", 438, 180);

	    textSize(30);
	    textFont(regularFont);
	    text("#1 - Intervalos", 438, 260);
	    text("#2 - Treinar Ouvido", 438, 366);
	    text("#3 - Ritmo", 438, 470);
	    text("#4 - Timbre", 438, 578);

	    fill(108, 113, 112);
	    rect(438, 272, 558, 35, 100);
	    rect(438, 378, 558, 35, 100);
	    rect(438, 482, 558, 35, 100);
	    rect(438, 590, 558, 35, 100);

	    fill(82, 255, 255);
	    rect(438, 272, 347, 35, 100); //pontuação de Intervalos
	    fill(255, 82, 200);
	    rect(438, 378, 164, 35, 100); //pontuação de Treinar Ouvido
	    fill(255, 206, 82);
	    rect(438, 482, 110, 35, 100); //pontuação de Ritmo
	    fill(82, 255, 122);
	    rect(438, 590, 70, 35, 100); //pontuação de Timbre

	    image(logo, 82, 14);
	    image(foto, 154, 130);
	    
	    checkPress();

  	};
  	var checkPress = function(){

    if (buttonPressed(jogosButton)){
      state.currentScreen = 'menu';
    }

    if (buttonPressed(sobreButton)){
      state.currentScreen = 'sobre';
    }

    if (buttonPressed(editarButton)){
      state.currentScreen = 'editarPerfil';
    }

    if (buttonPressed(sairButton)){
    	idUsuario = "";
      state.currentScreen = 'telaInicial';
    }

  };

}