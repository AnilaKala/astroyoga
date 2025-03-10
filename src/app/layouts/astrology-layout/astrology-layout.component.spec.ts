import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologyLayoutComponent } from './astrology-layout.component';

describe('AstrologyLayoutComponent', () => {
  let component: AstrologyLayoutComponent;
  let fixture: ComponentFixture<AstrologyLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AstrologyLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstrologyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
