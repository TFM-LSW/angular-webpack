import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(@Inject('config') private config) {
    console.log('config: ' + this.config);
  }

  ngOnInit() {
    console.log('Hello About');
  }
}
