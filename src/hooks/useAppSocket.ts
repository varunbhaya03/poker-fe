import { io } from "socket.io-client";

const socket = io("http://localhost:3000", { transports: ["websocket"] });
const useAppSocket = () => {
  const joinGame = (playerName: string) => {
    return socket.emit("joinGame", playerName);
  };
  return {
    joinGame,
  };
};
export default useAppSocket;
