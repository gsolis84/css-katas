import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAnimationWaterComponent } from './text-animation-water.component';

describe('TextAnimationWaterComponent', () => {
  let component: TextAnimationWaterComponent;
  let fixture: ComponentFixture<TextAnimationWaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextAnimationWaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAnimationWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
