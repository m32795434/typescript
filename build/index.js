"use strict";
//Example from ArgPrograma
class Persona {
    //constructor
    constructor(nombre, apellido, añoNac) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.añoNac = añoNac;
    }
    //methods
    toString() {
        return this.nombre + this.apellido;
    }
    edad(añoactual) {
        return (añoactual - this.añoNac);
    }
    get Nombre() {
        return this.nombre;
    }
    set Nombre(nombre) {
        this.nombre = nombre;
    }
    get Apellido() {
        return this.apellido;
    }
    set Apellido(apellido) {
        this.apellido = apellido;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }
    set AñoNac(año) {
        this.añoNac = año;
    }
}
function DecoradorPersona(data) {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.array = data.split(",");
                this.Nombre = this.array[0];
                this.Apellido = this.array[1];
            }
        };
    };
}
// @DecoradorPersona("Juan, Lopez")
