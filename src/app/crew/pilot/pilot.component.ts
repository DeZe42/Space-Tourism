import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.scss']
})
export class PilotComponent implements OnInit {

  crew = { function: "Pilot", name: "Victor Glover", description: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.", img_url: "assets/images/crew/image-victor-glover.png" };

  constructor() { }

  ngOnInit(): void {

  }
}