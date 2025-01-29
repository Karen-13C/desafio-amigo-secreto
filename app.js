// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

function agregarAmigo(){
    // reconoce lo escrito en el input
    let nomAmigo = document.getElementById('amigo').value;
    
    // revisa que el input sea válido
    let esSoloLetrasConEspacios = (textoNom) => {
        let regex = /^[A-Za-záéíóúñÁÉÍÓÚ\s]+$/;
        return regex.test(textoNom);
    };

    if (esSoloLetrasConEspacios(nomAmigo)==false || nomAmigo==' '){
        alert('Ingrese un nombre válido');
        document.getElementById('amigo').value = ''; // Limpia el input
    }
    else{
        imprimeNombre(nomAmigo); // si la entrada es válida se envía a imprimir
    }
    
}

function imprimeNombre(txtNombre){
    const listaAmigos = document.getElementById('listaAmigos');
    const nuevoLi = document.createElement('li'); // Crear un nuevo elemento <li>
    nuevoLi.textContent = txtNombre; // Asignar el texto del input al <li>
    listaAmigos.appendChild(nuevoLi); // Agregar el <li> a la lista
    document.getElementById('amigo').value = ''; // Limpia el input
}