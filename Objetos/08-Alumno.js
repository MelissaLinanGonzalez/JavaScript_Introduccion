function Alumno(nombre, calificaciones){
    this.nombre = nombre;
    this.calificaciones = calificaciones;
    this.notaMedia = function(calificaciones){
        for (calificacion in calificaciones){
            let suma = 0;
            suma += calificaciones[calificacion];
            let media = suma / calificaciones.length;
            return media;
        }
    }
}

let calificaciones = {
    DIN: 8,
    AaD: 9,
    Opt: 8.75,
    IPE: 8.5,
    Ingles: 9.5
}

let alumno = new Alumno("Melissa", calificaciones);