import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosCategorieComponent } from './nos-categorie.component';

describe('NosCategorieComponent', () => {
  let component: NosCategorieComponent;
  let fixture: ComponentFixture<NosCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
