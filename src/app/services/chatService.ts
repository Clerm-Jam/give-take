import { Injectable, signal } from '@angular/core';
import { ChatContent } from '../models/chatContent';
import { CODENAME, DAYS, MESSAGE_ACTIONS } from '../constants';

const DEFAULT_CHAT_CONTENT = {
  [DAYS.DAY_ONE]: {
    active_users: [CODENAME.BOSS, CODENAME.JUAN],
    selected: 0,
    chatting: false,
    typing: false,
    conversations: [
      {
        title: 'Groupchat',
        messages: [
          {
            content: 'You are from the programmers elite, right?',
            from: CODENAME.BOSS,
          },
          {
            content: 'I want this feature ready by Tuesday afternoon.',
            from: CODENAME.BOSS,
          },
          {
            content: 'We will have it ready by then.',
            from: CODENAME.JUAN,
          },
        ],
        actions: [
          {
            label: 'OK.',
            action: MESSAGE_ACTIONS.ACTION_1_1,
          },
        ],
      },
      {
        title: 'Private chat with Juan',
        messages: [
          {
            content: "Howdy! How's the new feature going?",
            from: CODENAME.JUAN,
          },
        ],
        actions: [
          {
            label: 'Working hard!',
            action: MESSAGE_ACTIONS.ACTION_1_2,
          },
          {
            label: '<Ingore him>',
            action: MESSAGE_ACTIONS.ACTION_1_3,
          },
        ],
      },
    ],
  },
  [DAYS.DAY_TWO]: {
    active_users: [CODENAME.JUAN],
    selected: null,
    chatting: false,
    typing: false,
    conversations: [],
  },
  [DAYS.DAY_THREE]: {
    active_users: [CODENAME.JUAN],
    selected: 0,
    chatting: false,
    typing: false,
    conversations: [
      {
        title: 'Private chat with Juan',
        messages: [
          {
            content: 'Hi! I finished feature WW-1234. Could you take a look?',
            from: CODENAME.JUAN,
          },
        ],
        actions: [],
      },
    ],
  },
  [DAYS.DAY_FOUR]: {
    active_users: [CODENAME.JUAN],
    selected: 0,
    chatting: false,
    typing: false,
    conversations: [
      {
        title: 'Private chat with Juan',
        messages: [
          {
            content:
              "I'm having trouble with the new feature. Could you help me?",
            from: CODENAME.JUAN,
          },
        ],
        actions: [],
      },
    ],
  },
  [DAYS.DAY_FIVE]: {
    active_users: [CODENAME.HACKER],
    selected: 0,
    chatting: false,
    typing: false,
    conversations: [
      {
        title: '???????',
        messages: [
          {
            content:
              "So, you're not very helpful, are you? I'll make sure you're helpful this time.",
            from: CODENAME.HACKER,
          },
          {
            content:
              "Your husband's birthday is in 3 days, right? Let's make a deal.",
            from: CODENAME.HACKER,
          },
          {
            content:
              "If you help me with this little backdoor here I'll make sure he has a great birthday.",
            from: CODENAME.HACKER,
          },
          {
            content:
              "If you don't, well, I'll make sure he has an unforgettable birthday anyway.",
            from: CODENAME.HACKER,
          },
        ],
        actions: [],
      },
    ],
  },
  [DAYS.DAY_SIX]: {
    active_users: [CODENAME.BOSS, CODENAME.JUAN, CODENAME.HACKER],
    selected: 0,
    chatting: false,
    typing: false,
    conversations: [
      {
        title: 'Private chat with TheBoss',
        messages: [
          {
            content:
              "YOU ARE ABUSING IA AGAIN! LET ME CATCH YOU ONE MORE TIME COPYING CODE FROM THE INTERNET AND YOU'RE FIRED!",
            from: CODENAME.BOSS,
          },
          {
            content: "I'm sorry, I won't do it again.",
            from: CODENAME.ME,
          },
        ],
        actions: [],
      },
      {
        title: 'Private chat with Juan',
        messages: [],
        actions: [],
      },
      {
        title: 'REMEBER',
        messages: [
          {
            content: "I'm watching you",
            from: CODENAME.HACKER,
          },
          {
            content: "DELETE FROM DEBTS WHERE NAME = 'HackerMystery22';",
            from: CODENAME.HACKER,
          },
        ],
        actions: [],
      },
    ],
  },
  [DAYS.DAY_SEVEN]: {
    active_users: [CODENAME.BOSS, CODENAME.JUAN, CODENAME.HACKER],
    selected: 0,
    chatting: false,
    typing: false,
    conversations: [
      {
        title: 'Groupchat',
        messages: [
          {
            content: 'Do you have the new feature ready?',
            from: CODENAME.BOSS,
          },
        ],
        actions: [],
      },
    ],
  },
};

async function wait(delay: number, callback: Function) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  callback()
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private chatContent = signal<ChatContent>(DEFAULT_CHAT_CONTENT);

  async setTyping(day: DAYS, delay: number) {
    this.chatContent.update((state) => {
      state[day].typing = true;
      return state;
    });
    await wait(delay, () => {
      this.chatContent.update((state) => {
        state[day].typing = false;
        return state;
      });
    });
  }

  getTyping(day: DAYS) {
    return this.chatContent()[day].typing;
  }

  getDay(day: DAYS) {
    return this.chatContent()[day];
  }

  getConversation(day: DAYS, index: number) {
    return this.chatContent()[day].conversations[index];
  }

  getCurrentConversation(day: DAYS) {
    const selectedChat = this.getSelectedChat(day);
    if (selectedChat != null) {
      return this.chatContent()[day].conversations[selectedChat];
    } else {
      return null;
    }
  }

  sendMessage(
    day: DAYS,
    conversation: number,
    message: string,
    from: CODENAME
  ) {
    this.chatContent.update((state) => {
      state[day].conversations[conversation].messages.push({
        content: message,
        from: from,
      });
      state[day].conversations[conversation].actions = [];
      return state;
    });
  }

  getSelectedChat(day: DAYS) {
    return this.chatContent()[day].selected;
  }

  selectChat(day: DAYS, index: number) {
    this.chatContent.update((state) => {
      state[day].selected = index;
      return state;
    });
  }

  getChatting(day: DAYS) {
    return this.chatContent()[day].chatting;
  }

  setChatting(day: DAYS, chatting: boolean) {
    this.chatContent.update((state) => {
      state[day].chatting = chatting;
      return state;
    });
  }
}
