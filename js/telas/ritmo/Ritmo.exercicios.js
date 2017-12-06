function RitmoExercise(){

  this.exerciseList = [];

  this.exerciseList[0] = [
    {
      nome: 'seminima',
      imagem: loadImage('assets/ritmo/jogo/seminima.png')
    },
    {
      nome: 'seminima',
      imagem: loadImage('assets/ritmo/jogo/seminima.png')
    },
    {
      nome: 'seminima',
      imagem: loadImage('assets/ritmo/jogo/seminima.png')
    },
    {
      nome: 'seminima',
      imagem: loadImage('assets/ritmo/jogo/seminima.png')
    }
];

  this.exerciseList[1] = [
    {
      nome: 'semibreve',
      imagem: loadImage('assets/ritmo/jogo/semibreve.png')
    },
    {
      nome: 'semibreve',
      imagem: loadImage('assets/ritmo/jogo/semibreve.png')
    }
  ];

  this.exerciseList[2] = [
    {
      nome: 'minima',
      imagem: loadImage('assets/ritmo/jogo/minima.png')
    },
    {
      nome: 'minima',
      imagem: loadImage('assets/ritmo/jogo/minima.png')
    }
  ];

  this.exerciseList[3] = [
    {
      nome: 'colcheia',
      imagem: loadImage('assets/ritmo/jogo/colcheia.png')
    },
    {
      nome: 'colcheia',
      imagem: loadImage('assets/ritmo/jogo/colcheia.png')
    },
    {
      nome: 'colcheia',
      imagem: loadImage('assets/ritmo/jogo/colcheia.png')
    },
    {
      nome: 'colcheia',
      imagem: loadImage('assets/ritmo/jogo/colcheia.png')
    },
    {
      nome: 'colcheia',
      imagem: loadImage('assets/ritmo/jogo/colcheia.png')
    },
    {
      nome: 'colcheia',
      imagem: loadImage('assets/ritmo/jogo/colcheia.png')
    },
    {
      nome: 'colcheia',
      imagem: loadImage('assets/ritmo/jogo/colcheia.png')
    }
];



  this.getExercicio = function(){
    var index = Math.floor(Math.random() * (this.exerciseList.length - 0)) + 0;
    return this.exerciseList[index];
  };
}
