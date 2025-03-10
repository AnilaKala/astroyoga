import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaLayoutComponent } from './yoga-layout.component';

describe('YogaLayoutComponent', () => {
  let component: YogaLayoutComponent;
  let fixture: ComponentFixture<YogaLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YogaLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YogaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
