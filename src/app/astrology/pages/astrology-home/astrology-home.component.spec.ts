import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologyHomePageComponent } from './astrology-home.component';

describe('AstrologyHomePageComponent', () => {
  let component: AstrologyHomePageComponent;
  let fixture: ComponentFixture<AstrologyHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AstrologyHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstrologyHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
