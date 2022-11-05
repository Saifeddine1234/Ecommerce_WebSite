import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPage10GererUserComponent } from './admin-page10-gerer-user.component';

describe('AdminPage10GererUserComponent', () => {
  let component: AdminPage10GererUserComponent;
  let fixture: ComponentFixture<AdminPage10GererUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPage10GererUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPage10GererUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
