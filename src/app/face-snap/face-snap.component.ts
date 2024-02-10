import { Component, Input } from '@angular/core';
import { FaceSnap } from '../model /face-snap.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.css',
  imports: [NgIf],
})
export class FaceSnapComponent {
  snapped: boolean;
  buttonText: string;
  @Input() faceSnap!: FaceSnap;

  constructor() {
    this.snapped = false;
    this.buttonText = 'Oh Snap!';
  }

  OnAddSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }
}
