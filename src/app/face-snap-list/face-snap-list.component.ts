import { Component } from '@angular/core';
import { FaceSnap } from '../model /face-snap.model';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { NgForOf } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent, NgForOf],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss',
})
export class FaceSnapListComponent {
  faceSnapList!: FaceSnap[];

  constructor(private faceSnapService: FaceSnapsService) {
    this.faceSnapList = faceSnapService.faceSnapList;
  }
}
