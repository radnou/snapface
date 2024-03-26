import { Injectable } from '@angular/core';
import { FaceSnap } from '../model /face-snap.model';

//indicate where to save the instance
// root mean one instance for all app
@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnapList: FaceSnap[];

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

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnapList;
  }

  SnapOfFaceSnapGetById(id: number) {
    try {
      const faceSnap: FaceSnap;
      faceSnap = this.getFaceSnapById(id);
      faceSnap.snaps++;
    } catch (e: unknown) {
      console.log(e.getMessage());
      throw new Error('snapface Id not found ');
    }
  }

  UnSnapOfFaceSnapGetById(id: number) {
    //retrieve the faceSnap
    try {
      const faceSnap: FaceSnap;
      faceSnap = this.getFaceSnapById(id);
      faceSnap.snaps--;
    } catch (e: unknown) {
      console.log(e.getMessage());
      throw new Error('snapface Id not found ');
    }
  }

  /**
   * Update the snap
   * @param faceSnapId the faceSnap ID
   * @param snapType snap or unsnap to increment or decrease the count of snap
   */

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

  getFaceSnapById(id: number) {
    const faceSnap = this.faceSnapList.find((faceSnap) => faceSnap.id === id);
    if (!faceSnap) {
      throw new Error('snapface Id not found ');
    }
    return faceSnap;
  }
}
