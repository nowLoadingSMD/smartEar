function EditarPerfil(){
	var logo = loadImage('assets/menu/logo_menu.png');
	var foto = loadImage('assets/perfil/perfil.png');

	var firstTime = true;

	var jogosButton = new Button(770, 19, btnJogos);
	var perfilButton = new Button(921, 19, btnPerfilPress);
	var sobreButton = new Button(1072, 19, btnSobre);

	var cadastrarNome = new Input(((windowWidth - width) / 2) + 480, ((windowHeight - height) / 2) + 186, 'Nome');
	var cadastrarEmail = new Input(((windowWidth - width) / 2) + 480, ((windowHeight - height) / 2) + 297, 'Email');
	var cadastrarSenha = new Input(((windowWidth - width) / 2) + 480, ((windowHeight - height) / 2) + 408, 'Senha');

	var inputNome, inputSenha, inputEmail;

	var salvarButton = new Button(667, 587, btnGradient, 'SALVAR');
	var cancelarButton = new Button(327, 587, btnTransparent, 'CANCELAR');

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

	    if (firstTime){ //Gambiarra pra evitar que varios elementos HTML sejam desenhados
	    	inputs();
	    	inputNome.show();
	    	inputSenha.show();
	    	inputEmail.show();
	      	firstTime = false;
	    }

	    salvarButton.draw();
	    cancelarButton.draw();

	    image(logo, 82, 14);
	    image(foto, 149, 206);

	    checkPress();

  	};
  	var checkPress = function(){

    if (buttonPressed(jogosButton)){
      state.currentScreen = 'menu';
      firstTime = true;
      removeElements();
    }

    if (buttonPressed(sobreButton)){
    	removeElements();
    	firstTime = true;
      state.currentScreen = 'sobre';
    }

    if (buttonPressed(cancelarButton)){
    	removeElements();
    	firstTime = true;
      state.currentScreen = 'perfil';
    }

    if(buttonPressed(salvarButton)){
    	var exist = false;
      	if(inputNome.value() != "" && inputSenha.value() != "" && inputEmail.value() != ""){
      		if(usuarios[idUsuario].email != inputEmail.value()){
	      		for(let i = 0; i < usuarios.length; i++)
	      			if(usuarios[i].email == inputEmail.value())
	      				exist = true;
      		}
      		if(!exist){
		      	usuarios[idUsuario].nome = inputNome.value();
		      	usuarios[idUsuario].email = inputEmail.value();
		      	usuarios[idUsuario].senha = inputSenha.value();
				localStorage.vec = JSON.stringify(usuarios);
				firstTime = true;
				removeElements();
			    state.currentScreen = 'perfil';
			}else
				alert("Email já existente!");
		}
		else
			alert("Preencha todos os campos!");
    	}



  };
  var inputs = function(){
  	inputNome = createInput();
  	inputNome.position(cadastrarNome.x, cadastrarNome.y);
  	inputNome.attribute("type", "text");
  	inputNome.attribute("placeholder", cadastrarNome.texto);
  	inputNome.hide();

  	inputSenha = createInput();
  	inputSenha.position(cadastrarSenha.x, cadastrarSenha.y);
  	inputSenha.attribute("type", "text");
  	inputSenha.attribute("placeholder", cadastrarSenha.texto);
  	inputSenha.hide();

  	inputEmail = createInput();
  	inputEmail.position(cadastrarEmail.x, cadastrarEmail.y);
  	inputEmail.attribute("type", "text");
  	inputEmail.attribute("placeholder", cadastrarEmail.texto);
  	inputEmail.hide();
  }

}
