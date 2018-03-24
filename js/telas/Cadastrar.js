function Cadastrar(){

  var firstTime = true;

  var backButton = new Button(38, 38, btnBack);
  var continuarButton = new Button(856, 325, btnGradient, 'CONTINUAR');

  var cadastrarNome = new Input(((windowWidth - width) / 2) + 137, ((windowHeight - height) / 2) + 205, 'Nome');
  var cadastrarEmail = new Input(((windowWidth - width) / 2) + 137, ((windowHeight - height) / 2) + 325, 'Email');
  var cadastrarSenha = new Input(((windowWidth - width) / 2) + 137, ((windowHeight - height) / 2) + 445, 'Senha');

  var inputNome, inputSenha, inputEmail;

  this.draw = function(){
    clear();
    background(bg);
    backButton.draw();

    if (firstTime){ //Gambiarra pra evitar que varios elementos HTML sejam desenhados
    	inputs();
    	inputNome.show();
    	inputEmail.show();
      inputSenha.show();
      /*cadastrarNome.draw();
      cadastrarSenha.draw();
      cadastrarEmail.draw();*/
      firstTime = false;
    }
    textFont(boldFont);
    continuarButton.draw();
    textFont(regularFont);

    checkPress();

  };

  var checkPress = function(){

    if (buttonPressed(backButton)){
      firstTime = true;
      state.currentScreen = 'telaInicial';
      removeElements(); //Remover todos os elementos HTML da pagina
    } else if (buttonPressed(continuarButton)){
      /*firstTime = true;
      state.currentScreen = 'menu';
      removeElements();*/
      var exist = false;
      	if(inputNome.value() != "" && inputSenha.value() != "" && inputEmail.value() != ""){
      		for(let i = 0; i < usuarios.length; i++)
      			if(usuarios[i].email == inputEmail.value())
      				exist = true;
      		if(!exist){
		      	var pessoa = {
                          nome:inputNome.value(),
                          senha: inputSenha.value(),
                          email: inputEmail.value(),
                          pontos: {
                            intervalos: [],
                            treinarOuvido: [],
                            ritmo: [],
                            cantar: []
                          },
                          badges: {
                            newbie: false,
                            explorer: false,
                            expert: false,
                            persistent: false,
                            enthusiastic: false,
                            first: false
                          },
                          badgesProgress: {
                            explorer: [false, false, false],
                            expert: [false, false, false],
                            enthusiastic : [0, 0, 0]
                          }
            };
    				usuarios.push(pessoa);
    				localStorage.vec = JSON.stringify(usuarios);
    				firstTime = true;
            idUsuario = usuarios.length-1;
  			    state.currentScreen = 'tutorial';
  			    removeElements();
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

    inputEmail = createInput();
  	inputEmail.position(cadastrarEmail.x, cadastrarEmail.y);
  	inputEmail.attribute("type", "text");
  	inputEmail.attribute("placeholder", cadastrarEmail.texto);
  	inputEmail.hide();

  	inputSenha = createInput();
  	inputSenha.position(cadastrarSenha.x, cadastrarSenha.y);
  	inputSenha.attribute("type", "password");
  	inputSenha.attribute("placeholder", cadastrarSenha.texto);
  	inputSenha.hide();

  }
};
