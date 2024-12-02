import { readFileSync } from "fs";

const input = readFileSync("2024/1/input.txt", "utf8");

let leftArr: number[] = [];
let rightArr: number[] = [];

input.split("\n").forEach((line) => {
  const [left, right] = line.split("   ");
  leftArr.push(parseInt(left));
  rightArr.push(parseInt(right));
});

leftArr.sort((a, b) => a - b);
rightArr.sort((a, b) => a - b);

let sum = 0;

for (let i = 0; i < leftArr.length; i++) {
  sum += Math.abs(leftArr[i] - rightArr[i]);
}

export default sum;
