import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NQuarterComponent } from './n-quarter.component';

describe('NQuarterComponent', () => {
  let component: NQuarterComponent;
  let fixture: ComponentFixture<NQuarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NQuarterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NQuarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
