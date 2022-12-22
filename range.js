// Adding range() function from Python to JavaScript
/*
const range = (start, end, iteration = 1) => {
    let arr = [];
    for (let i = start; i < end; i += iteration) arr.push(i);
    return arr;
}
*/

const range = (start, end, iteration = 1) => {
    let arr = [];
    if (end > start) {
        for (let i = start; i < end; i += iteration) arr.push(i);
    } else {
        for (let i = start; i > end; iteration > 0 ? i -= iteration: i += iteration) arr.push(i);
    }
    return arr
};