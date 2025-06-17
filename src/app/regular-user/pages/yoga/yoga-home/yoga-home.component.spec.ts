import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaHomeComponent } from './yoga-home.component';

describe('YogaHomeComponent', () => {
  let component: YogaHomeComponent;
  let fixture: ComponentFixture<YogaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YogaHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YogaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
