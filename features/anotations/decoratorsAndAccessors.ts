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
    private _edad1: number;

    get Promocion() {//the user see a property, but don't see that it's a method. This is a dynamic value
        return ((new Date().getFullYear()) - (this._edad1 - 17));
    }
    get Edad(): number {//this creates the virtual pseudo-property "Edad"
        return this._edad1;
    }
    set Edad(añoactual: number) {// here the user don't know what he/she have to pass as an arg. This hide the code.
        this._edad1 = (añoactual - this.añoNac);
    }
    get NombreCompleto() {
        return `${this.nombre} ${this.apellido}`
    }

    //constructor

    constructor(nombre: string, apellido: string, añoNac: number, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.añoNac = añoNac;
        this._edad1 = edad;
    }

    //methods
    public toStringName(): string {
        return this.nombre + this.apellido;
    }

}
const Manuel: Persona = new Persona("Bravard", "Manuel", 1987, 35);
console.log(Manuel);
