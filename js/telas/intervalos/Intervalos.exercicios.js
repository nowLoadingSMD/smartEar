function IntervalosExercicios(){

  this.exerciciosList = [];

  this.exerciciosList[0] = {
    nota: [sound.do_, sound.re, sound.mi]
  };

  this.exerciciosList[1] = {
    nota: [sound.la, sound.laSus, sound.si]
  };

  this.exerciciosList[2] = {
    nota: [sound.fa, sound.sol, sound.la]
  };

  this.exerciciosList[3] = {
    nota: [sound.faSus, sound.sol, sound.la]
  };

  this.exerciciosList[4] = {
    nota: [sound.mi, sound.fa, sound.sol]
  };

  this.exerciciosList[5] = {
    nota: [sound.do_, sound.doSus, sound.re]
  };

  this.getExercicio = function(){
    var index = Math.floor(Math.random() * (this.exerciciosList.length - 0)) + 0;
    return this.exerciciosList[index];
  };

};
