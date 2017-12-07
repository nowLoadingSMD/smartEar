/* Arquivo principal que será responsável por toda
renderização do app */

var cnv;
var telas = [];
var x;
var opacity;

var state;
var sound;

var exercicios;

var iconSong, iconSound;
var bg;
var regularFont, boldFont, logoFont;

var framesAfterMousePressed = 0;

var usuarios = [];
var idUsuario = "";

function preload() {

	iconSong = loadImage('assets/icons/iconSong.png');
	iconSound = loadImage('assets/icons/iconSound.png');

	bg = loadImage('assets/background.png');
	bgNoise = loadImage('assets/bgNoise.png');

	state = new StateControl('telaInicial');
	sound = new Sounds();

	regularFont = loadFont('assets/fonts/Watchword-Normal.otf');
	boldFont = loadFont('assets/fonts/Watchword-Bold.otf');
	logoFont = loadFont('assets/fonts/Rounded_Elegance.ttf');

	//exercicios = new Exercicios();

}

function setup(){

  cnv = createCanvas(1280, 720);

	var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);

	//Criar um array com as telas que serao usadas no app
	telas['treinarOuvido'] = new TreinarOuvido();
	telas['treinarOuvidoJogo'] = new TreinarOuvidoJogo();
	telas['treinarOuvidoResultado'] = new TreinarOuvidoResultado();
	telas['intervalos'] = new Intervalos();
	telas['intervalosJogo'] = new IntervalosJogo();
	telas['intervalosResultado'] = new IntervalosResultado();
	telas['cantar'] = new Cantar();
	telas['cantarJogo'] = new CantarJogo();
	telas['cantarResultado'] = new CantarResultado();
	telas['ritmo'] = new Ritmo();
	telas['ritmoJogo'] = new RitmoJogo();
	telas['ritmoResultado'] = new RitmoResultado();
	telas['telaInicial'] = new TelaInicial();
	telas['login'] = new Login();
	telas['cadastrar'] = new Cadastrar();
	telas['menu'] = new Menu();
	telas['sobre'] = new Sobre();
	telas['perfil'] = new Perfil();
	telas['editarPerfil'] = new EditarPerfil();
	telas['tutorial'] = new Tutorial();

	x = 0;
	opacity = 300;

	textFont(regularFont);

	if(localStorage.vec){
		usuarios = JSON.parse(localStorage.vec);
	}
}

function draw(){

		telas[state.currentScreen].draw();
		fill(0, 0, 0, opacity);
		rect(0, 0, 1280, 720);
		if (opacity > 0){
			opacity -= 2;
		}

		if (mouseIsPressed){
			framesAfterMousePressed++;
		}

		if (framesAfterMousePressed > 1){
			state.canPress = false;
		}

}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}

function keyPressed(){
	if (keyCode === LEFT_ARROW){
		console.log(usuarios[idUsuario].badges);
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
	framesAfterMousePressed = 0;
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

var checkMouseReleased = function(){
	return mouseIsPressed && state.canPress;
};
