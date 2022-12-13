import { readFileSync } from "fs";

const charPriority = (char: string): number => {
  const isUpperCase = (char: string): boolean => {
    return char == char.toUpperCase();
  };

  if (isUpperCase(char)) {
    return char.charCodeAt(0) - 38;
  }
  return char.charCodeAt(0) - 96;
};

const findDuplicate = (s1: string, s2: string): string => {
  const s1Chars = new Set(s1.split(""));

  for (const char of s2) {
    if (s1Chars.has(char)) {
      return char;
    }
  }
};

const input = readFileSync("2022/3/input.txt", "utf8");
const lines = input.split("\n").filter((el) => el.length > 0);

const splitLines = lines.map((line) => {
  const half = Math.floor(line.length / 2);
  return [line.slice(0, half), line.slice(half)];
});

const score = splitLines.reduce((acc, [s1, s2]) => {
  const duplicate = findDuplicate(s1, s2);

  return acc + charPriority(duplicate);
}, 0);

export default score;
