export const renderUnicodeSuitSymbol = (suit: string) => {
  switch (suit) {
    case "Heart":
      case "H":
      case "h":
      return "\u2665";
    case "Diamond":
      case "D":
      case "d":
      return "\u2666";
    case "Spade":
      case "S":
      case "s":
      return "\u2660";
    case "Club":
      case "C":
      case "c":
      return "\u2663";
    default:
      throw Error("Unfamiliar String Recieved in Suit Unicode Generation");
  }
};
