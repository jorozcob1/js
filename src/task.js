export function Task(DescripcionTarea) {
    this.Descripcion = DescripcionTarea;
    this.Completado = false;
}

//Metodo para marcar la tarea como completada
Task.prototype.tareaCompletada = function() {
    this.Completado = !this.Completado;
}