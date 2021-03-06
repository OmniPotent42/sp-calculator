import { Component, Input, Output, EventEmitter } from '@angular/core';

import { UserService } from './user.service';
import { UserState } from './user-state';
import { Tab } from './tab';
import { Stats } from './stats';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: [ './total.component.css' ]
})
export class TotalComponent {
  @Input() stats: Stats;
  @Input() tabs: Tab[];
  @Input() spent;
  @Output() purchaseEvent = new EventEmitter();

  stateName: string;
  notSaved = true;
   
  baseStats: Stats = this.userService.currentUserState.baseStats;

  allStates = this.userService.getAllSavedStates();

  constructor(private userService: UserService) { }

  loadState(state: UserState) {
    /*for (let stat in this.stats) {
      this.stats[stat] = 0;
    }*/
    
    console.log(state);
    
    this.userService.currentUserState.baseStats = state.baseStats;
    this.baseStats = state.baseStats;
    console.log(this.userService.currentUserState.baseStats);
    
    const tabs = this.tabs;
    for (let i = 0; i < tabs.length; i++) {
      for (let j = 0; j < tabs[i].specialties.length; j++) {
        const spec = tabs[i].specialties[j];
        const items = state.purchasedItems;
        const index = items.findIndex(x => x.name === spec.name);
        //console.log(index);
        this.purchaseEvent.emit({spec: spec, amt: 0 - spec.purchased, event: null});
        if (index > -1) {
          this.purchaseEvent.emit({spec: tabs[i].specialties[j], amt: items[index].amount, event: null});
        }
      }
    }
    this.stateName = state.name;
    this.tabs = tabs;
  }

  saveState(name: string) {
    if (!name) {
      alert('You must fill out the build name field.');
      return;
    }

    const tabs = this.tabs;
    for (let i = 0; i < tabs.length; i++) {
      for (let j = 0; j < tabs[i].specialties.length; j++) {
        const obj: any = tabs[i].specialties[j];
        this.userService.currentUserState.updateItems({name: obj.name, amount: obj.purchased});
      }
    }


    const newState = this.userService.saveState(name);
    this.notSaved = false;
    if (newState) {
      this.allStates.push(newState);
    }
  }

  confirmDelete(state: UserState) {
    const toDelete = confirm('Are you sure you want to delete this build?');
    if (toDelete) {
      this.userService.deleteState(state.name);
      const index = this.allStates.findIndex(x => x.name === state.name);
      this.allStates.splice(index, 1);
    }
  }
}
