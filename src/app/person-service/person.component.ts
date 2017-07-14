import { Injectable } from '@angular/core';
import { Person } from '../person';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { PERSON } from '../mock-lineup';

@Injectable()
export class PersonComponent {
  Lineup: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.Lineup = database.list('People');
  }

  getLineUp(){
    console.log(this.database.list('Lineup'));
    return this.Lineup;
  }

  getPersonById(PersonId: string){
    for(var i = 0; i <= PERSON.length - 1; i++){
      if(PERSON[i].id === PersonId){
        return PERSON[i];
      }
    }
    return PERSON[i];
  }
}
