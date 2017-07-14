import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LineupComponent } from './lineup/lineup.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'lineup',
    component: LineupComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
