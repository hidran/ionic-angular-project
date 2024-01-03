import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonContent, IonHeader, IonTitle,
  IonToolbar, IonButtons, IonButton, IonIcon
} from '@ionic/angular/standalone';
@Component({
  standalone: true,
  imports: [IonIcon, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar],
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {

  constructor(private router: Router) {

  }


  ngOnInit() {
    null;
  }
  goBack(evt: Event) {
    //this.router.navigate(['users'])
    this.router.navigateByUrl('users');
  }
}
