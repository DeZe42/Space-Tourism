import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/shared/model';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent implements OnInit {

  tech: Technology = { subTitle: 'The terminology...', title: 'Space capsule', description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.", img_url: 'assets/images/technology/image-space-capsule-portrait.jpg' };

  constructor() { }

  ngOnInit(): void {

  }
}