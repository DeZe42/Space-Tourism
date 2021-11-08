import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  buttonHover: boolean = false;
  menuOpen: boolean = false;

  constructor(
    public router: Router
  ) {

  }

  ngOnInit() {

  }

  openMenu() {
    this.menuOpen = true;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  navigate(route) {
    this.router.navigateByUrl('/' + route);
    this.closeMenu();
  }
}