/* Arquivo principal que será responsável por toda
renderização do app */
var telas = [];
var x;
var opacity;

var state;
var sound;

var exercicios;

var iconSong, iconSound;
var bg;

function preload() {

	iconSong = loadImage('assets/icons/iconSong.png');
	iconSound = loadImage('assets/icons/iconSound.png');

	bg = loadImage('assets/background.png');
	bgNoise = loadImage('assets/bgNoise.png');

	state = new StateControl('telaInicial');
	sound = new Sounds();

	//exercicios = new Exercicios();

}

function setup(){

  createCanvas(1280, 720);

	//Criar um array com as telas que serao usadas no app
	telas['treinarOuvido'] = new TreinarOuvido();
	telas['treinarOuvidoJogo'] = new TreinarOuvidoJogo();
	telas['treinarOuvidoResultado'] = new TreinarOuvidoResultado();
	telas['ritmo'] = new Ritmo();
	telas['ritmoJogo'] = new RitmoJogo();
	telas['ritmoResultado'] = new RitmoResultado();
	telas['telaInicial'] = new TelaInicial();
	telas['login'] = new Login();
	telas['cadastrar'] = new Cadastrar();
	telas['menu'] = new Menu();

	x = 0;
	opacity = 300;

}

function draw(){
	/*
	if(state.animationPlaying){
		background(150, 150, 150);
		ellipseMode(CENTER);
		fill(42, 42, 42);
		noStroke();
		ellipse(width/2, height/2, x, x);
		x += 75;

		if(x > 1280){
			state.animationPlaying = false;
			x = 0;
		}
	} else */{
		telas[state.currentScreen].draw();
		fill(0, 0, 0, opacity);
		rect(0, 0, 1280, 720);
		if (opacity > 0){
			opacity -= 2;
		}
	}

}

function mousePressed(){
	var date = new Date();
	state.lastMousePressed = date.getTime();
	//console.log(state.lastMousePressed);
	state.mousePressed = true;
}

function mouseReleased(){
  /* Gambiarra feita para fazer com que apenas um clique seja registrado
  pelos botões. Essa variável é usada junto com mouseIsPressed para registrar
  os cliques. Quando o mouse e pressionado, esse variável estará como o true e junto com
  mouseIsPressed irá registar os cliques. Nos próximos frames, caso o mouse ainda esteja apertado,
  os cliques não serão registrados pois esta variável estará como false. Ela apenas voltará para
  true quando o usuário soltar o botão do mouse */
  state.canPress = true;
}

/* Essa função recebe um componente(objeto) como paramentro e verifica
se o mouse clicou nesse componente */
var buttonPressed = function(botao){

  if(mouseIsPressed && state.canPress){
    //console.log(botao.width);
    if ((mouseX >= botao.x) && (mouseX <= (botao.x + botao.width))){
      if ((mouseY >= botao.y) && (mouseY <= (botao.y + botao.height))){
        state.canPress = false;
        return true;
      }
    }
  }

};
