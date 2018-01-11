import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NWeekComponent } from './n-week.component';

describe('NWeekComponent', () => {
  let component: NWeekComponent;
  let fixture: ComponentFixture<NWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
