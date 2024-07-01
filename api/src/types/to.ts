import { CANCEL_ORDER, CREATE_ORDER, ON_RAMP, GET_DEPTH, GET_OPEN_ORDERS } from ".";

export type MessageToEngine = {
 type: typeof CREATE_ORDER,
 data: {
  market: string,
  price: string,
  quantity: string,
  side: "buy" | "sell",
  userId: string
 }
} | {
 type: typeof CANCEL_ORDER,
 data: {
  orderId: string,
  market: string
 }
} | {
 type: typeof ON_RAMP
 data: {
  userId: string,
  txnId: string,
  amount: string
 }
} | {
 type: typeof GET_DEPTH,
 data: {
  market: string
 }
} | {
 type: typeof GET_OPEN_ORDERS,
 data: {
  userId: string,
  market: string
 }
}