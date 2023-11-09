import { useEffect, useState } from "react";
import "./App.css";
import "./Poker.css";
import useAppSocket from "./hooks/useAppSocket";
import tableSvg from "./assets/table-nobg-svg-01.svg";
import Player from "./components/Player";
import { generateTable } from "./utils/players";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000", { transports: ["websocket"] });

function App() {
  const { address } = useAccount();
  const [playerName, setPlayerName] = useState<any>("");
  const { joinGame } = useAppSocket();
  const [players, setPlayers] = useState<Array<any>>([]);

  useEffect(() => {
    console.log("Address " + address);
    setPlayers(generateTable());
    setPlayerName(address);
    handleJoinGame();
  }, []);

  const handleJoinGame = () => {
    socket.emit("joinGame", address);
  };

  const renderBoard = () => {
    return players.map((player: any, index: number) => {
      return (
        <Player
          key={index}
          arrayIndex={index}
          isActive={true}
          player={player}
        />
      );
    });
  };

  return (
    <>
      <div className="poker-table--wrapper">
        <div className="poker-app--background">
          <div className="poker-table--container">
            <img
              className="poker-table--table-image"
              src={tableSvg}
              alt="Poker Table"
            />
            {renderBoard()}
            <div className="community-card-container">
              {/* {this.renderCommunityCards()} */}
            </div>
            <div className="pot-container">
              // POT HERE
              {/* <img
                style={{ height: 55, width: 55 }}
                src={"./assets/pot.svg"}
                alt="Pot Value"
              />
              <h4> {`${this.state.pot}`} </h4> */}
            </div>
          </div>
          {/* {this.state.phase === "showdown" && this.renderShowdown()} */}

          <div className="game-action-bar">
            <div className="action-buttons">
              <button
                className="action-button"
                // onClick={() =>
                //   this.handleBetInputSubmit(betInputValue, min, max)
                // }
              > Call
              </button>
              <button
                className="action-button"
                // onClick={() =>
                //   this.handleBetInputSubmit(betInputValue, min, max)
                // }
              > Check
              </button>
              <button className="fold-button" >
                Fold
              </button>
              {/* {this.renderActionButtons()} */}

              <input type="text" className="bet-input"></input>
              <button
                className="action-button"
                // onClick={() =>
                //   this.handleBetInputSubmit(betInputValue, min, max)
                // }
              > Bet/Raise
              </button>

            </div>
            <div className="slider-boi">
              
              {/* {!this.state.loading &&
                renderActionMenu(
                  highBet,
                  players,
                  activePlayerIndex,
                  phase,
                  this.handleBetInputChange
                )} */}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "30px",

              marginRight: "70px",
            }}
          >
            <ConnectButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
