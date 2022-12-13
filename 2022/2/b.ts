import { readFileSync } from "fs";

const input = readFileSync("2022/2/input.txt", "utf8");

// X Lose -> beats[hisMove]
// Y Tie  -> same[hisMove]
// Z Wins -> else

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
  const [hisMove, result] = strat.split(" ");
  const moves = ["X", "Y", "Z"];

  if (result === "X") {
    return scores[beats[hisMove]];
  }

  moves.splice(moves.indexOf(beats[hisMove]), 1);

  if (result === "Y") {
    return scores[same[hisMove]] + 3;
  }

  moves.splice(moves.indexOf(same[hisMove]), 1);

  return 6 + scores[moves[0]];
};

const strategies = input.split("\n").filter((el) => el.length > 0);

const finalScore = strategies.reduce((acc, strat) => {
  return acc + getScore(strat);
}, 0);

export default finalScore;
