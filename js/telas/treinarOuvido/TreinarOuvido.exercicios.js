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
    notaReferencia: sound.la,
    notaObjetivo: sound.mi,
    right: 'Mi',
    op1: 'Dó',
    op2: 'Fá',
    op3: 'Mi'
  };

  this.exerciciosList[2] = {
    notaReferencia: sound.la,
    notaObjetivo: sound.do_,
    right: 'Dó',
    op1: 'Dó',
    op2: 'Fá',
    op3: 'Mi'
  };

  this.exerciciosList[3] = {
    notaReferencia: sound.la,
    notaObjetivo: sound.la,
    right: 'Lá',
    op1: 'Dó',
    op2: 'Lá',
    op3: 'Si'
  };

  this.exerciciosList[4] = {
    notaReferencia: sound.la,
    notaObjetivo: sound.re,
    right: 'Ré',
    op1: 'Si',
    op2: 'Fá',
    op3: 'Ré'
  };

  this.exerciciosList[5] = {
    notaReferencia: sound.la,
    notaObjetivo: sound.sol,
    right: 'Sol',
    op1: 'Sol',
    op2: 'Fá',
    op3: 'Mi'
  };

  this.exerciciosList[6] = {
    notaReferencia: sound.la,
    notaObjetivo: sound.fa,
    right: 'Fá',
    op1: 'Dó',
    op2: 'Fá',
    op3: 'Ré'
  };

  this.exerciciosList[7] = {
    notaReferencia: sound.la,
    notaObjetivo: sound.si,
    right: 'Si',
    op1: 'Ré',
    op2: 'Lá',
    op3: 'Si'
  };

  this.getExercicio = function(){
    var index = Math.floor(Math.random() * (this.exerciciosList.length - 0)) + 0;
    return this.exerciciosList[index];
  };

};
