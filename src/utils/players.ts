import boy from "../assets/boy.svg";

export const generateTable = () => {
  return [
    {
      id: "one",
      name: "Player 1",
      avatarURL: boy,
      cards: [
        {
          cardFace: "4",
          suit: "Spade",
          value: 3,
        },
        {
          cardFace: "7",
          suit: "Diamond",
          value: 6,
        },
      ],
      showDownHand: {
        hand: [],
        descendingSortHand: [],
      },
      chips: 20000,
      roundStartChips: 20000,
      roundEndChips: 20000,
      currentRoundChipsInvested: 0,
      bet: 0,
      betReconciled: false,
      folded: false,
      allIn: false,
      canRaise: true,
      stackInvestment: 0,
      robot: false,
    },
    {
      id: "two",
      name: "Player 2",
      avatarURL: boy,
      cards: [
        {
          cardFace: "2",
          suit: "Heart",
          value: 3,
        },
        {
          cardFace: "A",
          suit: "Club",
          value: 6,
        },
      ],
      showDownHand: {
        hand: [],
        descendingSortHand: [],
      },
      chips: 20000,
      roundStartChips: 20000,
      roundEndChips: 20000,
      currentRoundChipsInvested: 0,
      bet: 0,
      betReconciled: false,
      folded: false,
      allIn: false,
      canRaise: true,
      stackInvestment: 0,
      robot: false,
    },
  ];
};
