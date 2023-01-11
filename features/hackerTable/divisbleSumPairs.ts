// Given an array of integers and a positive integer k, determine the number of (i,j) pairs where i<j and ar[i] +ar[j]  is divisible by k.
function divisibleSumPairs(n: number, k: number, ar: number[]): number {
    //we know the length > n, so
    let cont = 0;
    for (let i = 0; i < (n - 1); i++) {
        for (let a = i; a < (n - 1);) {
            if ((((ar[i] + ar[++a])) % k) === 0) {
                cont += 1;
            }
        }
    }
    return cont;
}
console.log(divisibleSumPairs(5, 2, [5, 9, 10, 7, 4]))