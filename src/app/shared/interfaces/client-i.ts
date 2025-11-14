import { StateClient } from "../enums/state-client";

export interface ClientI {

  id: string;
  tva: number;
  state: StateClient;
  name: string;
  comment: string;
  ca: number;
  
}
