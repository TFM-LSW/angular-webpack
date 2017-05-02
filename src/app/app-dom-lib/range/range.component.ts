import { Component, OnInit, OnDestroy, OnChanges, Input, Output, EventEmitter, ViewChild, HostListener } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit, OnDestroy, OnChanges {
  @Input() min = 0;
  @Input() max = 20;
  @Input() step = 10;
  @Input() value;
  @Input() increments;
  @ViewChild('MFTRange') rangeField;
  @Output() rangeChange = new EventEmitter<any>();

  private subscription: ISubscription;
  private rangeControl = new FormControl();
  private webkitBackgroundSize: any;
  private incrementArray = this.increments;
  constructor() { }

  @HostListener('touchstart', ['$event'])
  handleTouchStart(e: TouchEvent) {
    const offset = this.getOffset(this.rangeField.nativeElement);
    const diffXPixels = e.touches[0].pageX - offset.x;
    const diffXValue = (diffXPixels / this.rangeField.nativeElement.clientWidth) * (this.max - this.min);
    this.setValue(diffXValue);
  }

  ngOnInit() {
    this.subscription = this.rangeControl.valueChanges.subscribe(value => {
      this.rangeChange.emit(value);
      this.setWebkitTrack(value);
    });
    this.setWebkitTrack(this.value);
    this.incrementArray = this.getIncArr();
  }
  ngOnChanges() {
    this.rangeChange.emit(this.value);
    this.setWebkitTrack(this.value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  private setWebkitTrack(value) {
    this.webkitBackgroundSize = (value - this.min) * 100 / (this.max - this.min) + '% 100%';
  }

  private getOffset(el, relativeToViewPort = false) {
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

  private setValue(value) {
    this.value = Math.round(value);
    this.rangeChange.emit(this.value);
    this.setWebkitTrack(this.value);
  }

  private getIncArr = () => {
    const createArr = (min: number, max: number) => {
      const incArr = [];
      for (let index: any = min; index <= max; index++) {
        incArr.push(index);
      }
      return incArr;
    };
    if (typeof this.increments === 'string') {
      const tmpArr = this.increments.split('-');
      return createArr(Number(tmpArr[0]), Number(tmpArr[1]));
    } else if (typeof this.increments === 'boolean') {
      return createArr(this.min, this.max);
    } else {
      return this.increments;
    }
  }
}
