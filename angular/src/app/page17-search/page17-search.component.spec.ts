import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page17SearchComponent } from './page17-search.component';

describe('Page17SearchComponent', () => {
  let component: Page17SearchComponent;
  let fixture: ComponentFixture<Page17SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page17SearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page17SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
