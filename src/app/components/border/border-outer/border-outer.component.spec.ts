import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderOuterComponent } from './border-outer.component';

describe('BorderOuterComponent', () => {
  let component: BorderOuterComponent;
  let fixture: ComponentFixture<BorderOuterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderOuterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderOuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
