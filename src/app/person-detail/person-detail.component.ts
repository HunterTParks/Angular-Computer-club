import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Person } from '../person';
import { PersonComponent } from '../person-service/person.component';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css'],
  providers: [ PersonComponent ]
})
export class PersonDetailComponent implements OnInit {
  PersonId: string;
  PersonToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private personComponent: PersonComponent
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      console.log(urlParameters['id']);
      this.PersonId = urlParameters['id'];
    })
    this.PersonToDisplay = this.personComponent.getPersonById(this.PersonId);
  }

}
