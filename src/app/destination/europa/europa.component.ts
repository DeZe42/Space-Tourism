import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-europa',
  templateUrl: './europa.component.html',
  styleUrls: ['./europa.component.scss']
})
export class EuropaComponent implements OnInit {

  data = { name: 'Europa', description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.", distance_unit: 'mil. km', distance: 628, time: 3, time_unit: 'years', img_src: 'assets/images/destination/image-europa.png' };

  constructor() {

  }

  ngOnInit(): void {

  }
}