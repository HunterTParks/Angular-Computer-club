import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LineupComponent } from './lineup/lineup.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { PersonComponent } from './person-service/person.component';

@NgModule({
  declarations: [
    AppComponent,
    LineupComponent,
    AboutComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
