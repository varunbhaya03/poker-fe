import boy from "../assets/boy.svg";
import Player from "./player";

export const generateTable = (players: Player[]) => {
  return players.map(player => ({
    id: player.id,
    name: player.name,
    avatarURL: boy,
    cards: player.cards,
    showDownHand: player.showDownHand,
    chips: player.chips,
    roundStartChips: player.roundStartChips,
    roundEndChips: player.roundEndChips,
    currentRoundChipsInvested: player.currentRoundChipsInvested,
    bet: player.bet,
    betReconciled: player.betReconciled,
    folded: player.folded,
    allIn: player.allIn,
    canRaise: player.canRaise,
    stackInvestment: player.stackInvestment,
    robot: player.robot,
  }));
};
