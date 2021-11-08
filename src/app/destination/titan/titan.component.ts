import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titan',
  templateUrl: './titan.component.html',
  styleUrls: ['./titan.component.scss']
})
export class TitanComponent implements OnInit {

  data = { name: 'Titan', description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.", distance_unit: 'bil. km', distance: 1.6, time: 7, time_unit: 'years', img_src: 'assets/images/destination/image-titan.png' };

  constructor() {

  }

  ngOnInit(): void {

  }
}