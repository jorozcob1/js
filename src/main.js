// Importar la clase Task desde el archivo task.js
import { Task } from './task.js';

// Obtener referencias a los elementos del DOM
const tareaForm = document.getElementById('task-form');
const tareaInput = document.getElementById('task-input');
const tareaList = document.getElementById('task-list');

// Crear un arreglo para almacenar las tareas
let tareas = [new Task('Tarea 1'), new Task('Tarea 2')];

// Función para agregar una tarea
function addTask(tarea) {
    // Crear una nueva tarea
    const nuevaTarea = new Task(tarea);
    // Agregar la tarea al arreglo de tareas
    tareas.push(nuevaTarea);
    // Renderizar la tarea en el DOM
    renderTask(nuevaTarea);
}

// Función para renderizar una tarea en el DOM
function renderTask() {
    tareaList.innerHTML = '';
    // Crear un nuevo elemento li
    tareas.forEach((tarea) => {
        const li = document.createElement('li');
        // Establecer el contenido del li
        let tareaCompletada = tarea.Completado ? 'Completada' : 'Pendiente';
        li.textContent = tarea.Descripcion + ': Estado:-  ' + tareaCompletada;
        // Agregar el li al ul
        //console.log(tarea);
        tareaList.appendChild(li);
        //boton para eliminar una tarea 
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('eliminar-btn');
        botonEliminar.addEventListener('click', () => {
            eliminarTarea(tarea);
        });
        //agregar clase para marcar una tarea como completada
        if (tarea.Completado) {
            li.classList.add('completada');
        }

        //Agreagar un evento clic para marcar una tarea como completada
        li.addEventListener('click', () => {
            tarea.Completado = !tarea.Completado;
            renderTask();
        });

        li.appendChild(botonEliminar);
    });
}

// Agregar un evento al formulario para agregar tareas
tareaForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const descripcion = tareaInput.value.trim();
    if (descripcion !== '') {
        addTask(descripcion);
        tareaInput.value = '';
    }
});

renderTask();
tareas.forEach((tarea) => {
    console.log(tarea.Descripcion);
});

//Funcion pasra eliminar una tarea
function eliminarTarea(tareaEliminar) {
    tareas = tareas.filter((tarea) => tarea !== tareaEliminar);
    renderTask();
}