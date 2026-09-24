// ¡Escribe tu código debajo de esta línea!

function FriendsList(list){
    this.friends = list;
    this.imprimir = function(){
        console.log(this.friends);
    }
    
}

const obtenerItems = (args) =>{
    const contenedorItem = args[3]
    return (args.reverse().splice(0,contenedorItem)).reverse()
}

const amigos = new FriendsList(obtenerItems(process.argv));
amigos.imprimir()

