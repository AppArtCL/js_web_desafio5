const nombreTarea = document.querySelector(".nombre-tarea")
const botonNueva = document.querySelector(".boton-nueva")
const listaTareas = document.querySelector(".lista-tareas")
let tareas = []
const totalTareas = document.querySelector(".total-tareas")
const totalRealizadas = document.querySelector(".total-realizadas")

/* solo para prueba */
tareas.push({id: 16, nombre: "Hacer mercado", completado: false})
tareas.push({id: 31, nombre: "Estudiar para la prueba", completado: true})
tareas.push({id: 36, nombre: "Hacer mercado y un nombre muy largo para la tarea", completado: true})
/* solo para prueba */

function renderRows(listadoTareas) { 
    let html = ""
    let realizadas = 0
    listadoTareas.forEach((tarea) => {
        let checked = ""
        if (tarea.completado == true) {
            checked = "checked"
            realizadas += 1
        }
        html += `
            <tr>
                <td>${tarea.id}</td>
                <td>${tarea.nombre}</td>
                <td><input type="checkbox" onclick=completar(${tarea.id}) ${checked}></td>
                <td><button class="boton-eliminar" onclick=borrar(${tarea.id})><img src="assets/img/x.png" alt="Borrar"></button></td>
            </tr>
        `
    })
    listaTareas.innerHTML = html
    totalTareas.innerHTML = listadoTareas.length
    totalRealizadas.innerHTML = realizadas 
}
renderRows(tareas)

botonNueva.addEventListener("click", () => {
    const nuevaTarea = nombreTarea.value
    tareas.push({id: asignaID(), nombre: nuevaTarea, completado: false})
    nombreTarea.value = ""
    renderRows(tareas)
})

function borrar(id) {
    tareas.splice(tareas.findIndex((elemento) => elemento.id == id), 1)
    renderRows(tareas)
}

function completar(id) {
    const tareaFiltrada = tareas.find(
        (tarea) => tarea.id == id
    )
    if (tareaFiltrada.completado == false) {
        tareaFiltrada.completado = true
    } else {
        tareaFiltrada.completado = false
    }
    renderRows(tareas)
}

function asignaID() {
    let idNuevo = 0
    if (tareas.length > 0) {
        idNuevo = tareas.slice(-1)[0].id
    }
    return (idNuevo + 1)
}