import { Component } from '@angular/core';
import { SpecialtyService } from './specialty.service';
import { Purchasable } from './purchasable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabData = this.specialtyService.getData();
  title = 'SP Calculator';
  
  spent = 0;
  
  constructor(private specialtyService: SpecialtyService) { }

  purchase(input): void {
    let obj = input.spec;
    let amt = input.amt;
    let event = input.event;
    console.log('running');
    console.log(obj, amt, event);
    if (event) {
      if (event.shiftKey) {
        amt *= 5;
      } else if (event.ctrlKey) {
        amt *= 10;
      }
    }
    const dif = obj.purchase(amt);

    this.spent += dif;

    // send the new amount to the user service
    //this.userService.currentUserState.updateItems({name: obj.name, amount: obj.purchased});
  }
}
