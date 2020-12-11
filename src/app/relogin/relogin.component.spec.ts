/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReloginComponent } from './relogin.component';

describe('ReloginComponent', () => {
  let component: ReloginComponent;
  let fixture: ComponentFixture<ReloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
