import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared';
import 'gsap';

import '../style/app.scss';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  url = 'https://github.com/preboot/angular2-webpack';
  title: string;

  ngOnInit() {
    TweenMax.delayedCall(1, () => console.log('delayed call gsap style'));
    const tl = new TimelineMax();
    tl.to('.container', 2, { alpha: 0.5, delay: 4});
  }
  constructor(private api: ApiService) {
    this.title = this.api.title;
  }
}
