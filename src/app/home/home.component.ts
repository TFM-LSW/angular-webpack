import { Component, OnInit } from '@angular/core';
import 'gsap';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataObj = { rangeValue: 3 };
  timeline = new TimelineMax();
  rangeValue: number;
  tweenText = { text: '3' };

  parentHandler(value) {
    this.dataObj.rangeValue = value;
    this.updateScore();
  }

  constructor() {}

  updateScore() {
    TweenMax.set(this.tweenText, { text: String(Math.round(this.dataObj.rangeValue))});
  }

  testAnimation() {
    this.timeline.to(this.dataObj, 0.4, {
      rangeValue: 28, ease: Sine.easeOut, onUpdate: () => this.updateScore(),
      delay: 1
    }, 0);
  }

  ngOnInit() {
    setTimeout(() => { this.testAnimation(); }, 1000);
  }
}
