import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.scss']
})
export class MoonComponent implements OnInit {

  data = { name: 'Moon', description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.", distance_unit: 'km', distance: 384400, time: 3, time_unit: 'days', img_src: 'assets/images/destination/image-moon.png' }

  constructor() {

  }

  ngOnInit(): void {

  }
}