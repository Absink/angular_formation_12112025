import { RoleUser } from "../enums/role-user";

export interface UserI {

  id: number;
  username: string;
  password: string;
  role: RoleUser;

}