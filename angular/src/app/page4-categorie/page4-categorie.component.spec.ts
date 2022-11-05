import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page4CategorieComponent } from './page4-categorie.component';

describe('Page4CategorieComponent', () => {
  let component: Page4CategorieComponent;
  let fixture: ComponentFixture<Page4CategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page4CategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page4CategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
