import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page16PanierVideComponent } from './page16-panier-vide.component';

describe('Page16PanierVideComponent', () => {
  let component: Page16PanierVideComponent;
  let fixture: ComponentFixture<Page16PanierVideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page16PanierVideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page16PanierVideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
