"use strict";
function gradingStudents(grades) {
    // Write your code here
    const lenght = grades.length;
    let isTrue = true;
    let cont = 0;
    const gradesMapped = grades.map((item) => {
        if (item < 38) {
            return item;
        }
        else {
            isTrue = true;
            cont = 0;
            while (isTrue) {
                if (((item + cont) % 5) === 0) {
                    if (cont < 3) {
                        isTrue = false;
                        return (item + cont);
                    }
                    else {
                        isTrue = false;
                        return item;
                    }
                }
                cont += 1;
            }
        }
    });
    return gradesMapped;
}
console.log(gradingStudents([84, 29, 63, 78, 45, 38, 37, 99]));
//other: taking the % in reverse=>
function gradingStudents2(grades) {
    let mod5 = 0;
    const gradesMapped = grades.map((item) => {
        if (item >= 38) {
            mod5 = item % 5;
            if (mod5 < 3) { //I have exceeded by < 3 ?//3
                return item;
            }
            return (item + mod5 - ((item + mod5) % 5)); //discount the excedent.
        }
        return item;
    });
    return gradesMapped;
}
console.log(gradingStudents2([84, 29, 63, 78, 45, 38, 37, 99]));
