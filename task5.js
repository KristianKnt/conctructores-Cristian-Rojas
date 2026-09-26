// ¡Escribe tu código debajo de esta línea!

function FriendsList(list){
    this.friends = list;  
};

FriendsList.prototype.imprimir = function(){
    console.log(this.friends);
}
// funcion flecha o arrow function
const obtenerItems = (args) => {
    const contenedorItem = args[3] // nombres en la lista
    return (args.reverse().splice(0,contenedorItem)).reverse();
};

const amigos = new FriendsList(obtenerItems(process.argv));
amigos.imprimir()

