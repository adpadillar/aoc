import { readFileSync } from "fs";

const input = readFileSync("2022/2/input.txt", "utf8");

// X rock
// Y paper
// Z scissors

// A rock
// B paper
// C scissors

// C vs X
// score = 1 + 6 = 7

// B vs Y
// score = 2 + 3 = 5

const beats = {
  A: "Z",
  B: "X",
  C: "Y",
};

const same = {
  A: "X",
  B: "Y",
  C: "Z",
};

const scores = {
  X: 1,
  Y: 2,
  Z: 3,
};

const getScore = (strat: string) => {
  const [hisMove, yourMove] = strat.split(" ");

  if (beats[hisMove] === yourMove) {
    // you lost
    return scores[yourMove];
  }

  if (same[hisMove] === yourMove) {
    // you tied
    return scores[yourMove] + 3;
  }

  return scores[yourMove] + 6;
};

const strategies = input.split("\n").filter((el) => el.length > 0);

const finalScore = strategies.reduce((acc, strat) => {
  return acc + getScore(strat);
}, 0);

export default finalScore;
