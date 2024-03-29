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
import { Router, RouterLink } from '@angular/router';

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
    RouterLink,
  ],
})
export class FaceSnapComponent {
  snapped: boolean;
  buttonText: string;
  @Input() faceSnap!: FaceSnap;
  private router!: Router;

  constructor(private faceSnapService: FaceSnapsService) {
    this.snapped = false;
    this.buttonText = 'Oh Snap!';
    this.router = new Router();
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

  viewDetail() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
