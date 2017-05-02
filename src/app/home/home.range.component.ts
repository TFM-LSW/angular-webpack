import { Component } from '@angular/core';
import { RangeComponent } from '../app-dom-lib/range/range.component';

@Component({
  selector: 'my-range-ext',
  templateUrl: '../app-dom-lib/range/range.component.html',
  styleUrls: ['./home.range.component.scss']
})
export class HomeRangeComponent extends RangeComponent {
  constructor() {
    super();
  }
}
