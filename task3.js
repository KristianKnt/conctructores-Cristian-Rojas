// ¡Escribe tu código debajo de esta línea!

const prompt = require('prompt-sync')();

function Mail(asunto, mensaje) {
  this.asunto = asunto
  this.mensaje = mensaje

  this.imprimirCorreo = function(){
    console.log(`${this.asunto}: ${this.mensaje}`);
  }

}

/* const asunto = prompt('¿Asunto? ');
 const mensaje  = prompt('¿Mensaje? ');
*/


const nuevoCorreo = new Mail(process.argv[3],process.argv[4]);

// ¡Escribe tu código encima de esta línea!

nuevoCorreo.imprimirCorreo()