import { Component } from '@angular/core';

@Component({
  selector: 'app-face-snap',
    standalone: true,
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.css'
})
export class FaceSnapComponent {
  title!:string;
  description!:string;
  createdDate!:Date;
  snaps!:number;
imageUrl!: string;

  constructor(){
    this.title = "test";
    this.description = " description";
    this.createdDate = new Date();
    this.snaps=0;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';

  }
}
