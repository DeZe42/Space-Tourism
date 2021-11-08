import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.scss']
})
export class MarsComponent implements OnInit {

  data = { name: 'Mars', description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!", distance_unit: 'mil. km', distance: 225, time: 9, time_unit: 'months', img_src: 'assets/images/destination/image-mars.png' };

  constructor() {

  }

  ngOnInit(): void {

  }
}