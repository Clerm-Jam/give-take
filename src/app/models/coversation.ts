import { MESSAGE_ACTIONS } from "../constants";
import { Message } from "./message";
import { MessageAction } from "./messageAction";

export interface Conversation {
  title: string,
  messages: Message[],
  actions: MessageAction[]
}
