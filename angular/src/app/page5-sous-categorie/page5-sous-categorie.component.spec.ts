import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page5SousCategorieComponent } from './page5-sous-categorie.component';

describe('Page5SousCategorieComponent', () => {
  let component: Page5SousCategorieComponent;
  let fixture: ComponentFixture<Page5SousCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page5SousCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page5SousCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
