import { readFileSync } from "fs";

const input = readFileSync("2022/4/input.txt", "utf8");

const lines = input.split("\n")

let count = 0;

lines.forEach((line) => {
    const [firstPair, secondPair] = line.split(",")

    if (!firstPair || !secondPair) {
        return;
    }

    const [n1, n2] = firstPair.split("-").map(s => parseInt(s)) 
    const [n3, n4] = secondPair.split("-").map(s => parseInt(s)) 

    const [minPair, maxPair] = n2 - n1 > n4 - n3 ? [[n3, n4], [n1, n2]] : [[n1, n2], [n3, n4]]
    const [min1, min2] = minPair   
    const [max1, max2] = maxPair

    if (min1 >= max1 && min1 <= max2) {
        count += 1
        return
    }

    if (min2 >= max1 && min2 <= max2) {
        count += 1
        return
    }
})

export default count;

