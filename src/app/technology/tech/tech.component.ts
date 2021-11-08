import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {

  @Input('tech') tech;

  constructor() { }

  ngOnInit(): void {

  }
}