function Perfil(){
	var logo = loadImage('assets/menu/logo_menu.png');
	var foto = loadImage('assets/perfil/perfil.png');

	var jogosButton = new Button(770, 19, btnJogos);
	var perfilButton = new Button(921, 19, btnPerfilPress);
	var sobreButton = new Button(1072, 19, btnSobre);

	var editarButton = new Button(111, 458, btnGradient, 'EDITAR');
	var sairButton = new Button(111, 559, btnTransparent, 'SAIR');

	var badges = [];
	badges['newbie'] = loadImage('assets/badges/newbie.png');
	badges['explorer'] = loadImage('assets/badges/explorer.png');
	badges['expert'] = loadImage('assets/badges/expert.png');
	badges['persistent'] = loadImage('assets/badges/persistent.png');
	badges['enthusiastic'] = loadImage('assets/badges/enthusiastic.png');
	badges['first'] = loadImage('assets/badges/first.png');


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
	    text("SUAS CONQUISTAS", 438, 180);

	    // textSize(30);
	    // textFont(regularFont);
	    // text("#1 - Intervalos", 438, 260);
	    // text("#2 - Treinar Ouvido", 438, 366);
	    // text("#3 - Ritmo", 438, 470);
	    // text("#4 - Timbre", 438, 578);

			drawBadges();
			drawDescription(570, 991, 245, 402, 560);
	    // fill(108, 113, 112);
	    // rect(438, 272, 558, 35, 100);
	    // rect(438, 378, 558, 35, 100);
	    // rect(438, 482, 558, 35, 100);
	    // rect(438, 590, 558, 35, 100);
      //
	    // fill(82, 255, 255);
	    // rect(438, 272, 347, 35, 100); //pontuação de Intervalos
	    // fill(255, 82, 200);
	    // rect(438, 378, 164, 35, 100); //pontuação de Treinar Ouvido
	    // fill(255, 206, 82);
	    // rect(438, 482, 110, 35, 100); //pontuação de Ritmo
	    // fill(82, 255, 122);
	    // rect(438, 590, 70, 35, 100); //pontuação de Timbre

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

	function drawDescription(xLeft, xRight, y1, y2, y3) {
		textFont(boldFont);
		textSize(22);
		fill(255, 255, 255);
		text("NOVATO(A)", xLeft, y1);
		text("EXPLORADOR(A)", xLeft, y2);
		text("CRAQUE", xLeft, y3);
		text("PERSISTENTE", xRight, y1);
		text("EMPOLGADO(A)", xRight, y2);
		text("DE PRIMEIRA", xRight, y3);

		textFont(regularFont);
		textSize(21);
		text("Complete o tutorial.", xLeft, y1+5, 232, 75);
		text("Jogue todos os exercícios.", xLeft, y2+5, 232, 75);
		text("Jogue todos os exercícios sem errar.", xLeft, y3+5, 232, 75);
		text("Obtenha mais acertos do que erros após falhar em um exercício.", xRight, y1+5, 232, 75);
		text("Jogue um mesmo exercício 5 vezes.", xRight, y2+5, 232, 75);
		text("Jogue um exercício sem errar.", xRight, y3+5, 232, 75);
	}

	function drawBadges() {
		noFill();
		strokeWeight(3);
		stroke(255);
		// OBS.: Deixar sempre o segundo parametro de ângulo como 270. O arco inicia no ângulo 270, no centro e acima, e
		// termina no ângulo -90. 
		arc(438+55, 222+55, 124, 124, radians(-70), radians(270)); //Newbie progress
		arc(438+55, 378+55, 124, 124, radians(-70), radians(270)); //Explorer progress
		arc(438+55, 534+55, 124, 124, radians(-70), radians(270)); //Expert progress
		arc(859+55, 222+55, 124, 124, radians(-70), radians(270)); //Persistent progress
		arc(859+55, 378+55, 124, 124, radians(-70), radians(270)); //Enthusiastic progress
		arc(859+55, 534+55, 124, 124, radians(-70), radians(270)); //First progress

		noStroke();
		fill(82, 255, 255);
		ellipse(438+55, 222+55, 110, 110); //badge Newbie
		fill(255, 206, 82);
		ellipse(438+55, 378+55, 110, 110); //badge Explorer
		fill(255, 82, 200);
		ellipse(438+55, 534+55, 110, 110); //badge Expert
		fill(72, 114, 255);
		ellipse(859+55, 222+55, 110, 110); //badge Persistent
		fill(194, 96, 255);
		ellipse(859+55, 378+55, 110, 110); //badge Enthusiastic
		fill(82, 255, 122);
		ellipse(859+55, 534+55, 110, 110); //badge First
	}
}
