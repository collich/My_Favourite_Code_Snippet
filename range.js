// Adding range() function from Python to JavaScript
const range = (start, end, iteration = 1) => {
    let arr = [];
    for (let i = start; i < end; i += iteration) arr.push(i);
    return arr;
}