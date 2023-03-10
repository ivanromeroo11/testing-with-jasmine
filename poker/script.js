const combinations = {
  five_of_a_kind: [8, 8, 8, 8, 8],
  four_of_a_kind: [8, 9, 9, 9, 9],
  full_house: ["J", "Q", "J", "Q", "Q"],
  three_of_a_kind: ["A", "K", "A", 8, "A"],
  two_pair: ["A", 8, "A", 9, 9],
  one_pair: [9, "Q", "A", "K", "K"],
  high_card: ["A", 9, 8, "J", "K"],
};

const scorings = {
  A: 6,
  K: 5,
  Q: 4,
  J: 3,
  9: 2,
  8: 1,
};

const fn = (dice) => {
  return dice.reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: acc[curr] ? acc[curr] + 1 : 1,
    };
  }, {});
};

const isFiveOfAKind = ([first]) => first === 5;
const isFourOfAKind = (values) => values.includes(4);
const isFullHouse = (values) => values.includes(2) && values.includes(3);
const isThreeOfAKind = (values) => values.includes(3);
const isTwoPair = (values) => values.length === 3 && values.includes(2);
const isOnePair = (values) => values.length === 4 && values.includes(2);
const isHighCard = (values) =>
  values.length === 5 &&
  values.reduce(
    (acc, curr) => {
      return scorings[curr] > Object.values(acc)
        ? { [curr]: scorings[curr] }
        : acc;
    },
    { 8: 1 }
  );

const result = fn(combinations.high_card);
console.log(
  "> ",
  isFiveOfAKind(Object.values(result)) && "It's five of a kind!"
);
console.log(
  "> ",
  isFourOfAKind(Object.values(result)) && "It's four of a kind!"
);
console.log("> ", isFullHouse(Object.values(result)) && "It's full house!");
console.log(
  "> ",
  isThreeOfAKind(Object.values(result)) && "It's three of a kind!"
);
console.log("> ", isTwoPair(Object.values(result)) && "It's two pair!");
console.log("> ", isOnePair(Object.values(result)) && "It's one pair!");
console.log("> ", isHighCard(Object.keys(result)));

class PokerPlayer {
  constructor(name) {
    this.name = name;
    this.result = [];
  }

  rollDie() {
    const posibilities = ["A", 8, 9, "J", "Q", "K"];
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(Math.floor(Math.random() * posibilities.length));
      }, 300)
    );
  }

  async getResult() {
    this.result = [];
    for await (const _ of [1, 2, 3, 4, 5]) {
      this.result.push(await this.rollDie());
    }
  }
}

const getHandName = () => {};
