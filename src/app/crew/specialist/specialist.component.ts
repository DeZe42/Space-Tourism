import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialist',
  templateUrl: './specialist.component.html',
  styleUrls: ['./specialist.component.scss']
})
export class SpecialistComponent implements OnInit {

  crew = { function: "Mission Specialist ", name: "Douglas HurleyMARK SHUTTLEWORTH", description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.", img_url: "assets/images/crew/image-mark-shuttleworth.png" };

  constructor() { }

  ngOnInit(): void {

  }
}