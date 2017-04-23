import { Injectable } from '@angular/core';

import { UserState } from './user-state';

@Injectable()
export class UserService {
  public currentUserState: UserState = new UserState('default');

  public saveState(name) {
    const didExist = localStorage.getItem(name);
    this.currentUserState.name = name;
    const jsonState = JSON.stringify(this.currentUserState);
    localStorage.setItem(name, jsonState);

    if (!didExist) {
      return this.currentUserState;
    }
  }

  public getSavedState(name: string) {
    return JSON.parse(localStorage.getItem(name));
  }

  public getAllSavedStates() {
    const values = [];
    const keys = Object.keys(localStorage);
    let i = keys.length;

    while ( i-- ) {
        values.push( JSON.parse(localStorage.getItem(keys[i])) );
    }

    return values;
  }

  public deleteState(name: string) {
    localStorage.removeItem(name);
  }
}
