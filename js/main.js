/* Arquivo principal que será responsável por toda
renderização do app */

var cnv;
var telas = [];
var x;
var opacity;

var notification = [];
var notificationOpacity = 0;
var notificationFadeOut = true;
var framesShowingNotification = 0;

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
	telas['licoes'] = new Licoes();
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

		if (notification.length > 0 ) {

			if (framesShowingNotification == 0) {
				notificationOpacity = 300;
			}

			if (framesShowingNotification <= 300){
				drawBadgeNotification(notification[notification.length-1], 968, 33, notificationOpacity);
				framesShowingNotification++;
			} else if (framesShowingNotification > 300){
				notificationOpacity--;
				drawBadgeNotification(notification[notification.length-1], 968, 33, notificationOpacity);
				framesShowingNotification++;
			}

			if (notificationOpacity == 0) {
				framesShowingNotification = 0;
				notification.pop();
			}
			
		}

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

var drawBadgeNotification = function(type, posX, posY){

	fill(57, 57, 57);
	rect(968, 33, 300, 128, 20);

	fill(255);
	textFont(regularFont);
	textSize(16);
	textAlign(LEFT);
	text('Parabéns!', posX + 120, posY + 26);
	text('Você desbloqueaou', posX + 120, posY + 42);
	text('a conquista', posX + 120, posY + 58);

	switch (type) {
		case 'newbie':
			var img = loadImage('assets/badges/newbie.png');
			image(img, posX + 20, posY + 19);
			textFont(regularFont);
			textSize(16);
			textAlign(LEFT);
			text('NOVATO(A)', posX + 120, posY + 74);
			break;
		case 'explorer':
			var img = loadImage('assets/badges/explorer.png');
			image(img, posX + 20, posY + 19);
			textFont(regularFont);
			textSize(16);
			textAlign(LEFT);
			text('EXPLORADOR(A)', posX + 120, posY + 74);
			break;
		case 'expert':
			var img = loadImage('assets/badges/expert.png');
			image(img, posX + 20, posY + 19);
			textFont(regularFont);
			textSize(16);
			textAlign(LEFT);
			text('CRAQUE', posX + 120, posY + 74);
			break;
		case 'persistent':
			var i = loadImage('assets/badges/persistent.png');
			image(i, posX + 20, posY + 19);
			textFont(regularFont);
			textSize(16);
			textAlign(LEFT);
			text('PERSISTENTE', posX + 120, posY + 74);
			break;
		case 'enthusiastic':
			var img = loadImage('assets/badges/enthusiastic.png');
			image(img, posX + 20, posY + 19);
			textFont(regularFont);
			textSize(16);
			textAlign(LEFT);
			text('EMPOLGADO(A)', posX + 120, posY + 74);
			break;
		case 'first':
			var img = loadImage('assets/badges/first.png');
			image(img, posX + 20, posY + 19);
			textFont(regularFont);
			textSize(16);
			textAlign(LEFT);
			text('DE PRIMEIRA', posX + 120, posY + 74);
			break;
		default:
			console.log('AAAAAA');
			break;
	}

};
