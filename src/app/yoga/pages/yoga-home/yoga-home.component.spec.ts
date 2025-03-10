import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaHomePageComponent } from './yoga-home.component';

describe('YogaHomePageComponent', () => {
  let component: YogaHomePageComponent;
  let fixture: ComponentFixture<YogaHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YogaHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YogaHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
