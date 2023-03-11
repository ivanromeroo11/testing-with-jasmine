const combinations = {
  five_of_a_kind: [8, 8, 8, 8, 8],
  four_of_a_kind: [8, 9, 9, 9, 9],
  full_house: ["J", "Q", "J", "Q", "Q"],
  three_of_a_kind: ["A", "K", "A", 8, "A"],
  two_pair: ["A", 8, "A", 9, 9],
  one_pair: [9, "Q", "A", "K", "K"],
  high_card: ["A", 9, 8, "J", "K"],
};

const dice = ["A", "8", "9", "J", "Q", "K"]

const scorings = {
  five_of_a_kind: 12,
  four_of_a_kind: 11,
  full_house: 10,
  three_of_a_kind: 9,
  two_pair: 8,
  one_pair: 7,
  A: 6,
  K: 5,
  Q: 4,
  J: 3,
  9: 2,
  8: 1,
};

const diceCounter = (dice) => {
  return dice.reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: acc[curr] ? acc[curr] + 1 : 1,
    };
  }, {});
};

const values = Object.values;
const keys = Object.keys;
const isFiveOfAKind = ([first] = []) => first === 5;
const isFourOfAKind = (values = []) => values.includes(4);
const isFullHouse = (values = []) => values.includes(2) && values.includes(3);
const isThreeOfAKind = (values = []) => values.includes(3);
const isTwoPair = (values = []) => values.length === 3 && values.includes(2);
const isOnePair = (values = []) => values.length === 4 && values.includes(2);
const isHighCard = (values = []) => values.length === 5;
const getHighestDie = (values = []) =>
  values.reduce(
    (acc, curr) =>
      scorings[curr] > Object.values(acc) ? { [curr]: scorings[curr] } : acc,
    { 8: 1 }
  );

const h = diceCounter(combinations.four_of_a_kind);
console.log(isFiveOfAKind(values(h)) && "It's five of a kind!");
console.log(isFourOfAKind(values(h)) && "It's four of a kind!");
console.log(isFullHouse(values(h)) && "It's full house!");
console.log(isThreeOfAKind(values(h)) && "It's three of a kind!");
console.log(isTwoPair(values(h)) && "It's two pair!");
console.log(isOnePair(values(h)) && "It's one pair!");
console.log(isHighCard(values(h)) && "It's high card!" && getHighestDie(keys(h)));
