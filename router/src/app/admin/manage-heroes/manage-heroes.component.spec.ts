import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHeresComponent } from './manage-heroes.component';

describe('ManageHeresComponent', () => {
  let component: ManageHeresComponent;
  let fixture: ComponentFixture<ManageHeresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageHeresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageHeresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
