import { Component, OnInit } from '@angular/core';

import { Tab } from './tab';
import { Purchasable } from './purchasable';
import { SpecialtyService } from './specialty.service';
import { UserService } from './user.service';
import { UserState } from './user-state';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: [
    './tabs.component.css',
    './icons.css'
  ]
})
export class TabsComponent implements OnInit {
  tabs: Tab[] = [];

  activeTab: string;

  stateName: string;
  notSaved = true;

  spent = 0;
  
  allStates = this.userService.getAllSavedStates();
  
  constructor(private specialtyService: SpecialtyService, private userService: UserService) { }

  ngOnInit(): void {
    //console.log(this.allStates);
    // let items;
    // let nameMap;
    /*if (savedState) {
      items = savedState.purchasedItems;
      nameMap = items.map( (x) => { return x.name; });
    }*/
    const tabs = this.specialtyService.getData();
    //console.log(this.tabs);

    // Go through all of the tabs specialties and turn them into purchasables
    for (let i = 0; i < tabs.length; i++) {
      for (let j = 0; j < tabs[i].specialties.length; j++) {
        tabs[i].specialties[j] = new Purchasable(tabs[i].specialties[j]);

        /*if (savedState) {
          const index = nameMap.indexOf(tabs[i].specialties[j].name);
          if (index > -1) {
            this.purchase(tabs[i].specialties[j], items[index].amount, null);
          }
        }*/
      }
    }

    this.tabs = tabs;
    this.activeTab = tabs[0].tabName;
  }

  purchase(obj: Purchasable, amt: number, event): void {
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
    this.userService.currentUserState.updateItems({name: obj.name, amount: obj.purchased});
  }

  toClass(str: string) {
    return str.replace(/ /g, '_');
  }

  setActiveTab(tabName: string) {
    this.activeTab = tabName;
  }

  toggleTooltip(spec: Purchasable) {
    spec.showTooltip = !spec.showTooltip;
  }

  capitalize(str: string) {
    const strArr = str.split('');
    strArr[0] = strArr[0].toUpperCase();
    return strArr.join('');
  }

  saveState(name: string) {
    if (!name) {
      alert('You must fill out the build name field.');
      return;
    }
    const newState = this.userService.saveState(name);
    this.notSaved = false;
    console.log(newState);
    if (newState) {
      this.allStates.push(newState);
    }
  }

  loadState(state: UserState) {
    const tabs = this.tabs;
    for (let i = 0; i < tabs.length; i++) {
      for (let j = 0; j < tabs[i].specialties.length; j++) {
        const items = state.purchasedItems;
        const index = items.findIndex(x => x.name === tabs[i].specialties[j].name);
        console.log(index);
        this.purchase((tabs[i].specialties[j] as Purchasable), -1000, null);
        if (index > -1) {
          this.purchase((tabs[i].specialties[j] as Purchasable), items[index].amount, null);
        }
      }
    }
    this.stateName = state.name;
    this.tabs = tabs;
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
