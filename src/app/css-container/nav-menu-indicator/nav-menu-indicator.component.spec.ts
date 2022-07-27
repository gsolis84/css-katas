import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuIndicatorComponent } from './nav-menu-indicator.component';

describe('NavMenuIndicatorComponent', () => {
  let component: NavMenuIndicatorComponent;
  let fixture: ComponentFixture<NavMenuIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavMenuIndicatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMenuIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
