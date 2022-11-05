import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPage4PubDroiteComponent } from './admin-page4-pub-droite.component';

describe('AdminPage4PubDroiteComponent', () => {
  let component: AdminPage4PubDroiteComponent;
  let fixture: ComponentFixture<AdminPage4PubDroiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPage4PubDroiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPage4PubDroiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
