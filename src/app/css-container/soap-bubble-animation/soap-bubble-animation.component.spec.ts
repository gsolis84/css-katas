import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoapBubbleAnimationComponent } from './soap-bubble-animation.component';

describe('SoapBubbleAnimationComponent', () => {
  let component: SoapBubbleAnimationComponent;
  let fixture: ComponentFixture<SoapBubbleAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoapBubbleAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoapBubbleAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
