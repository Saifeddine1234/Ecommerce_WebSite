import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page9OffrespecialComponent } from './page9-offrespecial.component';

describe('Page9OffrespecialComponent', () => {
  let component: Page9OffrespecialComponent;
  let fixture: ComponentFixture<Page9OffrespecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page9OffrespecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page9OffrespecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
