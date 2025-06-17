import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyYogaComponent } from './daily-yoga.component';

describe('DailyYogaComponent', () => {
  let component: DailyYogaComponent;
  let fixture: ComponentFixture<DailyYogaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DailyYogaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyYogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
