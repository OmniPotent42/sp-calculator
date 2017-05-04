import { DataItem } from './data-item';
import { Stats } from './stats';

export class UserState {
  purchasedItems: DataItem[] = [];
  baseStats: Stats = {
    ad: 0,
    as: 0,
    sd: 0,
    cc: 0
  };

  constructor(public name) { };

  updateItems(item: DataItem) {
    const names = this.purchasedItems.map(function(x) { return x.name; });
    const nameIndex = names.indexOf(item.name);
    if (nameIndex > -1) {
      this.purchasedItems[nameIndex] = item;
    } else {
      this.purchasedItems.push(item);
    }

    //console.log(this.purchasedItems);
  }
}
