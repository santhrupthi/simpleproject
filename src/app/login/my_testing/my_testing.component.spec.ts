/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { My_testingComponent } from './my_testing.component';

describe('My_testingComponent', () => {
  let component: My_testingComponent;
  let fixture: ComponentFixture<My_testingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ My_testingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(My_testingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
