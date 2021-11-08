import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/shared/model';

@Component({
  selector: 'app-space-port',
  templateUrl: './space-port.component.html',
  styleUrls: ['./space-port.component.scss']
})
export class SpacePortComponent implements OnInit {

  tech: Technology = { subTitle: 'The terminology...', title: 'Spaceport', description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.", img_url: 'assets/images/technology/image-spaceport-portrait.jpg' };

  constructor() { }

  ngOnInit(): void {

  }
}