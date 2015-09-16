//Cargamos la libreria de johnny five
var five = require("johnny-five")

//Iniciamos las variables de los elementos
var board; 
var button;
var ledRed;
var ledYellow;
var ledGreen;

//Creamos la board
board = new five.Board();

board.on("ready", function() {

  //Creamos el botton instanciandolo de la clase johnny five
  //Le asignamos el pin donde esta conectado el pulsador
  button = new five.Button(2);

  //Inyectamos el botton a la board
  board.repl.inject({
    button: button
  });

  //Creamos la instancia de los leds
  var ledRed = new five.Led(5);
  var ledYellow = new five.Led(6);
  var ledGreen = new five.Led(7);

  //Cramos los eventos del botton

  //Evento al presionar el botton
  button.on("down", function() {
    console.log("down");
    ledRed.on();//Se prende el led rojo
  });

  //Evento al dejar presionado el botton, por defecto despues de 
  //1/2 segundo
  button.on("hold", function() {
    console.log("hold");
    ledRed.stop().off();//Se apaga el led rojo
    ledYellow.on();//Se prende el led amarillo
  });

  //Evento al soltar el botton
  button.on("up", function() {
    console.log("up");
    ledGreen.on();//Se prende el led verde
    ledYellow.stop().off();//Se apaga el led amarillo
    ledGreen.stop().off();//Se apaga el led verde
  });

});