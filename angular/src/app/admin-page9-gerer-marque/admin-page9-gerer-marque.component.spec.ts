import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPage9GererMarqueComponent } from './admin-page9-gerer-marque.component';

describe('AdminPage9GererMarqueComponent', () => {
  let component: AdminPage9GererMarqueComponent;
  let fixture: ComponentFixture<AdminPage9GererMarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPage9GererMarqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPage9GererMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
