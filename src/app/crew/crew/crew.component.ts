import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Crew } from 'src/app/shared/model';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit {

  crew: Crew[] = [
    { function: "Commander", name: "Douglas Hurley", description: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.", img_url: "assets/images/crew/image-douglas-hurley.png" },
    { function: "Mission Specialist ", name: "Douglas HurleyMARK SHUTTLEWORTH", description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.", img_url: "assets/images/crew/image-mark-shuttleworth.png" },
    { function: "Pilot", name: "Victor Glover", description: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.", img_url: "assets/images/crew/image-victor-glover.png" },
    { function: "Flight Engineer", name: "Anousheh Ansari", description: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ", img_url: "assets/images/crew/image-anousheh-ansari.png" }
  ]

  constructor(
    public router: Router
  ) {
    
  }

  ngOnInit(): void {
    
  }
}