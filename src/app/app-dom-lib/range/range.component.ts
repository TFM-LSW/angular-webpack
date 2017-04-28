import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ViewChild, HostListener } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit, OnDestroy {
  rangeControl = new FormControl();
  webkitBackgroundSize: any;

  @Input() min = 0;
  @Input() max = 20;
  @Input() step = 10;
  @Input() value = 8;
  @Input() increments = {};
  @ViewChild('MFTRangeField') rangeField;
  @Output() rangeChange = new EventEmitter<any>();

  private subscription: ISubscription;

  constructor() { }

  setWebkitTrack(value) {
    this.webkitBackgroundSize = (parseFloat(value) - this.min) * 100 / (this.max - this.min) + '% 100%';
  }

  getOffset(el, relativeToViewPort = false) {
    if (relativeToViewPort === null) { relativeToViewPort = false; }
    let _x = 0;
    let _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      _x += relativeToViewPort ? el.offsetLeft - el.scrollLeft : el.offsetLeft;
      _y += relativeToViewPort ? el.offsetTop - el.scrollTop : el.offsetTop;
      el = el.offsetParent;
    }
    return {
      x: _x,
      y: _y
    };
  }

  @HostListener('touchstart', ['$event'])
  handleTouchStart(e: TouchEvent) {
    const offset = this.getOffset(this.rangeField.nativeElement);
    const diffXPixels = e.touches[0].pageX - offset.x;
    const diffXValue = (diffXPixels / this.rangeField.nativeElement.clientWidth) * (this.max - this.min);
    this.value = Math.round(diffXValue);
    this.rangeChange.emit(this.value);
    this.setWebkitTrack(this.value);
  }

  /*@HostListener('touchend', ['$event'])
  handleTouchEnd() {
    console.log(this.rangeField.nativeElement.value);
    this.value = this.rangeField.nativeElement.value;
    //this.rangeChange.emit(Math.round(e.target.value));
  }*/

  /*@Output() changeFun = function(e) {
    console.log('changeFun' + e.target.value);
  }*/

  getIncArr = () => {
    if (typeof this.increments === 'string') {
      const tmpArr = this.increments.split('-');
      const incArr = [];
      for (let index: any = tmpArr[0]; index <= tmpArr[1]; index++) {
        incArr.push(index);
      }
      return incArr;
    } else {
      return this.increments;
    }
  };

  ngOnInit() {
    this.subscription = this.rangeControl.valueChanges.subscribe(value => {
      this.rangeChange.emit(value);
      this.setWebkitTrack(value);
    });
    this.setWebkitTrack(this.value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
