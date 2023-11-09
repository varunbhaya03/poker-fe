export default class Player {
    id: string;
    name: string;
    avatarURL: string;
    cards: Array<{ cardFace: string; suit: string; value: number }>;
    showDownHand: {
      hand: any[];
      descendingSortHand: any[];
    };
    chips: number;
    roundStartChips: number;
    roundEndChips: number;
    currentRoundChipsInvested: number;
    bet: number;
    betReconciled: boolean;
    folded: boolean;
    allIn: boolean;
    canRaise: boolean;
    stackInvestment: number;
    robot: boolean;
  
    constructor(id: string, name: string, avatarURL: string) {
      this.id = id;
      this.name = name;
      this.avatarURL = avatarURL;
      this.cards = [];
      this.showDownHand = { hand: [], descendingSortHand: [] };
      this.chips = 20000;
      this.roundStartChips = 20000;
      this.roundEndChips = 20000;
      this.currentRoundChipsInvested = 0;
      this.bet = 0;
      this.betReconciled = false;
      this.folded = false;
      this.allIn = false;
      this.canRaise = true;
      this.stackInvestment = 0;
      this.robot = false;
    }
  
    // You can add methods here to manage player actions, like betting, folding, etc.
  }
  