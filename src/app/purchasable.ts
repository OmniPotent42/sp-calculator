import { Specialty } from './specialty';

export class Purchasable extends Specialty {
  purchased: number;
  showTooltip: boolean;

  constructor( Specialty ) {
    super();
    for (const prop in Specialty) {
      if (Specialty.hasOwnProperty(prop)) {
        this[prop] = Specialty[prop];
      }
    }
    this.purchased = 0;
    this.showTooltip = false;
  }

  purchase( amount: number ) {
    // first, we need to detect if the amount they want to purchase will exceed the range
    let newAmt = this.purchased + amount;
    if ( newAmt > this.max) {
      newAmt = this.max;
    } else if ( newAmt < 0) {
      newAmt = 0;
    }
    const dif = newAmt - this.purchased;
    const absDif = Math.abs(dif);
    const operator = this.modifier.slice(0, 1);
    const modifier = parseInt(this.modifier.slice(1), 10);
    //console.log(modifier);
    //console.log(absDif);
    let totalCost = 0;

    for (let i = 0; i < absDif; i++) {
      if (dif > 0) {
        totalCost += this.start;
        if (operator === '+') {
          this.start += modifier;
        } else {
          this.start *= modifier;
        }
      } else {
        if (operator === '+') {
          this.start -= modifier;
        } else {
          this.start /= modifier;
        }
        totalCost -= this.start;
      }
    }
    this.purchased = newAmt;

    return totalCost;
  }
}
