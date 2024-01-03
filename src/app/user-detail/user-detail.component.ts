import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
@Component({
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar],
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    null;
  }

}
