import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ApiService } from './shared';
import 'gsap';
import { inc } from 'ramda';

import '../style/app.scss';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy, Input {
  url = 'https://github.com/TFM-LSW/angular-webpack';
  title: string;
  tally = 1;

  ngOnInit() {
    TweenMax.delayedCall(1, () => console.log('delayed call gsap style'));
    const tl = new TimelineMax({ yoyo: true, repeat: -1 });
    tl.to('.logo', 0.6, { rotation: 359, delay: 1, ease: Power3.easeInOut });
    this.tally = inc(this.tally);
    console.log(this.tally);
  }
  ngOnDestroy() {

  }

  Input() {

  }
  constructor(private api: ApiService) {
    this.title = this.api.title;
  }
}
