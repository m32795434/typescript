// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.
function matchingStrings(strings: string[], queries: string[]): number[] {
    // Write your code here
    const arrayCont: number[] = [];
    let cont = 0;
    const [stringsLenght, queriesLenght] = [strings.length, queries.length]
    for (let i = 0; i < queriesLenght; i++) {
        cont = 0;//reset
        for (let a = 0; a < stringsLenght; a++) {
            if (queries[i] === strings[a]) {
                cont += 1;
            }
            if (a === (stringsLenght - 1)) {
                arrayCont.push(cont);
            }
        }
    }
    return arrayCont;
}
console.log(matchingStrings(['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf', 'na', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf'], ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn']));
