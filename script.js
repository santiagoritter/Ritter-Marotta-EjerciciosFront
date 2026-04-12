const boton = document.getElementById('toggleMenu');
const nav = document.getElementById('navLinks');

boton.addEventListener('click', function() {
    nav.classList.toggle('abierto');
});


