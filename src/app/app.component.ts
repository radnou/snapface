import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import {interval, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FaceSnapComponent,
    FaceSnapListComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
   interval$!: Observable<number>;
  constructor() {
     this.interval$ = interval(1000);
//     setTimeout(()=> {
//     this.interval$.subscribe(value => console.log(value))
//       }
// ,3000
//     )
  }
}
