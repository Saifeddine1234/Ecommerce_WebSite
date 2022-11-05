import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page6ProduitbycatComponent } from './page6-produitbycat.component';

describe('Page6ProduitbycatComponent', () => {
  let component: Page6ProduitbycatComponent;
  let fixture: ComponentFixture<Page6ProduitbycatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page6ProduitbycatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page6ProduitbycatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
