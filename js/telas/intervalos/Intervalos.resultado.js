function IntervalosResultado(){

  var resultado = loadImage('assets/treinarOuvido/resultado/resultado.png');
  var comment = loadImage('assets/treinarOuvido/resultado/comment.png');
  var acertos = loadImage('assets/treinarOuvido/resultado/acertos.png');
  var erros = loadImage('assets/treinarOuvido/resultado/erros.png');
  var total = loadImage('assets/treinarOuvido/resultado/total.png');

  var novamenteButton = new Button(327, 586, btnTransparent, 'NOVAMENTE');
  var menuButton = new Button(667, 586, btnGradient, 'MENU');

  var l, r, w;

  this.draw = function(){
    clear();
    background(bgNoise);

    l = usuarios[idUsuario].pontos.intervalos.length;
    r = usuarios[idUsuario].pontos.intervalos[l-1].right;
    w = usuarios[idUsuario].pontos.intervalos[l-1].wrong;

    fill(255);
    textFont(boldFont);
    textSize(42);
    textAlign(CENTER);
    text('RESULTADO', width/2, 143);

    textFont(regularFont);
    textSize(32);
    if (w >= 3) {
      text('Parece que você não foi muito bem. Tente novamente.', width/2, 233);
    } else {
      text('Parece que você se saiu muito bem. Parabéns!', width/2, 233);
    }

    text('Acertos', 548, 347);
    text('Erros', 548, 412);

    fill(111, 193, 62);
    text(r, 777, 347);
    fill(255, 92, 92);
    text(w, 777, 412);


    novamenteButton.draw();
    menuButton.draw();

    checkPress();

  };

  var checkPress = function(){

    if (buttonPressed(novamenteButton)){
      state.currentScreen = 'intervalos';
      checkBadges();
    }

    if (buttonPressed(menuButton)){
      state.currentScreen = 'menu';
      checkBadges();
    }

  };

  ;

  var checkBadges = function(){

    if (!usuarios[idUsuario].badgesProgress.explorer[0]) {
      usuarios[idUsuario].badgesProgress.explorer[0] = true;

      var current = usuarios[idUsuario].badgesProgress.explorer.reduce(function(prev, item){
        return item && prev;
      }, true);

      if (current) {
        usuarios[idUsuario].badges.explorer = true;
        notification.push('explorer');
      }

    }

    if (!usuarios[idUsuario].badgesProgress.expert[0] && (w == 0)) {
      usuarios[idUsuario].badgesProgress.expert[0] = true;

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
        if (usuarios[idUsuario].pontos.intervalos[l-2].right < usuarios[idUsuario].pontos.intervalos[l-1].right){
          usuarios[idUsuario].badges.persistent = true;

          notification.push('persistent');

        }
      }
    }

    usuarios[idUsuario].badgesProgress.enthusiastic[0]++;

    if(!usuarios[idUsuario].badges.enthusiastic && (usuarios[idUsuario].badgesProgress.enthusiastic[0] > 5)) {
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
