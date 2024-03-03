import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: 'facesnaps',
    component: FaceSnapListComponent,
    data: { animation: 'enterLeavePage' },
  },
  {
    path: '',
    component: LandingPageComponent,
    data: { animation: 'openClosePage' },
  },
];
