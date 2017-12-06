function RitmoResultado(){

  var novamenteButton = new Button(327, 586, btnTransparent, 'NOVAMENTE');
  var menuButton = new Button(667, 586, btnGradient, 'MENU');

  var l, r, w;

  this.draw = function(){
    clear();
    background(bgNoise);

    l = usuarios[idUsuario].pontos.ritmo.length;
    r = usuarios[idUsuario].pontos.ritmo[l-1].right;
    w = usuarios[idUsuario].pontos.ritmo[l-1].wrong;

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
      state.currentScreen = 'ritmo';

      checkBadges();
    }

    if (buttonPressed(menuButton)){
      state.currentScreen = 'menu';

      checkBadges();
    }

  };

  var checkBadges = function(){

    if (!usuarios[idUsuario].badgesProgress.explorer[2]) {
      usuarios[idUsuario].badgesProgress.explorer[2] = true;

    }

    if (!usuarios[idUsuario].badgesProgress.expert[2] && (w == 0)) {
      usuarios[idUsuario].badgesProgress.expert[2] = true;
    }

    if (!usuarios[idUsuario].badges.persistent) {
      if (l > 1){
        if (usuarios[idUsuario].pontos.ritmo[l-2].right < usuarios[idUsuario].pontos.ritmo[l-1].right){
          usuarios[idUsuario].badges.persistent = true;
        }
      }
    }

    usuarios[idUsuario].badgesProgress.enthusiastic[2]++;

    if(!usuarios[idUsuario].badges.enthusiastic && (usuarios[idUsuario].badgesProgress.enthusiastic[2] > 5)) {
      usuarios[idUsuario].badges.enthusiastic = true;
    }

    if (!usuarios[idUsuario].badges.first && (w == 0)) {
      usuarios[idUsuario].badges.first = true;
    }

    localStorage.vec = JSON.stringify(usuarios);

  };

}
