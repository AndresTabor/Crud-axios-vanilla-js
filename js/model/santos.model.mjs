export class Santos {
    #id;
    #nombre
    #constelacion;

    constructor(id, nombre, costelacion) {
        this.id = id;
        this.nombre = nombre;
        this.costelacion = costelacion;
    }

    get id() { return this.id; }

    get nombre() { return this.nombre; }

    get costelacion() { return this.costelacion; }
}