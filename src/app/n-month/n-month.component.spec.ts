import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NMonthComponent } from './n-month.component';

describe('NMonthComponent', () => {
  let component: NMonthComponent;
  let fixture: ComponentFixture<NMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
