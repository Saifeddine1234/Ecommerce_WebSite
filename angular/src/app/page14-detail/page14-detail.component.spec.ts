import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page14DetailComponent } from './page14-detail.component';

describe('Page14DetailComponent', () => {
  let component: Page14DetailComponent;
  let fixture: ComponentFixture<Page14DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page14DetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page14DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
