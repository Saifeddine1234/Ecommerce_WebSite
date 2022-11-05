import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page15CommandebienpasserComponent } from './page15-commandebienpasser.component';

describe('Page15CommandebienpasserComponent', () => {
  let component: Page15CommandebienpasserComponent;
  let fixture: ComponentFixture<Page15CommandebienpasserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page15CommandebienpasserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page15CommandebienpasserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
