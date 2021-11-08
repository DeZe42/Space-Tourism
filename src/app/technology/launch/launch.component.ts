import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/shared/model';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {

  tech: Technology = { subTitle: 'The terminology...', title: 'Launch vehicle', description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!", img_url: 'assets/images/technology/image-launch-vehicle-portrait.jpg' };

  constructor() { }

  ngOnInit(): void {

  }
}