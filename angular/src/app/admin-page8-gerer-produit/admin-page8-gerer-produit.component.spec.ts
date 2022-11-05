import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPage8GererProduitComponent } from './admin-page8-gerer-produit.component';

describe('AdminPage8GererProduitComponent', () => {
  let component: AdminPage8GererProduitComponent;
  let fixture: ComponentFixture<AdminPage8GererProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPage8GererProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPage8GererProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
