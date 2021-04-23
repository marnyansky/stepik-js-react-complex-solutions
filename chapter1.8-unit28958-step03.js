// https://stepik.org/lesson/50573/step/3?thread=solutions&unit=28958

// Variant #1 (non-efficient but short):
const range = (...arr) => arr.length > 0 ? Math.max(...arr) - Math.min(...arr) : 0;

// Variant #2 (efficient but long):
const range = (...arr) => {
    let numMin = Infinity
    let numMax = -Infinity
    for (const el of arr) {
        if (el < numMin) {numMin = el}
        if (el > numMax) {numMax = el}
    }
    return arr.length > 0 ? numMax - numMin : 0;
}