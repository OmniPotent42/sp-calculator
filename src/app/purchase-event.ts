import { Purchasable } from './purchasable';

export interface PurchaseEvent {
  spec: Purchasable;
  amt: number;
  event: MouseEvent;
}
