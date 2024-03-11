import { Component } from '@angular/core';
import { FaceSnap } from '../model /face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import {
  CurrencyPipe,
  DatePipe,
  LowerCasePipe,
  NgClass,
  NgStyle,
  TitleCasePipe,
} from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgStyle,
    NgClass,
    TitleCasePipe,
    LowerCasePipe,
    DatePipe,
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent {
  snapped: boolean;
  buttonText: string;
  faceSnap!: FaceSnap;

  constructor(
    private faceSnapService: FaceSnapsService,
    private route: ActivatedRoute,
  ) {
    this.snapped = false;
    this.buttonText = 'Oh Snap!';
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(snapId);
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
