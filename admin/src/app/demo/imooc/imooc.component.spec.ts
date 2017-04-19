import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImoocComponent } from './imooc.component';

describe('ImoocComponent', () => {
  let component: ImoocComponent;
  let fixture: ComponentFixture<ImoocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImoocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImoocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
