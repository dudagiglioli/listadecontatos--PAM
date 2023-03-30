import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ctt2',
  templateUrl: './ctt2.page.html',
  styleUrls: ['./ctt2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Ctt2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
