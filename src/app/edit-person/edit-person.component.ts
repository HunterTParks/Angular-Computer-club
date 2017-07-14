import { Component, Input, OnInit } from '@angular/core';
import { PersonComponent } from '../person-service/person.component';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css'],
  providers: [ PersonComponent ]
})
export class EditPersonComponent implements OnInit {
  @Input() selectedPerson;

  constructor(private PersonService: PersonComponent) { }

  ngOnInit() {
  }

  StartUpdatePerson(personToUpdate){
    this.PersonService.updatePerson(personToUpdate);
  }

  StartDeletePerson(personToDelete){
    if(confirm("WARNING: Are you sure you want to delete this entry?")){
      console.log("TEST");
      this.PersonService.deletePerson(personToDelete);
    }
  }
}
