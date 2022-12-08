const array1: [number, number, number, number] = [1, 2, 3, 4];
//...rest allow us to pass to the function more parameters
function rest(first: number, second: number, ...rest: number[]): void {
    console.log(rest);
}
rest(...array1);
rest(1, 2, 3, 4, 5, 6, 7, 44, 1, 565, 4, 664654,);
let [x, y, ...res] = array1
console.log(res);