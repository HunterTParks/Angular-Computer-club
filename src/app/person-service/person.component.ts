import { Injectable } from '@angular/core';
import { Person } from '../person';
import { PERSON } from '../mock-lineup';

@Injectable()
export class PersonComponent {

  constructor() { }

  getLineUp(){
    return PERSON;
  }

}
