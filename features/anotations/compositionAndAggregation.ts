//Example from ArgPrograma
class Turbina {
    protected numTurbinas;
    constructor(n: number) {
        this.numTurbinas = n;
    }
    public toString() {
        return `Numero de turbinas: ${this.numTurbinas} unidad${this.numTurbinas > 1 ? "es" : ""} \n`;
    }
}
class Cubierta {
    protected cabinaVuelo: boolean;
    protected sistemaEmergencia: boolean;
    protected cabinaTripulacion: boolean;
    protected numTanqueCombustible: number;
    protected numPuertasSalida: number;

    constructor(cabinaVuelo: boolean, sistemaEmergencia: boolean, cabinaTripulacion: boolean, numTanqueCombustible: number, numPuertasSalida: number) {
        this.cabinaVuelo = cabinaVuelo;
        this.sistemaEmergencia = sistemaEmergencia;
        this.cabinaTripulacion = cabinaTripulacion;
        this.numTanqueCombustible = numTanqueCombustible;
        this.numPuertasSalida = numPuertasSalida;
    }
    public toString() {
        let mensaje = "La cubierta esta compuesta por: \n";
        if (this.cabinaVuelo) {
            mensaje += "Cabina de vuelo \n";
        }
        if (this.sistemaEmergencia) {
            mensaje += "Sistema de Emergencia \n";
        }
        if (this.cabinaTripulacion) {
            mensaje += "Cabina de tripulacion. \n";
        }
        mensaje += `Dsipone adicionalmente de ${this.numTanqueCombustible} tanque${this.numTanqueCombustible > 1 ? "s" : ""} de combustble
y ${this.numPuertasSalida} puerta${this.numPuertasSalida > 1 ? "s" : ""} de salida.
`;
        return mensaje;
    }
}
class Aeroplano {
    protected turbina: Turbina;
    protected cubierta: Cubierta;

    //here I will need to instantiate the classes
    constructor(turbina: Turbina, cubierta: Cubierta) {
        this.turbina = turbina;
        this.cubierta = cubierta;
    }
    public toString() {
        let mensaje = `Aeroplano compuesto por: `;
        mensaje += this.turbina.toString();
        mensaje += this.cubierta.toString();
        return mensaje;
    }
}
const fx16 = new Aeroplano(new Turbina(2), new Cubierta(true, true, true, 2, 4));
