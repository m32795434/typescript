//Example from ArgPrograma
// hay un acuerdo ampliamente conocido de que las propiedades que comienzan con un guión bajo _ son internas y no deben ser manipuladas desde el exterior del objeto.

function DecoradorPersona(data: string) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            array = data.split(",");
            Nombre = this.array[0];
            Apellido = this.array[1];
        }
    }
}
@DecoradorPersona("Juan, Lopez")
class Persona {
    //attributs - properties
    private nombre: string;
    private apellido: string;
    private añoNac: number;
    private _edad1: number = 0;

    get Edad() {//this creates the virtual pseudo-property "Edad"
        return this._edad1;
    }
    set Edad(añoactual: number) {
        this._edad1 = (añoactual - this.añoNac);
    }
    get NombreCompleto() {
        return `${this.nombre} ${this.apellido}`
    }

    //constructor

    constructor(nombre: string, apellido: string, añoNac: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.añoNac = añoNac;
    }

    //methods
    public toStringName(): string {
        return this.nombre + this.apellido;
    }

}
const Manuel: Persona = new Persona("Bravard", "Manuel", 1987);
console.log(Manuel);
