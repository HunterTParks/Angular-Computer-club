import { Component, OnInit } from '@angular/core';
import { PersonComponent } from '../person-service/person.component';
import { Person } from '../person'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PersonComponent]
})
export class AdminComponent implements OnInit {

  constructor(private personService: PersonComponent) { }

  ngOnInit() {
  }

  submitForm(name: string, age: number, description: string, id: string){
    var newPerson: Person = new Person(name, age, description);
    this.personService.addPerson(newPerson);
  }

}
