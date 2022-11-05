import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page7PanierComponent } from './page7-panier.component';

describe('Page7PanierComponent', () => {
  let component: Page7PanierComponent;
  let fixture: ComponentFixture<Page7PanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page7PanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page7PanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
