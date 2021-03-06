function TreinarOuvidoResultado(){

  var novamenteButton = new Button(327, 586, btnTransparent, 'NOVAMENTE');
  var menuButton = new Button(667, 586, btnGradient, 'MENU');

  var l, r, w;

  this.draw = function(){

    clear();
    background(bgNoise);

    l = usuarios[idUsuario].pontos.treinarOuvido.length;
    r = usuarios[idUsuario].pontos.treinarOuvido[l-1].right;
    w = usuarios[idUsuario].pontos.treinarOuvido[l-1].wrong;

    fill(255);
    textFont(boldFont);
    textSize(42);
    textAlign(CENTER);
    text('RESULTADO', width/2, 143);

    textFont(regularFont);
    textSize(32);

    if (r >= 3) {
      text('Parace que você se saiu muito bem. Parabéns!', width/2, 233);
    } else {
      text('Parece que você não foi muito bem. Tente novamente.', width/2, 233);
    }

    text('Acertos', 548, 347);
    text('Erros', 548, 412);

    textSize(32);
    fill(111, 193, 62);
    text(r, 777, 347);
    fill(255, 92, 92);
    text(w, 777, 412);

    textFont(boldFont);
    novamenteButton.draw();
    menuButton.draw();
    textFont(regularFont);

    checkPress();

  };

  var checkPress = function(){

    if (buttonPressed(novamenteButton)){
      state.currentScreen = 'treinarOuvido';
      checkBadges();
    }

    if (buttonPressed(menuButton)){
      state.currentScreen = 'menu';
      checkBadges();
    }

  };

  //Verifica o estado atual das conquistas de acordo com o resultado da sessao de exercicios
  var checkBadges = function(){

    if (!usuarios[idUsuario].badgesProgress.explorer[1]) {
      usuarios[idUsuario].badgesProgress.explorer[1] = true;

      var current = usuarios[idUsuario].badgesProgress.explorer.reduce(function(prev, item){
        return item && prev;
      }, true);

      if (current) {
        usuarios[idUsuario].badges.explorer = true;
        notification.push('explorer');
      }

    }

    if (!usuarios[idUsuario].badgesProgress.expert[1] && (w == 0)) {
      usuarios[idUsuario].badgesProgress.expert[1] = true;

      var current = usuarios[idUsuario].badgesProgress.expert.reduce(function(prev, item){
        return item && prev;
      }, true);

      if (current) {
        usuarios[idUsuario].badges.expert = true;
        notification.push('expert');
      }

    }

    if (!usuarios[idUsuario].badges.persistent) {
      if (l > 1) {
        if (usuarios[idUsuario].pontos.treinarOuvido[l-2].right < usuarios[idUsuario].pontos.treinarOuvido[l-1].right){
          usuarios[idUsuario].badges.persistent = true;

          notification.push('persistent');

        }
      }
    }

    usuarios[idUsuario].badgesProgress.enthusiastic[1]++;

    if(!usuarios[idUsuario].badges.enthusiastic && (usuarios[idUsuario].badgesProgress.enthusiastic[1] > 5)) {
      usuarios[idUsuario].badges.enthusiastic = true;

      notification.push('enthusiastic');
    }

    if (!usuarios[idUsuario].badges.first && (w == 0)) {
      usuarios[idUsuario].badges.first = true;

      notification.push('first');

    }

    localStorage.vec = JSON.stringify(usuarios);

  };

}
