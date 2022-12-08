// on an => function, for the variable where we store the function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}
//when we will rely on type inference?
// when variable decalration&initialization are in the same line:
//this is not necesary:
const apples: number = 5;
const date1: Date = new Date();
const nothing: undefined = undefined;
const nothingMuch: null = null;
const colors: string[] = ['red', 'blue'];
class Car { };
const chevrolet: Car = new Car();
let point: { x: number; y: number } = {
    x: 10,
    y: 20
}
//----------------------------------------------------------
//when we will type a type?
// 1) When a function returns the "any" type and we need to clarify the value
const json = "{'x':10, 'y':15}";
const coordinates: { x: number; y: number } = JSON.parse(json);//.parse() returns "any"

// 2)when we declare a variable on one line, and then, we initialize it later
// 3)When we want a variable to have a type that can't be inferred.
//----------------------------------------------------------
