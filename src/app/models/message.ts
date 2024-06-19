import { User } from "./user";

export interface Message {
  from: User,
  me: boolean,
  content: string,
}
