import { UserInfo } from './models/userInfo';

export const POMODORO_FACTOR = 5;

export const enum DAYS {
  START = "START",
  DAY_ONE = 'day_one',
  DAY_TWO = 'day_two',
  DAY_THREE = 'day_three',
  DAY_FOUR = "DAY_FOUR",
  DAY_FIVE = "DAY_FIVE",
  DAY_SIX = "DAY_SIX",
  DAY_SEVEN = "DAY_SEVEN",
  END = "END",
}

export const enum WINDOW_PLACEMENT {
  CENTER = "center",
  BIG_LEFT = "single_left",
  FOUR_CORNERS = "four_corners",
  NONE = "none"
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
    icon: '/assets/profilePics/mepic.svg',
  },
  [CODENAME.JUAN]: {
    name: 'Juan',
    icon: '/assets/profilePics/juanpic.svg',
  },
  [CODENAME.BOSS]: {
    name: 'TheBoss',
    icon: '/assets/profilePics/bosspic.svg',
  },
  [CODENAME.HACKER]: {
    name: 'DarkestMystery22',
    icon: '/assets/profilePics/darkmpic.svg',
  },
};

export const enum MESSAGE_ACTIONS {
  ACTION_1_1,
  ACTION_1_2,
  DO_NOTHING
}
