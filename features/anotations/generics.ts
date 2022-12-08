//Generics
function identity<T>(args: T): T {
    return args;
}
console.log(identity(125));
console.log(identity("pepe"));