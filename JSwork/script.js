const arr = [2, 4, 6, 8, 10, 12];

const sum = arr.reduce((acc, num) => acc + num, 0);
const average = sum / arr.length;

const sortedArr = arr.sort((a, b) => a - b);
const middleIndex = 
Math.floor(sortedArr.length / 2);
    const median = sortedArr.length / 2 === 0 ? (sortedArr[middleIndex] + 
    sortedArr[middleIndex - 1]) / 2:
    sortedArr[middleIndex];

    const max = Math.max(...arr);
    const min = Math.min(...arr);

    const reverse = arr.slice().reverse();

    console.log("Sum:", sum);
    console.log("Average:", average);
    console.log("Median:", median);
    console.log("Max:", max);
    console.log("Min:", min);
    console.log("Reverse:", reverse);