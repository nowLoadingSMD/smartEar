function IntervalosExercicios(){

  this.exerciciosList = [];

  this.exerciciosList[0] = {
    nota: [sound.do_, sound.re, sound.mi],
    notesGap: ['Dó', 'Ré', 'Mi']
  };

  this.exerciciosList[1] = {
    nota: [sound.re, sound.mi, sound.fa],
    notesGap: ['Ré', 'Mi', 'Fá']
  };

  this.exerciciosList[2] = {
    nota: [sound.mi, sound.fa, sound.sol],
    notesGap: ['Mi', 'Fá', 'Sol']
  };

  this.exerciciosList[3] = {
    nota: [sound.fa, sound.sol, sound.la],
    notesGap: ['Fá', 'Sol', 'Lá']
  };

  this.exerciciosList[4] = {
    nota: [sound.sol, sound.la, sound.si],
    notesGap: ['Sol', 'Lá', 'Si']
  };

  this.getExercicio = function(){
    var index = Math.floor(Math.random() * (this.exerciciosList.length - 0)) + 0;
    return this.exerciciosList[index];
  };

};
