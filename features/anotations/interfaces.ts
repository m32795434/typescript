//ArgPrograma example
interface a {
    a: number;
}
interface b extends a {
    b: boolean;
}
class c implements b {
    b: boolean;
    a: number;
    constructor(b: boolean, a: number) {
        this.b = b;
        this.a = a;
    }
}
interface IDireccion {
    calle: string,
    pais: string,
    ciudad: string
}
interface IPersona {
    nombre: string,
    edad: number,
    direccion: IDireccion,
    mostrarDireccion: () => string;
}
const Manuel: IPersona = {
    nombre: "Manuel",
    edad: 35,
    direccion: {
        calle: "Avda. Pte. Peron 3078",
        pais: "Arg",
        ciudad: "Cdia",
    },
    mostrarDireccion() {
        return `Direccion: ${this.direccion.calle}, ${this.direccion.ciudad}, ${this.direccion.pais}`
    },
}