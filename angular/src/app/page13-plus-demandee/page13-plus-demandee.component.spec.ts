import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page13PlusDemandeeComponent } from './page13-plus-demandee.component';

describe('Page13PlusDemandeeComponent', () => {
  let component: Page13PlusDemandeeComponent;
  let fixture: ComponentFixture<Page13PlusDemandeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page13PlusDemandeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page13PlusDemandeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
