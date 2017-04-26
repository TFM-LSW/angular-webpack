import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from '../module-import-guard';
import { RangeComponent } from './range/range.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RangeComponent],
  declarations: [RangeComponent],
})
export class AppDomLibModule {
  constructor( @Optional() @SkipSelf() parentModule: AppDomLibModule) {
    throwIfAlreadyLoaded(parentModule, 'AppDomLibModule');
  }
}
