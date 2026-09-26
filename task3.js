// ¡Escribe tu código debajo de esta línea!

function Mail(asunto, mensaje) {
  this.asunto = asunto
  this.mensaje = mensaje
 
}

Mail.prototype.imprimirCorreo = function(){
  console.log(`${this.asunto}: ${this.mensaje}`);
}

const nuevoCorreo = new Mail(process.argv[3],process.argv[4]);
nuevoCorreo.imprimirCorreo()