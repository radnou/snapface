import { Component } from '@angular/core';
import { FaceSnap } from '../model /face-snap.model';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent, NgForOf],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss',
})
export class FaceSnapListComponent {
  faceSnapList!: FaceSnap[];

  constructor() {
    this.faceSnapList = [
      {
        id: 1,
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl:
          'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: 'Paris',
      },
      {
        id: 2,
        title: 'Three Rock Mountain',
        description: 'Un endroit magnifique pour les randonnées.',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
        createdDate: new Date(),
        snaps: 146,
        location: 'la montagne',
      },
      {
        id: 3,
        title: 'Un bon repas',
        description: "Mmmh que c'est bon !",
        imageUrl:
          'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        createdDate: new Date(),
        snaps: 0,
      },
    ];
  }
}
