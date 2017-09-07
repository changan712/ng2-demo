import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxTodoComponent } from './rx-todo.component';

describe('RxTodoComponent', () => {
  let component: RxTodoComponent;
  let fixture: ComponentFixture<RxTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
