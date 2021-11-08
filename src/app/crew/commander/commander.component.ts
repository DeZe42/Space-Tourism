import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.scss']
})
export class CommanderComponent implements OnInit {

  crew = { function: "Commander", name: "Douglas Hurley", description: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.", img_url: "assets/images/crew/image-douglas-hurley.png" };

  constructor() { }

  ngOnInit(): void {

  }
}