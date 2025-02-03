import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyPredictionComponent } from './monthly-prediction.component';

describe('MonthlyPredictionComponent', () => {
  let component: MonthlyPredictionComponent;
  let fixture: ComponentFixture<MonthlyPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonthlyPredictionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
