import { Component, Input, OnInit } from '@angular/core';
import { Crew } from 'src/app/shared/model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  @Input('crew') crew: Crew;

  constructor() { }

  ngOnInit(): void {
  }
}