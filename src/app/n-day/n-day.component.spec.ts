import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NDayComponent } from './n-day.component';

describe('NDayComponent', () => {
  let component: NDayComponent;
  let fixture: ComponentFixture<NDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
