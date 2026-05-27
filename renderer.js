const btnMostrar = document.getElementById('btnMostrar');
const btnCerrar = document.getElementById('btnCerrar');

const resultado = document.getElementById('resultado');
const datos = document.getElementById('datos');

btnMostrar.addEventListener('click', function(){
    const Nombre = document.getElementById('nombre').value;
    const Cuenta = document.getElementById('cuenta').value;
    const Edad = document.getElementById('edad').value;
    const correo = document.getElementById('correo').value;
    const Carrera = document.getElementById('carrera').value;
    const Asignatura = document.getElementById('asignatura').value;

    datos.innerHTML = `<p><strong>Nombre: </strong> ${Nombre}</p>
    <p><strong>Cuenta: </strong> ${Cuenta}</p>
    <p><strong>Edad: </strong> ${Edad}</p>
    <p><strong>Correo: </strong> ${correo}</p>
    <p><strong>Carrera: </strong> ${Carrera}</p>
    <p><strong>Asignatura: </strong> ${Asignatura}</p>
    `;

    resultado.classList.remove('oculto');

});

btnCerrar.addEventListener('click', function(){
    resultado.classList.add('oculto');
});
