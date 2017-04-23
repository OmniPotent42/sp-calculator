import { DataItem } from './data-item';

export class UserState {
  purchasedItems: DataItem[] = [];

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
