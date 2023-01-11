function checkUpperCaseIndxs(strToCheck: string): number[] {
    const strLength = strToCheck.length;
    const indexUpperCased: number[] = [];
    for (let i = 0; i < strLength; i++) {
        if (strToCheck[i].match(/[a-z]/i) && (strToCheck[i] === strToCheck[i].toUpperCase())) {
            indexUpperCased.push(i);
        }
    }
    return indexUpperCased;
}
function splitByUpperCase(stringToSlice: string, indxArr: number[]) {
    const indxArraLenght = indxArr.length;
    const stringPieces: string[] = []
    const isClass = (stringToSlice[0] === stringToSlice[0].toUpperCase());
    if (isClass) {
        for (let i = 0; i < indxArraLenght;) {//0,1,2,3
            stringPieces.push((stringToSlice.slice(indxArr[i], indxArr[++i] || undefined)).toLowerCase());//0,4//4,6//6,9//9
        }
    } else {
        stringPieces.push(stringToSlice.slice(0, indxArr[0]));
        for (let i = 0; i < indxArraLenght;) {//0,1,2,3
            stringPieces.push((stringToSlice.slice(indxArr[i], indxArr[++i] || undefined)).toLowerCase());//0,4//4,6//6,9//9
        }
    }
    return stringPieces;
}
function main(inputLines: string[]) {

    inputLines.forEach((el) => {
        let [operation, mcv, str]: string[] = el.trim().split(';')
        str = str.trim();
        let strModified: string = '';
        let uppIndexs: number[] = [];
        let splitResult: string[] = [];

        let combineResult: string = '';

        //If Split
        if (operation === 'S') {
            if (mcv === 'M') {
                strModified = str.slice(0, -2);
                uppIndexs = checkUpperCaseIndxs(strModified);
                splitResult = splitByUpperCase(strModified, uppIndexs);
                console.log(...splitResult)
            }
            else {
                uppIndexs = checkUpperCaseIndxs(str);
                splitResult = splitByUpperCase(str, uppIndexs);
                console.log(...splitResult)
            }
        }
        else {
            //operation ==='C'
            const arr = str.split(' ');
            const length = arr.length;
            function pastePieces() {
                for (let i = 1; i < length; i++) {
                    combineResult = combineResult.concat(arr[i].slice(0, 1).toUpperCase()).concat(arr[i].slice(1))
                }
            }
            switch (mcv) {
                case 'M':
                    combineResult = combineResult.concat(arr[0]);
                    pastePieces();
                    combineResult = combineResult.concat('()');
                    console.log(combineResult);
                    break;
                case 'V':
                    combineResult = combineResult.concat(arr[0]);
                    pastePieces();
                    console.log(combineResult);
                    break;
                case 'C':
                    combineResult = combineResult.concat(arr[0].slice(0, 1).toUpperCase()).concat(arr[0].slice(1));
                    pastePieces();
                    console.log(combineResult);
                    break;
                default:
                    break;
            }
        }
    })
}
main(["S;M;plasticCup()", "C;V;mobile phone", "C;C;coffee machine", "S;C;LargeSoftwareBook", "C;M;white sheet of paper", "S;V;pictureFrame"]);
;