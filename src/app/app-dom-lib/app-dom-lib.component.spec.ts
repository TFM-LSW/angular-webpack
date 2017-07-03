/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';

import { AppDomLibModule } from './app-dom-lib.module';

describe('AppDomLibModule', () => {
  let component: AppDomLibModule;
  let fixture: ComponentFixture<AppDomLibModule>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDomLibModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDomLibModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});