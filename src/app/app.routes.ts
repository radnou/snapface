import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';

export const routes: Routes = [
  {
    path: 'facesnaps',
    component: FaceSnapListComponent,
    data: { animation: 'openClosePage' },
  },
  {
    path: 'facesnaps/:id',
    component: SingleFaceSnapComponent,
    data: { animation: 'enterLeavePage' },
  },
  {
    path: '',
    component: LandingPageComponent,
  },
];
