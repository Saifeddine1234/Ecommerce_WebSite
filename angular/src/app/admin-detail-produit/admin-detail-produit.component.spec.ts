import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailProduitComponent } from './admin-detail-produit.component';

describe('AdminDetailProduitComponent', () => {
  let component: AdminDetailProduitComponent;
  let fixture: ComponentFixture<AdminDetailProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDetailProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDetailProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
