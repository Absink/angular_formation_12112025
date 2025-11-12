import { StateClient } from "../enums/state-client";
import { ClientI } from "../interfaces/client-i";

export class Client implements ClientI {
  
  id!: number;
  tva!: number;
  state: StateClient = StateClient.Inactive;
  name!: string;
  comment: string = "";
  ca!: number;

  constructor(obj?: Partial<Client>) {
    if (obj)
      Object.assign(this, obj);
  }

}
