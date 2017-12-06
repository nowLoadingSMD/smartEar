function Login(){

  var firstTime = true;

  var esqueceuSenha = loadImage('assets/login/loginEsqueceuSenha.png');

  var backButton = new Button(38, 38, btnBack);
  var continuarButton = new Button(856, 328, btnGradient, 'CONTINUAR');

  var loginEmail = new Input((windowWidth - width) /2 + 138, ((windowHeight - height) / 2) + 267, 'Email');
  var loginSenha = new Input((windowWidth - width) /2 + 138, ((windowHeight - height) / 2) + 388, 'Senha');

  var inputNome, inputSenha, inputEmail;

  this.draw = function(){
    clear();
    background(bg);
    backButton.draw();

    if (firstTime){ //Gambiarra pra evitar que se crie varios elementos HTML
      //loginNome.draw();
      //loginSenha.draw();
      inputs();
      inputEmail.show();
      inputSenha.show();
      firstTime = false;
    }

    continuarButton.draw();
    image(esqueceuSenha, 892, 427, 208, 21);

    checkPress();
  };

  var checkPress = function(){

    if (buttonPressed(backButton)){
      firstTime = true;
      state.currentScreen = 'telaInicial';
      removeElements(); //Remover todos os elementos HTML da pagina
    }

    if (buttonPressed(continuarButton)){
      var exist = false;
        if(inputSenha.value() != "" && inputEmail.value() != ""){
          for(let i = 0; i < usuarios.length; i++)
            if(usuarios[i].email == inputEmail.value()){
              if(usuarios[i].senha == inputSenha.value()){
                exist = true;
                idUsuario = i;
              }
            }
          if(exist){
            console.log("entrou");
            firstTime = true;
            state.currentScreen = 'menu';
            removeElements();
          }else
            alert("Dados inválidos!");
      }
      else
        alert("Preencha todos os campos!");
    }
  }

  var inputs = function(){
    inputEmail = createInput();
    inputEmail.position(loginEmail.x, loginEmail.y);
    inputEmail.attribute("type", "text");
    inputEmail.attribute("placeholder", loginEmail.texto);
    inputEmail.hide();
    
    inputSenha = createInput();
    inputSenha.position(loginSenha.x, loginSenha.y);
    inputSenha.attribute("type", "text");
    inputSenha.attribute("placeholder", loginSenha.texto);
    inputSenha.hide();
  }


};
