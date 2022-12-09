//example from ArgPrograma

//Polymorphysm by inheritance
class Forma {
    protected nombre: string;
    constructor(value: string) {
        this.nombre = value;
    }
    public Dibujar() {
        console.log("Implementacion metodo Dibujar de clase base");
    }
}
class Rectangulo extends Forma {
    protected base;
    protected altura;
    constructor(nombre: string, base: number, altura: number) {
        super(nombre);
        this.base = base;
        this.altura = altura;
    }
    public Dibujar() {
        console.log("Dibujando un rectangulo");
    }
}
class Circulo extends Forma {
    protected radio;
    constructor(nombre: string, radio: number) {
        super(nombre);
        this.radio = radio;
    }
    public Dibujar() {
        console.log("Dibujando un Circulo");
    }
}
new Circulo("circulo1", 125).Dibujar();
new Rectangulo("rectangulo1", 125, 120).Dibujar();

//Polymorphism by abstraction
abstract class Operacion {
    protected valorA: number = 0;
    protected valorB: number = 0;
    protected resultado: number = 0;
    abstract operar(): void;//doesn't have an implementation

    set ValorA(value: number) {
        this.valorA = value;
    }
    set ValorB(value: number) {
        this.valorB = value;
    }
    get Resultado(): number {
        return this.resultado;
    }
}
class Suma extends Operacion {
    public operar() {//we have to define here the marked "abstract" method "operar".
        return this.resultado = this.valorA + this.valorB;
    }
}
class Resta extends Operacion {
    public operar() {//we have to define here the marked "abstract" method "operar".
        return this.resultado = this.valorA - this.valorB;
    }
}
const suma1 = new Suma();
console.log(suma1);


//Polymorphism by interfaces

interface IOperacion {
    Operar(a: number, b: number): number
}
class Suma2 implements IOperacion {
    Operar(a: number, b: number): number {
        return a + b;//in this, we are passing the values. We don't have accessors.
    }
}
class Resta2 implements IOperacion {
    Operar(a: number, b: number): number {
        return a - b;//in this, we are passing the values. We don't have accessors.
    }
}
console.log(new Suma2().Operar(125, 125));