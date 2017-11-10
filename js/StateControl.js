/* Classe para controlar o estado atual da aplicação, com variaveis que devem
ser acessadas por qualquer parte dela. */

function StateControl(screen){
  this.currentScreen = screen;

  /* Gambiarra feita para fazer com que apenas um clique seja registrado
  pelos botões. Essa variável é usada junto com mouseIsPressed para registrar
  os cliques. Quando o mouse e pressionado, esse variável estará como o true
  e junto com mouseIsPressed irá registar os cliques. Nos próximos frames, caso
  o mouse ainda esteja apertado, os cliques não serão registrados pois esta variável
  estará como false. Ela apenas voltará para true quando o usuário soltar o botão do mouse */
  this.canPress = true;

  this.animationPlaying = true;
}
