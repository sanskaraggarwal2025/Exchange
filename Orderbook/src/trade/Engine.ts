export const BASE_CURRENCY = "INR";
import { Orderbook } from "./Orderbook";
interface userBalance {
 [key: string]: {
  available: number;
  locked: number;
 }
}

export class Engine{
 private orderBooks: Orderbook[] = [];
}