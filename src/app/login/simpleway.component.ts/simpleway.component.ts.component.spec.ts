/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Simpleway.component.tsComponent } from './simpleway.component.ts.component';

describe('Simpleway.component.tsComponent', () => {
  let component: Simpleway.component.tsComponent;
  let fixture: ComponentFixture<Simpleway.component.tsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Simpleway.component.tsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Simpleway.component.tsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
