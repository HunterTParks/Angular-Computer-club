import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonComponent } from '../person-service/person.component';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.css'],
  providers: [PersonComponent]
})

export class LineupComponent implements OnInit {
  lineup: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  AddPerson: string = this.router.url;

  constructor(private router: Router, private personService: PersonComponent) {  }

  ngOnInit() {
    this.lineup = this.personService.getLineUp();
  }

  goToAboutPage(clickedPerson){
    this.router.navigate(['lineup', clickedPerson.$key])
  }

  submitForm(name: string, age: number, description: string, id: string){
    var newPerson: Person = new Person(name, age, description);
    this.personService.addPerson(newPerson);
  }

}
