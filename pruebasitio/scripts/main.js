//Esto es un comentario
/*
Esto es un comentario 
de varias líneas
*/
let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/burguesa.jpg') {
      miImage.setAttribute('src','images/borgo.png');
    } else {
      miImage.setAttribute('src', 'images/burguesa.jpg');
    }
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');
function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    if(!miNombre) {
        estableceNombreUsuario();
      } else {
        localStorage.setItem('nombre', miNombre);
        miTitulo.innerHTML = 'Las hamburguesas son Geniales, ' + miNombre;
      }
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Las hamburguesas son geniales,' + nombreAlmacenado;
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}
