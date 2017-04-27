import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit, OnDestroy {
  rangeControl = new FormControl();

  // @Input()
  @Output() change = new EventEmitter<any>();

  private subscription: ISubscription;

  constructor() { }

  ngOnInit() {
    this.subscription = this.rangeControl.valueChanges.subscribe(value => {
      // do something with value here
      // console.log(value);
      // () => this.change(value);
      this.change.emit(value);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


/*

  <my-range (change)="parentHandler()"></my-range>

*/
