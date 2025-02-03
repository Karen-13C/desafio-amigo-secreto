// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

var listaDeAmigos = []; // variable universal para reutilizar la lista

function agregarAmigo(){
    // reconoce lo escrito en el input
    let nomAmigo = document.getElementById('amigo').value;
    
    // revisa que el input sea válido
    let esSoloLetrasConEspacios = (textoNom) => {
        let regex = /^[A-Za-záéíóúñÁÉÍÓÚ\s]+$/;
        return regex.test(textoNom);
    };

    if (esSoloLetrasConEspacios(nomAmigo) == false || nomAmigo == ' '){
        alert('Ingrese un nombre válido');
        document.getElementById('amigo').value = ''; // Limpia el input
    }
    else if(listaDeAmigos.includes(nomAmigo)){
        alert('Ya existe un amigo con el mismo nombre')
        document.getElementById('amigo').value = ''; // Limpia el input
    }
    else{
        imprimeNombre(nomAmigo); // si la entrada es válida se envía a imprimir
        listaDeAmigos.push(nomAmigo);
    }
}

function imprimeNombre(txtNombre){
    const listaAmigos = document.getElementById('listaAmigos');
    const nuevoLi = document.createElement('li'); // Crear un nuevo elemento <li>
    nuevoLi.textContent = txtNombre; // Asignar el texto del input al <li>
    listaAmigos.appendChild(nuevoLi); // Agregar el <li> a la lista
    document.getElementById('amigo').value = ''; // Limpia el input
}

function sortearAmigo(){
    if (listaDeAmigos.length==0) {
        alert('No tiene amigos para sortear en la lista')
    }
    else{
        let resultado = document.getElementById('resultado');
    let listaProvisional = listaDeAmigos; // lista provisional para no perder la lista original
    let numAleatorio = parseInt(Math.random()*listaProvisional.length);

    resultado.innerHTML = 'El amigo secreto sorteado es: ' + listaProvisional[numAleatorio];
    listaProvisional.splice(numAleatorio, 1); // elimina el nombre de la lista para que no vuelva a salir
    }
}