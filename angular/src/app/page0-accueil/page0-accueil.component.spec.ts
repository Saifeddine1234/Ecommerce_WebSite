import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page0AccueilComponent } from './page0-accueil.component';

describe('Page0AccueilComponent', () => {
  let component: Page0AccueilComponent;
  let fixture: ComponentFixture<Page0AccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page0AccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page0AccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
