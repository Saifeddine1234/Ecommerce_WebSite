import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2SeconnecterComponent } from './page2-seconnecter.component';

describe('Page2SeconnecterComponent', () => {
  let component: Page2SeconnecterComponent;
  let fixture: ComponentFixture<Page2SeconnecterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page2SeconnecterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2SeconnecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
