/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FeedImgGridComponent } from './feed-img-grid.component';

describe('FeedImgGridComponent', () => {
  let component: FeedImgGridComponent;
  let fixture: ComponentFixture<FeedImgGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedImgGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedImgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
