import {IMessage} from "../../../app/stores/chat-store.service";

export function generateMockChatMessage(msg: IMessage): IMessage {
  return {
    text: `Some text ${msg.text}`,
    user: {
      name: "Kate Moss",
      avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    },
  };
}
