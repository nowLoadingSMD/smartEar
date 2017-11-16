function RitmoJogo(){

  var acertos = [];

  var backButton = new Button(40, 40, btnBack);
  var playButton = new Button(161, 555, btnPlay);

  var comment = loadImage('assets/ritmo/jogo/comment.png');
  var line = loadImage('assets/ritmo/jogo/line.png');
  var linhaReferencia = loadImage('assets/ritmo/jogo/linhaReferencia.png');
  var seminima = loadImage('assets/ritmo/jogo/seminima.png');

  var tocarMetronomo = function(time, playBackRate){
    sound.metronomo.rate(playBackRate);
    sound.metronomo.play(time);
    var date = new Date();
    var playTime = date.getTime();

    checkClick(playTime);
  };

  var tocarMetronomoContagem = function(time, playBackRate){
    sound.metronomo.rate(playBackRate);
    sound.metronomo.play(time);
  }

  var checkClick = function(playTime){

    var delay = Math.abs(playTime - state.lastMousePressed);
    console.log(delay);

    if ((delay < 100) || ((delay > 900) && (delay < 1000))) {
      console.log('oi');
      acertos.push('oi');
    }

  };

  var metronomoPat = [1,0,1,0,1,0,1];
  //var contagemPat = [1,0,1,0,1,0,0,0,0,0,0,0,0];
  var phrase = new p5.Phrase('metronomo', tocarMetronomo, metronomoPat);
  //var contagemRegressiva = new p5.Phrase('contagem', tocarMetronomoContagem, contagemPat);
  var myPart = new p5.Part();
  myPart.addPhrase(phrase);
  //myPart.addPhrase(contagemRegressiva);
  myPart.setBPM(30);
  //master.volume(0.1);

  var notas = [
    {
      nome: 'seminima',
      imagem: seminima
    },
    {
      nome: 'seminima',
      imagem: seminima
    },
    {
      nome: 'seminima',
      imagem: seminima
    },
    {
      nome: 'seminima',
      imagem: seminima
    }
  ];

  var timeLine = new TimeLine(195, 283, 784, 116, notas);

  this.draw = function(){
    clear();
    background(bgNoise);

    backButton.draw();

    image(comment, 161, 141);
    image(line, 0, 348);
    image(linhaReferencia, 246, 525);

    timeLine.draw();
    playButton.draw();

    checkPress();

  };

  var checkPress = function(){

    if (buttonPressed(playButton)){
      setTimeout(startPart, 3000);
    }

    if (buttonPressed(backButton)){
      state.currentScreen = 'ritmo';
    }
  }

}

function startPart(){
  var date = new Date();
  startupTime = date.getTime();
  myPart.start();
}

function TimeLine(x, y, w, h, notas){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.notas = notas;

  this.draw = function(){

    var nextPos = this.x;

    for(var i = 0; i < notas.length; i++){
      image(notas[i].imagem, nextPos, this.y);

      switch (notas[i].nome) {
        case 'seminima':
          nextPos += this.w/3;
          break;
        default:
          console.log('Deu ruim aqui');
      }

    }

  };
}
