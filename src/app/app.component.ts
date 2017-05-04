import { Component } from '@angular/core';
import { SpecialtyService } from './specialty.service';
import { Purchasable } from './purchasable';
import { PurchaseEvent } from './purchase-event';
import { Stats } from './stats';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabData = this.specialtyService.getData();
  title = 'SP Calculator';

  spent = 0;

  stats: Stats = {
    ad: 0,
    as: 0,
    sd: 0,
    cc: 0
  };

  constructor(private specialtyService: SpecialtyService) { }

  purchase(event: PurchaseEvent): void {
    const input = (event as any);
    if (input.event) {
      if (input.event.shiftKey) {
        input.amt *= 5;
      } else if (input.event.ctrlKey) {
        input.amt *= 10;
      }
    }

    for (const stat in this.stats) {
      if (input.spec[stat]) {
        this.stats[stat] += input.amt * input.spec[stat];
      }
    }

    //console.log(this.stats);

    const dif = input.spec.purchase(input.amt);

    this.spent += dif;

    // send the new amount to the user service
    // this.userService.currentUserState.updateItems({name: obj.name, amount: obj.purchased});
  }
}
