
//CAPTURAMOS EN CONSTANTES

const form = document.getElementById("formulario-curso");
const inputCurso = document.getElementById("cursos");
const inputProfesor = document.getElementById("profesor");
const inputPrecio = document.getElementById("precio");
const inputCiudad = document.getElementById("ciudad");
const inputCupo = document.getElementById("cupo");
const mensaje = document.getElementById("mensaje-curso");

const btnDelete = document.getElementById("delete");



form.addEventListener("submit", (e) => {

    e.preventDefault();

    const curso = inputCurso.value.trim();
    const profesor = inputProfesor.value.trim();
    const precio = inputPrecio.value.trim();
    const ciudad = inputCiudad.value.trim();
    const cupo = inputCupo.value.trim();

    if (curso == "" || profesor == "" || precio == "" || ciudad == "" || cupo == "") {
        alert("Todos los campos son obligatorios");
        return;
    }

    //EN EL EJERCICIO ANTERIOR ESTABAMOS ALIMENTANDO UN SOLO VALOR Y EN ESTE UN OBJETO CON DIFERENTES CARACTERISTICAS

    const nuevoCurso = {

        nombre: curso,
        profesor: profesor,
        precio: precio,
        ciudad: ciudad,
        cupo: cupo

    }

    localStorage.setItem("curso", JSON.stringify(nuevoCurso));


    const cursoCreado = localStorage.getItem("curso");

    const objetoCurso = JSON.parse(cursoCreado);
    mensaje.innerHTML = "El Curso Es: " + objetoCurso.nombre + "<br>" + " Profesor: \n" + objetoCurso.profesor + "<br>" + " Precio: \n" + objetoCurso.precio + "<br>" + " Ciudad: \n" + objetoCurso.ciudad + "<br>" + " Cupo: \n" + objetoCurso.cupo;

    form.reset();


});


document.addEventListener("DOMContentLoaded", () => {

    const cursoCreado = localStorage.getItem("curso");

    if (cursoCreado) {
        const objetoCurso = JSON.parse(cursoCreado);
        mensaje.innerHTML = "El Curso Es: " + objetoCurso.nombre + "<br>" + " Profesor: \n" + objetoCurso.profesor + "<br>" + " Precio: \n" + objetoCurso.precio + "<br>" + " Ciudad: \n" + objetoCurso.ciudad + "<br>" + " Cupo: \n" + objetoCurso.cupo;

    }



});


btnDelete.addEventListener("click", () => {

    localStorage.removeItem("curso");
    mensaje.textContent = "Curso eliminado correctamente";

});
