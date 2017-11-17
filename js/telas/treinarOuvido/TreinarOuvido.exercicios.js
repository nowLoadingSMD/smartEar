function TreinarOuvidoExercicios(){

  this.exerciciosList = [];

  this.exerciciosList[0] = {
    notaReferencia: sound.la,
    notaObjetivo: sound.faSus,
    right: 'Fá#',
    op1: 'Ré#',
    op2: 'Fá#',
    op3: 'Ré'
  };

  this.exerciciosList[1] = {
    notaReferencia: sound.doSus,
    notaObjetivo: sound.mi,
    right: 'Mi',
    op1: 'Dó',
    op2: 'Fá',
    op3: 'Mi'
  };

  this.getExercicio = function(){
    var index = Math.floor(Math.random() * (this.exerciciosList.length - 0)) + 0;
    return this.exerciciosList[index];
  };

};
