import { Injectable } from '@angular/core';
import { Person } from '../person';
import { PERSON } from '../mock-lineup';

@Injectable()
export class PersonComponent {

  constructor() { }

  getLineUp(){
    return PERSON;
  }

  getPersonById(PersonId: string){
    for(var i = 0; i <= PERSON.length - 1; i++){
      if(PERSON[i].id === PersonId){
        return PERSON[i];
      }
    }
  }
}
