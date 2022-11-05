import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPage7GererCatComponent } from './admin-page7-gerer-cat.component';

describe('AdminPage7GererCatComponent', () => {
  let component: AdminPage7GererCatComponent;
  let fixture: ComponentFixture<AdminPage7GererCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPage7GererCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPage7GererCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
