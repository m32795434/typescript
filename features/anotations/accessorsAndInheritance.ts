//Accessors (descriptores) & "protected" modifier
class Operacion {
    protected valorA: number;
    protected valorB: number;
    protected resultado: number;
    constructor() {
        this.valorA = 0;
        this.valorB = 0;
        this.resultado = 0;
    }
    set ValorA(value: number) {
        this.valorA = value;
    }
    set ValorB(value: number) {
        this.valorB = value;
    }
    get Resultado() {
        return this.resultado;
    }
}
class Suma extends Operacion {
    sumar() {
        this.resultado = this.valorA + this.valorB;
        console.log("resultado de la suma de A + B = " + this.resultado)
    }
}
class Resta extends Operacion {
    restar() {
        this.resultado = this.valorA - this.valorB;
        console.log("resultado de la resta de A - B = " + this.resultado)
    }
}
const operacionSuma = new Suma();
const operacionResta = new Resta();
console.log(operacionSuma);
operacionSuma.ValorA = 20;
operacionSuma.ValorB = 20;
operacionSuma.sumar();
console.log(operacionSuma.Resultado);
console.log(operacionSuma.sumar);
console.log(operacionSuma);