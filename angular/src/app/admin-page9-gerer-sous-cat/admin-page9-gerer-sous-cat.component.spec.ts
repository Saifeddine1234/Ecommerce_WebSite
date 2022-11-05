import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPage9GererSousCatComponent } from './admin-page9-gerer-sous-cat.component';

describe('AdminPage9GererSousCatComponent', () => {
  let component: AdminPage9GererSousCatComponent;
  let fixture: ComponentFixture<AdminPage9GererSousCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPage9GererSousCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPage9GererSousCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
