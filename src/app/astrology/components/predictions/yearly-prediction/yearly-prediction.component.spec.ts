import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyPredictionComponent } from './yearly-prediction.component';

describe('YearlyPredictionComponent', () => {
  let component: YearlyPredictionComponent;
  let fixture: ComponentFixture<YearlyPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YearlyPredictionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearlyPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
