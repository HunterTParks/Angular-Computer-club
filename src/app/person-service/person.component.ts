import { Injectable } from '@angular/core';
import { Person } from '../person';
import { PERSON } from '../mock-lineup';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PersonComponent {
  Lineup: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.Lineup = database.list('Lineup');
  }

  getLineUp(){
    return this.Lineup;
  }

  getPersonById(PersonId: string){
    for(var i = 0; i <= PERSON.length - 1; i++){
      if(PERSON[i].id === PersonId){
        return PERSON[i];
      }
    }
  }
}
