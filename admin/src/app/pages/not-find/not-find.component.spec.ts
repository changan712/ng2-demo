/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NotFindComponent } from './not-find.component';

describe('NotFindComponent', () => {
  let component: NotFindComponent;
  let fixture: ComponentFixture<NotFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
