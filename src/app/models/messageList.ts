import { CODENAME } from '../constants';
import { Conversation } from './coversation';

export interface MessageList {
  active_users: CODENAME[];
  selected: number | null;
  typing: boolean;
  chatting: boolean;
  conversations: Conversation[];
}
