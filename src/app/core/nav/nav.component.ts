import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'my-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  menuItems = [
    { text: 'Home', routerLink: [''] },
    { text: 'About', routerLink: ['about'] }
  ];
  ngOnInit() {  }
  constructor() { }
}
