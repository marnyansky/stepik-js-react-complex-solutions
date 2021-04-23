// Variant #1:
const passingGrades = a => a.filter(x => x >= 70);

// Variant #2:
const passingGrades = (arr) => {
    return arr.filter((num) => {
        return num >= 70;
    });
}

// Variant #3 (cross-language):
const passingGrades = (arr) => {
    let grades = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 70) {
            grades.push(arr[i]);
        }
    }
    return grades;
}