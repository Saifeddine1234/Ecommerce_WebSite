import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPage12CommandeComponent } from './admin-page12-commande.component';

describe('AdminPage12CommandeComponent', () => {
  let component: AdminPage12CommandeComponent;
  let fixture: ComponentFixture<AdminPage12CommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPage12CommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPage12CommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
