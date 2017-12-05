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



  this.getExercicio = function(){
    var index = Math.floor(Math.random() * (this.exerciseList.length - 0)) + 0;
    return this.exerciseList[index];
  };
}
