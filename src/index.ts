//Example from ArgPrograma
class Persona {
    //attributs
    private nombre: string;
    private apellido: string;
    private añoNac: number;
    //constructor
    constructor(nombre: string, apellido: string, añoNac: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.añoNac = añoNac;
    }

    //methods
    public toString(): string {
        return this.nombre + this.apellido;
    }
    public edad(añoactual: number): number {
        return (añoactual - this.añoNac);
    }
    get Nombre(): string {
        return this.nombre;
    }
    set Nombre(nombre: string) {
        this.nombre = nombre;
    }
    get Apellido(): string {
        return this.apellido;
    }
    set Apellido(apellido: string) {
        this.apellido = apellido;
    }
    public setApellido(apellido: string) {
        this.apellido = apellido;
    }
    set AñoNac(año: number) {
        this.añoNac = año;
    }
}

function DecoradorPersona(data: string) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            array = data.split(",");
            Nombre = this.array[0];
            Apellido = this.array[1];
        }
    }
}

// @DecoradorPersona("Juan, Lopez")