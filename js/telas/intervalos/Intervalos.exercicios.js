function IntervalosExercicios(){

  this.exerciciosList = [];

  this.exerciciosList[0] = {
    notas: [sound.do_, sound.re, sound.mi]
  };

  this.exerciciosList[1] = {
    notas: [sound.fa, sound.sol, sound.la]
  };

  this.getExercicio = function(){
    var index = Math.floor(Math.random() * (this.exerciciosList.length - 0)) + 0;
    return this.exerciciosList[index];
  };

};
