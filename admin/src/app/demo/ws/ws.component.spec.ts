import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsComponent } from './ws.component';

describe('WsComponent', () => {
  let component: WsComponent;
  let fixture: ComponentFixture<WsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
