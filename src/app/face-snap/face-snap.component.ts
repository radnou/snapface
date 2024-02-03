import {Component} from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.css'
})
export class FaceSnapComponent {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  snapped: boolean;
  buttonText: string;

  constructor() {
    this.title = "test";
    this.description = " description";
    this.createdDate = new Date();
    this.snaps = 0;
    this.imageUrl = "https://picsum.photos/600/600";
    this.snapped = false;
    this.buttonText = 'Oh Snap!';

  }

  OnAddSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.snaps++;
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.snaps--;
      this.buttonText = 'Oh Snap!';
    }


  }
}
