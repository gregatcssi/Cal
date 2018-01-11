import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NYearComponent } from './n-year.component';

describe('NYearComponent', () => {
  let component: NYearComponent;
  let fixture: ComponentFixture<NYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
