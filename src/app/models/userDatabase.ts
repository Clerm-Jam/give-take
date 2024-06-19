import { UserInfo } from "./userInfo";
import { UserStatus } from "./userStatus";

export interface UserDatabase {
  [key: string]: {
    info: UserInfo,
    status: UserStatus
  }
}
