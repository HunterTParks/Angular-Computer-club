import { Injectable } from '@angular/core';
import { Person } from '../person';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PersonComponent {
  Lineup: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.Lineup = database.list('People');
  }

  getLineUp(){
    console.log(this.database.list('People'));
    return this.Lineup;
  }

  addPerson(newPerson: Person){
    this.Lineup.push(newPerson);
  }

  getPersonById(PersonId: string){
    return this.database.object('People/' + PersonId)
  }

  updatePerson(updatePerson){
    console.log("TEST");
    var personInFireBase = this.getPersonById(updatePerson.$key);
    personInFireBase.update({name: updatePerson.name, age: updatePerson.age, description: updatePerson.description});
  }
}
