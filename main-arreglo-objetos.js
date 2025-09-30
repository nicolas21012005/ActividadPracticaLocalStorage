//ARREGLO DE OBJETOS


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

    const nuevoCurso = {
        nombre: curso,
        profesor: profesor,
        precio: precio,
        ciudad: ciudad,
        cupo: cupo
    };

    const cursosGuardados = JSON.parse(localStorage.getItem("cursos")) || [];

    cursosGuardados.push(nuevoCurso);
    localStorage.setItem("cursos", JSON.stringify(cursosGuardados));

    alert("Curso creado exitosamente");
    // se toma el recien curso recien objeto del arreglo cursosGuardados diciendole -1 para que acceda al ultimo
    const objetoCurso = cursosGuardados[cursosGuardados.length - 1];

    mensaje.innerHTML = `El Curso Es: ${objetoCurso.nombre}<br>
  Profesor: ${objetoCurso.profesor}<br>
  Precio: ${objetoCurso.precio}<br>
  Ciudad: ${objetoCurso.ciudad}<br>
  Cupo: ${objetoCurso.cupo}`;

    form.reset();
});

document.addEventListener("DOMContentLoaded", () => {
    const cursosGuardados = JSON.parse(localStorage.getItem("cursos")) || [];
    if (cursosGuardados.length > 0) {
        const objetoCurso = cursosGuardados[cursosGuardados.length - 1];
        mensaje.innerHTML = `El Curso Es: ${objetoCurso.nombre}<br>
    Profesor: ${objetoCurso.profesor}<br>
    Precio: ${objetoCurso.precio}<br>
    Ciudad: ${objetoCurso.ciudad}<br>
    Cupo: ${objetoCurso.cupo}`;
    }
});


btnDelete.addEventListener("click", () => {
    localStorage.removeItem("cursos");
    mensaje.textContent = "Cursos eliminados correctamente";
});
