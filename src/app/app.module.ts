import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LineupComponent } from './lineup/lineup.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { masterFireBaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: masterFireBaseConfig.apiKey,
  authDomain: masterFireBaseConfig.authDomain,
  databaseURL: masterFireBaseConfig.databaseURL,
  storageBucket: masterFireBaseConfig.storageBucket
}

@NgModule({
  declarations: [
    AppComponent,
    LineupComponent,
    AboutComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
