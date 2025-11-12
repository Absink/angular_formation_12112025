import { StateOrder } from "../enums/state-order";

export interface OrderI {

  id: number;
  tjmHT: number;
  nbJours: number;
  tva: number;
  state: StateOrder;
  typePresta: string;
  client: string;
  comment: string;
  date: Date;
  
  totalHT(): number;
  totalTTC(): number;

}
