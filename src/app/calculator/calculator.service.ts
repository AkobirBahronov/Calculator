import { Injectable } from '@angular/core';

export class History {
  text: string;
}

const actionList: string[][] = [
  ['c', '<-', '()', '/'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '00', '.', '='],
];

const history: History[] = [];

@Injectable()
export class Service {
  getHistory() {
    return history;
  }
  getActions() {
    return actionList;
  }
}
