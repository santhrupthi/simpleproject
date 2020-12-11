/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChildComponemtComponent } from './childComponemt.component';

describe('ChildComponemtComponent', () => {
  let component: ChildComponemtComponent;
  let fixture: ComponentFixture<ChildComponemtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponemtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponemtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
