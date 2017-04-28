import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  rangeValue: number;
  parentHandler(value) {
    this.rangeValue = value;
  }

  constructor() {
    // Do stuff
  }

  ngOnInit() {

  }

}
