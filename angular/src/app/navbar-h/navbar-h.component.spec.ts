import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarHComponent } from './navbar-h.component';

describe('NavbarHComponent', () => {
  let component: NavbarHComponent;
  let fixture: ComponentFixture<NavbarHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
