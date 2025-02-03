import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologyHeaderComponent } from './astrology-header.component';

describe('AstrologyHeaderComponent', () => {
  let component: AstrologyHeaderComponent;
  let fixture: ComponentFixture<AstrologyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AstrologyHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstrologyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
