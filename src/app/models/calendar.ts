import { DAYS } from '../constants';

export interface Calendar {
  current_day: DAYS;
  days: {
    [key: string]: {
      name: string,
      current: number,
      max: number,
      day_started: boolean,
    }
  }
}
