/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormDevComponent } from './formDev.component';

describe('FormDevComponent', () => {
  let component: FormDevComponent;
  let fixture: ComponentFixture<FormDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
