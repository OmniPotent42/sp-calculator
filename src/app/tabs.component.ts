import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() tabs: Tab[];
  @Output() purchaseEvent = new EventEmitter();

  activeTab: string;

  stateName: string;
  notSaved = true;

  allStates = this.userService.getAllSavedStates();

  constructor(private specialtyService: SpecialtyService, private userService: UserService) { }

  ngOnInit(): void {
    this.activeTab = this.tabs[0].tabName;
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
}
