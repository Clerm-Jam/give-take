import { UserInfo } from './models/userInfo';

export const enum DAYS {
  DAY_ONE = 'day_one',
  DAY_TWO = 'day_two',
  DAY_THREE = 'day_three',
  DAY_FOUR = "DAY_FOUR",
  DAY_FIVE = "DAY_FIVE",
  DAY_SIX = "DAY_SIX",
  DAY_SEVEN = "DAY_SEVEN",
}

export const enum CODENAME {
  ME = 'me',
  JUAN = 'juan',
  BOSS = 'boss',
  HACKER = 'hacker',
}

interface UserInfoList {
  [CODENAME.ME]: UserInfo;
  [CODENAME.JUAN]: UserInfo;
  [CODENAME.BOSS]: UserInfo;
  [CODENAME.HACKER]: UserInfo;
}

export const USERS: UserInfoList = {
  [CODENAME.ME]: {
    name: 'Genius',
    icon: ':3',
  },
  [CODENAME.JUAN]: {
    name: 'Juan',
    icon: '=)',
  },
  [CODENAME.BOSS]: {
    name: 'TheBoss',
    icon: ':<',
  },
  [CODENAME.HACKER]: {
    name: 'DarkestMystery22',
    icon: 'B)',
  },
};

export const enum MESSAGE_ACTIONS {
  ACTION_1_1,
  ACTION_1_2,
  DO_NOTHING
}
