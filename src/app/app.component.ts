import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './model /face-snap.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  mySnap: FaceSnap;
  my2Snap: FaceSnap;

  constructor() {
    this.mySnap = new FaceSnap(
      'First Snap',
      'Snap  Description ',
      'https://picsum.photos/600/600',
      new Date(),
      0,
    );

    this.my2Snap = new FaceSnap(
      'Second Snap',
      'Second Snap Description ',
      'https://picsum.photos/900/600',
      new Date(),
      0,
    );
  }
}
