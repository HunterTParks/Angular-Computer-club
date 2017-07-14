import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LineupComponent } from './lineup/lineup.component';
import { PersonDetailComponent } from './person-detail/person-detail.component'
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'lineup',
    component: LineupComponent
  },
  {
    path: 'lineup/:id',
    component: PersonDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
