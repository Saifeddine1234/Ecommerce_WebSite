import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPage0PrincipalComponent } from './admin-page0-principal.component';

describe('AdminPage0PrincipalComponent', () => {
  let component: AdminPage0PrincipalComponent;
  let fixture: ComponentFixture<AdminPage0PrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPage0PrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPage0PrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
