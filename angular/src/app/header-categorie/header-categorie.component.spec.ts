import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCategorieComponent } from './header-categorie.component';

describe('HeaderCategorieComponent', () => {
  let component: HeaderCategorieComponent;
  let fixture: ComponentFixture<HeaderCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
