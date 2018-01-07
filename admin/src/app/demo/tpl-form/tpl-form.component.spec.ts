import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TplFormComponent } from './tpl-form.component';

describe('TplFormComponent', () => {
  let component: TplFormComponent;
  let fixture: ComponentFixture<TplFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TplFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TplFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
