import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page15CommanderComponent } from './page15-commander.component';

describe('Page15CommanderComponent', () => {
  let component: Page15CommanderComponent;
  let fixture: ComponentFixture<Page15CommanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page15CommanderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page15CommanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
