import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page8VenteFlashComponent } from './page8-vente-flash.component';

describe('Page8VenteFlashComponent', () => {
  let component: Page8VenteFlashComponent;
  let fixture: ComponentFixture<Page8VenteFlashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page8VenteFlashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page8VenteFlashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
