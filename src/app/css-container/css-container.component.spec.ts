import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSContainerComponent } from './css-container.component';

describe('CSSContainerComponent', () => {
  let component: CSSContainerComponent;
  let fixture: ComponentFixture<CSSContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSSContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSSContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
