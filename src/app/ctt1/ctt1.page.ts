import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ctt1',
  templateUrl: './ctt1.page.html',
  styleUrls: ['./ctt1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Ctt1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
