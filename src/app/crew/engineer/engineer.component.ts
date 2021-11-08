import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.scss']
})
export class EngineerComponent implements OnInit {

  crew = { function: "Flight Engineer", name: "Anousheh Ansari", description: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ", img_url: "assets/images/crew/image-anousheh-ansari.png" };

  constructor() { }

  ngOnInit(): void {

  }
}