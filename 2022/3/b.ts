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

const findTriplicates = (s1: string, s2: string, s3: string): string => {
  const s1Chars = new Set(s1.split(""));
  const s2Chars = new Set(s2.split(""));

  for (const char of s3) {
    if (s1Chars.has(char) && s2Chars.has(char)) {
      return char;
    }
  }
};

const input = readFileSync("2022/3/input.txt", "utf8");
const lines = input.split("\n").filter((el) => el.length > 0);
// Group 3 lines in a single arr
const groupedLines = lines.reduce((acc, line, i) => {
  if (i % 3 === 0) {
    acc.push([line]);
  } else {
    acc[acc.length - 1].push(line);
  }

  return acc;
}, []);

const score = groupedLines.reduce((acc, [s1, s2, s3]) => {
  const duplicate = findTriplicates(s1, s2, s3);

  return acc + charPriority(duplicate);
}, 0);

export default score;
