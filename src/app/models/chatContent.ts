import { CODENAME, DAYS } from "../constants";
import { Message } from "./message";
import { MessageList } from "./messageList";

export interface ChatContent {
  [key: string]: MessageList
}
