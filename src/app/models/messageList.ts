import { CODENAME } from '../constants';
import { Conversation } from './coversation';

export interface MessageList {
  active_users: CODENAME[];
  conversations: Conversation[];
}
