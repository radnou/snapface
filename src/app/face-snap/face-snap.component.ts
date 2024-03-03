import { Component, Input } from '@angular/core';
import { FaceSnap } from '../model /face-snap.model';
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  NgClass,
  NgIf,
  NgStyle,
  PercentPipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.css',
  imports: [
    NgIf,
    NgStyle,
    NgClass,
    UpperCasePipe,
    TitleCasePipe,
    LowerCasePipe,
    DatePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe,
  ],
})
export class FaceSnapComponent {
  snapped: boolean;
  buttonText: string;
  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapService: FaceSnapsService) {
    this.snapped = false;
    this.buttonText = 'Oh Snap!';
  }

  OnAddSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapService.SnapOfFaceSnapGetById(this.faceSnap.id);
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapService.UnSnapOfFaceSnapGetById(this.faceSnap.id);
      this.buttonText = 'Oh Snap!';
    }
  }
}
