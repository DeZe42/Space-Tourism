import { Component, Input, OnInit } from '@angular/core';
import { Planet } from '../../shared/model';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  @Input('data') data: Planet;

  constructor() {

  }

  ngOnInit(): void {

  }
}