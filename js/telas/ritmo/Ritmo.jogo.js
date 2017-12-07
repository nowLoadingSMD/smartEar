function RitmoJogo(){

  var firstDraw = true;
  var isPlaying = false;
  var timesPlayed = 0;
  var isCounting = false;
  var counter = 0;
  var frameCounter = 0;
  var isTime = false;
  var showFeedback = false;

  var gapBetweenNotes = 0;

  var startupTime = 0;

  var clicks = [];
  var notes = [
  ];

  var points = {
    right: 0,
    wrong: 0
  };

  var mistakes = 0;
  var right = 0;

  var exercise = new RitmoExercise();
  var exerciseList = [];
  var currentExercise = 0;

  var pause = false;
  var posPause = 0;
  var estadoPause = false;

  var continuar = new Button(23, 125, pauseContinuar);
  var reiniciar = new Button(23, 294, pauseReiniciar);
  var sair = new Button(23, 463, pauseSair);
  var imgContinuar = loadImage('assets/pause/continuar.png');
  var imgReiniciar = loadImage('assets/pause/reiniciar.png');
  var imgSair = loadImage('assets/pause/sair.png');

  var backButton = new Button(40, 40, btnBack);
  var playButton = new Button(610, 597, btnPlay);
  var continuarButton = new Button(width/2-286/2, height-height/6, btnGradient, 'CONTINUAR');

  var line = loadImage('assets/ritmo/jogo/line.png');
  var timeLine = new TimeLine(265, 283, 750, 116, notes);
  var progessBar = new ProgessBar(265, 450, 750, 5);

  this.draw = function(){

    if (firstDraw){
      for(var i = 0; i < 5; i++){
         exerciseList.push(exercise.getExercicio());
       }
       setNewExercise();
       firstDraw = false;
    }

    if (isPlaying){
      frameCounter++;
    }

    progessBar.progress = (frameCounter/179);

    if (isPlaying && checkMouseReleased()) {
      var d = new Date();
      var click;

      if (isTime) {
        click = {
          tempo: d.getTime(),
          imagem: loadImage('assets/ritmo/jogo/feedbackAcerto.png')
        };
        right++;
      } else {
        click = {
          tempo: d.getTime(),
          imagem: loadImage('assets/ritmo/jogo/feedbackErro.png')
        };
        mistakes++;
      }
      clicks.push(click);
    }

    clear();
    background(bgNoise);

    backButton.draw();
    image(line, 0, 348);
    timeLine.draw();
    progessBar.draw();

    if (!isPlaying && !isCounting && !showFeedback){
      playButton.draw();
    }

    if(pause)
      drawPause();

    fill(255);
    textSize(32);
    textFont(regularFont);
    textAlign(LEFT);
    if (isCounting == true){
      fill(255);
      textSize(42);
      textFont(boldFont);
      text("COMEÇAR EM ", width/7, height/5);
      text(counter, width/7+300, height/5);
    } else if (isPlaying) {
      text("Clique no mouse de acordo com as notas apresentadas.", width/7, height/5);
    } else {
      text("Aperte o play para tocar o metrônomo.", width/7, height/5);
    }

    if (showFeedback){
      drawFeedback(mistakes);
    }

    clicks.forEach(function(item){
      posX = timeLine.x + ((timeLine.w)  * ((item.tempo - startupTime) / 3000));
      posY = 229;
      image(item.imagem, posX, posY);
    });

    checkPress();

  }; // End of this.draw()

  var checkPress = function(){

    if (buttonPressed(backButton)){
      pause = true;
    }

    if (buttonPressed(sair)){
      state.currentScreen = 'menu';
      pause = false;
      estadoPause = false;
      posPause = 0;
      resetVariables();
    }

    if (buttonPressed(reiniciar)){
      state.currentScreen = 'ritmo';
      pause = false;
      estadoPause = false;
      posPause = 0;
      resetVariables();
    }

    if (buttonPressed(continuar)){
      estadoPause = true;
    }

    if (buttonPressed(playButton) && !isPlaying && !isCounting && !showFeedback) {
      startCounter();
    }

}; // End of checkPress()

  var drawPause = function(){
      background(35, 38, 37, 70);
      fill(68, 72, 71);
      noStroke();
      rect(0, 0, posPause, 720);
      textFont(regularFont);
      fill(255);

      if(posPause<128){
        image(imgContinuar, posPause-105, 125);
        image(imgReiniciar, posPause-105, 294);
        image(imgSair, posPause-105, 463);
        text("CONTINUAR", posPause-120, 235);
        text("REINICIAR", posPause-108, 403);
        text("SAIR", posPause-85, 570);
        if(!estadoPause)
          posPause+=10;
      }
      if(estadoPause)
        posPause-=10;
      if(posPause>=128 && !estadoPause){
        continuar.draw();
        text("CONTINUAR", 8, 235);
        reiniciar.draw();
        text("REINICIAR", 20, 403);
        sair.draw();
        text("SAIR", 43, 570);
      }

      if(estadoPause && posPause<=0){
        estadoPause = false;
        pause = false;
      }

      checkPress();
  };

  var drawFeedback = function(mistakes) {

    fill(0, 0, 0, 230);
    rect(0,0,1280, 720);

    if (mistakes >=1 || right == 0 ) {
      fill(255, 92, 92);
      textFont(boldFont);
      textAlign(CENTER);
      textSize(42);
      text('VOCÊ ERROU', width/2, 88);

      fill(255);
      textFont(regularFont);
      textAlign(CENTER);
      textSize(32);
      text('Parece que você está fora do ritmo.', width/2, height/4);
    } else {
      fill(111, 193, 62);
      textFont(boldFont);
      textAlign(CENTER);
      textSize(42);
      text('VOCÊ ACERTOU!', width/2, 88);

      fill(255);
      textFont(regularFont);
      textSize(32);
      textAlign(CENTER);
      text('Parabéns! O seu ritmo está correto.', width/2, height/5);
    }

    textFont(boldFont);
    continuarButton.draw();
    textFont(regularFont);

    if (buttonPressed(continuarButton)) {
      currentExercise++;

      if (mistakes >= 1 || right == 0) {
        points.wrong++;
      } else {
        points.right++;
      }

      if (currentExercise > 4) {
        usuarios[idUsuario].pontos.ritmo.push(points);
        localStorage.vec = JSON.stringify(usuarios);
        state.currentScreen = 'ritmoResultado';
        resetVariables();
      } else {
        setNewExercise();
      }

    }

  } // End of drawFeedback()

  var resetVariables = function(){
    isPlaying = false;
    timesPlayed = 0;
    isCounting = false;
    counter = 0;
    frameCounter = 0;
    isTime = false;
    showFeedback = false;
    startupTime = 0;
    notes = [
    ];
    firstDraw = true;
    currentExercise = 0;
    pause = false;
    posPause = 0;
    estadoPause = false;
    points = {
      right: 0,
      wrong: 0
    };
  }; // End of resetVariables()

  var setNewExercise = function(){
    isPlaying = false;
    timesPlayed = 0;
    isCounting = false;
    counter = 0;
    frameCounter = 0;
    isTime = false;
    showFeedback = false;
    startupTime = 0;
    clicks = [];
    mistakes = 0;
    notes = exerciseList[currentExercise];
    timeLine = new TimeLine(265, 283, 750, 116, notes);


    switch (notes[0].nome) {
      case 'semibreve':
        gapBetweenNotes = 3000;
        break;
      case 'minima':
        gapBetweenNotes = 3000/1.5;
        break;
      case 'seminima':
        gapBetweenNotes = 3000/3;
        break;
      case 'colcheia':
        gapBetweenNotes = 3000/6;
        break;
      default:
        console.log('Erro');
    }

    console.log(gapBetweenNotes);

  }; // End of setNewExercise()

  // Game Related functions
  var startCounter = function(){
    isCounting = true;
    counter = 3;
    sound.metronomo.play();
    setTimeout(setCounter, 1000);
  };

  var setCounter = function(){
    counter--;
    sound.metronomo.play();
    if (counter > 0){
      setTimeout(setCounter, 1000);
    } else {
      isCounting = false;
      counter = 0;
      isPlaying = true;
      isTime = true;
      frameCounter = 0;
      var d = new Date();
      startupTime = d.getTime();
      playMetronomo();
      setTimeout(setIsTimeToFalse, 100);
    }
  };

  var playMetronomo = function(){
    timesPlayed++;
    sound.metronomo.play();

    if (timesPlayed < 4) {
      setTimeout(playMetronomo, 1000);
    } else {
      setTimeout(function(){
        showFeedback = true;
      }, 500);
      setTimeout(setIsTimeToFalse, 100);
      isPlaying = false
    }
  };

  var setIsTimeToTrue = function(){
    isTime = true;
    setTimeout(setIsTimeToFalse, 200);
  };

  var setIsTimeToFalse = function(){
    isTime = false;
    if (timesPlayed < 4){
      setTimeout(setIsTimeToTrue, gapBetweenNotes - 200);
    }
  };


} // End of Ritmo class

function TimeLine(x, y, w, h, notes){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.notes = notes;

  this.draw = function(){

    var nextPos = this.x - 65;

    for(var i = 0; i < notes.length; i++){
      image(notes[i].imagem, nextPos, this.y);

      switch (notes[i].nome) {
        case 'semibreve':
          nextPos += this.w;
          break;
        case 'minima':
          nextPos += this.w/1.5;
          break;
        case 'seminima':
          nextPos += this.w/3;
          break;
        case 'colcheia':
          nextPos += this.w/6;
          break;
        default:
          console.log('Deu ruim aqui');
      }

    }

  };
}

function ProgessBar(x, y, w, h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.progress = 0;
  this.line = loadImage('assets/ritmo/jogo/progressBarLine.png');

  this.draw = function(){
    fill(240);
    rect(this.x, this.y, this.w, this.h);
    fill(0, 255, 0);
    rect(this.x, this.y, this.progress * this.w, this.h);


    for(var i = 0; i <= 3; i++){
      image(this.line, this.x + (this.w/3 * i), this.y - 15);
    }

  };
}
