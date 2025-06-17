import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologyHomeComponent } from './astrology-home.component';

describe('AstrologyHomeComponent', () => {
  let component: AstrologyHomeComponent;
  let fixture: ComponentFixture<AstrologyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AstrologyHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstrologyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
