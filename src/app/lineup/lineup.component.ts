import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonComponent } from '../person-service/person.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.css'],
  providers: [PersonComponent]
})

export class LineupComponent implements OnInit {
  lineup: Person[];

  constructor(private router: Router, private personService: PersonComponent) { }

  ngOnInit() {
    this.lineup = this.personService.getLineUp();
  }

  goToAboutPage(clickedPerson: Person){
    this.router.navigate(['lineup', clickedPerson.id])
  }

}
