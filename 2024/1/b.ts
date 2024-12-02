import { readFileSync } from "fs";

const input = readFileSync("2024/1/input.txt", "utf8");

let rightCounter: Record<string, number> = {};

input.split("\n").forEach((line) => {
  const [_, right] = line.split("   ");

  if (rightCounter[right] === undefined) {
    rightCounter[right] = 0;
  }

  rightCounter[right] += 1;
});

let score = 0;

input.split("\n").forEach((line) => {
  const [left] = line.split("   ");

  const appearences = rightCounter[left] ?? 0;
  score += appearences * parseInt(left);
});

export default score;
