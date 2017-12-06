function Perfil(){
	var logo = loadImage('assets/menu/logo_menu.png');
	var foto = loadImage('assets/perfil/perfil.png');

	var jogosButton = new Button(770, 19, btnJogos);
	var perfilButton = new Button(921, 19, btnPerfilPress);
	var sobreButton = new Button(1072, 19, btnSobre);

	var editarButton = new Button(111, 458, btnGradient, 'EDITAR');
	var sairButton = new Button(111, 559, btnTransparent, 'SAIR');

	var completed = true;

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

			drawBadges();
			drawDescription(570, 991, 245, 402, 560);

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
		text("Obtenha mais acertos do que erros após falhar em um exercício.", xRight, y1+5, 245, 75);
		text("Jogue um mesmo exercício 5 vezes.", xRight, y2+5, 232, 75);
		text("Jogue um exercício sem errar.", xRight, y3+5, 232, 75);
	}

	function drawBadges() {
		noStroke();

		drawNewbie();
		drawExplorer();
		drawExpert();
		drawPersistent();
		drawEnthusiastic();
		drawFirst();

		strokeWeight(0);
		noStroke();
	}

	function drawNewbie(){

		if (usuarios[idUsuario].badges.newbie){
			fill(82, 255, 255);
			ellipse(438+55, 222+55, 110, 110); //badge Newbie
			image(badges['newbie'], 457, 240);

			noFill();
			strokeWeight(3);
			stroke(255);
			ellipse(438+55, 222+55, 124, 124); //white circle

		} else {
			fill(193, 193, 193);
			ellipse(438+55, 222+55, 110, 110); //badge Newbie
			noFill();
			strokeWeight(3);
			stroke(82, 255, 255);
			arc(438+55, 222+55, 124, 124, radians(90), radians(270));
			ellipse(438+55, 222-7, 5, 5); //Newbie progress indicator
			noStroke();

			fill(255, 255, 255);
			textSize(35);
			textFont(regularFont);
			textAlign(CENTER);
			text("0%", 438+58, 222+65); //Newbie progress percentage
			textAlign(LEFT);
		}

	}

	function drawExplorer() {

		if (usuarios[idUsuario].badges.explorer){
			fill(255, 206, 82);
			ellipse(438+55, 378+55, 110, 110); //badge Explorer
			image(badges['explorer'], 463, 403);

			noFill();
			strokeWeight(3);
			stroke(255);
			ellipse(438+55, 378+55, 124, 124); //white circle

		} else {
			fill(193, 193, 193);
			ellipse(438+55, 378+55, 110, 110); //badge Explorer
			noFill();
			strokeWeight(3);
			stroke(255, 206, 82);
			arc(438+55, 378+55, 124, 124, radians(-70), radians(270));
			ellipse(438+55, 378-7, 5, 5); //Explorer progress indicator
			noStroke();

			fill(255, 255, 255);
			textSize(35);
			textFont(regularFont);
			textAlign(CENTER);
			text("0%", 438+58, 378+65); //Explorer progress percentage
			textAlign(LEFT);
		}

	}

	function drawExpert() {

		if (usuarios[idUsuario].badges.expert) {
			noFill();
			strokeWeight(3);
			stroke(255);
			ellipse(438+55, 534+55, 124, 124); //white circle

			fill(255, 82, 200);
			ellipse(438+55, 534+55, 110, 110); //badge Expert
			image(badges['expert'], 454, 558);

		} else {
			fill(193, 193, 193);
			ellipse(438+55, 534+55, 110, 110); //badge Expert
			noFill();
			strokeWeight(3);
			stroke(255, 82, 200);
			arc(438+55, 534+55, 124, 124, radians(-70), radians(270));
			ellipse(438+55, 534-7, 5, 5); //Expert progress indicator
			noStroke();

			fill(255, 255, 255);
			textSize(35);
			textFont(regularFont);
			textAlign(CENTER);
			text("0%", 438+58, 534+65); //Expert progress percentage
			textAlign(LEFT);
		}

	}

	function drawPersistent() {

		if (usuarios[idUsuario].badges.persistent){
			noFill();
			strokeWeight(3);
			stroke(255);
			ellipse(859+55, 222+55, 124, 124);

			fill(72, 114, 255);
			ellipse(859+55, 222+55, 110, 110); //badge Persistent
			image(badges['persistent'], 877, 245);

		} else {
			fill(193, 193, 193);
			ellipse(859+55, 222+55, 110, 110); //badge Persistent
			noFill();
			strokeWeight(3);
			stroke(72, 114, 255);
			arc(859+55, 222+55, 124, 124, radians(-70), radians(270));
			ellipse(859+55, 222-7, 5, 5); //Persistent progress indicator
			noStroke();

			fill(255, 255, 255);
			textSize(35);
			textFont(regularFont);
			textAlign(CENTER);
			text("10%", 859+58, 222+65); //Persistent progress percentage
			textAlign(LEFT);
		}

	}

	function drawEnthusiastic() {

		if (usuarios[idUsuario].badges.enthusiastic) {
			noFill();
			strokeWeight(3);
			stroke(255);
			ellipse(859+55, 378+55, 124, 124);

			fill(194, 96, 255);
			ellipse(859+55, 378+55, 110, 110); //badge Enthusiastic
			image(badges['enthusiastic'], 872, 395);

		} else {
			fill(193, 193, 193);
			ellipse(859+55, 378+55, 110, 110); //badge Enthusiastic
			noFill();
			strokeWeight(3);
			stroke(194, 96, 255);
			arc(859+55, 378+55, 124, 124, radians(-70), radians(270));
			ellipse(859+55, 378-7, 5, 5); //Enthusiastic progress indicator
			noStroke();

			fill(255, 255, 255);
			textSize(35);
			textFont(regularFont);
			textAlign(CENTER);
			text("0%", 859+58, 378+65); //Enthusiastic progress percentage
			textAlign(LEFT);
		}

	}

	function drawFirst(){

		if (usuarios[idUsuario].badges.first) {
			noFill();
			strokeWeight(3);
			stroke(255);
			ellipse(859+55, 534+55, 124, 124);

			fill(82, 255, 122);
			ellipse(859+55, 534+55, 110, 110); //badge First
			image(badges['first'], 876, 555);

		} else {
			fill(193, 193, 193);
			ellipse(859+55, 534+55, 110, 110); //badge First
			noFill();
			strokeWeight(3);
			stroke(82, 255, 122);
			arc(859+55, 534+55, 124, 124, radians(-70), radians(270));
			ellipse(859+55, 534-7, 5, 5); //First progress indicator
			noStroke();

			fill(255, 255, 255);
			textSize(35);
			textFont(regularFont);
			textAlign(CENTER);
			text("0%", 859+58, 534+65); //First progress percentage
			textAlign(LEFT);
		}

	}

}
