
const tablaBody = document.querySelector("#tabla-cursos tbody");



document.addEventListener("DOMContentLoaded", () => {

    let cursosGuardados = JSON.parse(localStorage.getItem("cursos")) || [];

    cursosGuardados.forEach((curso, i) => {
        const fila = document.createElement("tr");

        const tdNombre = document.createElement("td");
        tdNombre.textContent = curso.nombre;
        const tdProfesor = document.createElement("td");
        tdProfesor.textContent = curso.profesor;
        const tdPrecio = document.createElement("td");
        tdPrecio.textContent = curso.precio;
        const tdCiudad = document.createElement("td");
        tdCiudad.textContent = curso.ciudad;
        const tdCupo = document.createElement("td");
        tdCupo.textContent = curso.cupo;

        const btnDelete = document.createElement('button');


        btnDelete.textContent = "❌ Eliminar";
        btnDelete.style.background = "#b80000";
        btnDelete.style.color = "#fff";
        btnDelete.style.border = "none";
        btnDelete.style.padding = "5px 10px";
        btnDelete.style.borderRadius = "5px";
        btnDelete.style.cursor = "pointer";

        btnDelete.addEventListener('click', () => {
            cursosGuardados.splice(i, 1);
            localStorage.setItem('cursos', JSON.stringify(cursosGuardados))
            fila.remove()
        })

        fila.appendChild(tdNombre);
        fila.appendChild(tdProfesor);
        fila.appendChild(tdPrecio);
        fila.appendChild(tdCiudad);
        fila.appendChild(tdCupo);
        fila.appendChild(btnDelete)

        tablaBody.appendChild(fila);

    });


});

