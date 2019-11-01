// @ts-ignore
import {Server, SocketIO} from "mock-socket";
import {generateMockChatMessage} from "./mock/generate-mock-chat-message";
import {Events} from "./events";

export function createMockSocket(url) {
  const mockServer = new Server(url);
  mockServer.on("connection", socket => {
    // @ts-ignore
    socket.on(Events.ChatMessage, msg => {
      // @ts-ignore
      socket.emit(Events.ChatMessage, JSON.stringify(generateMockChatMessage(msg)));
    });
  });
  return new SocketIO(url);
}
