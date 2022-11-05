import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page10InformationcompteComponent } from './page10-informationcompte.component';

describe('Page10InformationcompteComponent', () => {
  let component: Page10InformationcompteComponent;
  let fixture: ComponentFixture<Page10InformationcompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page10InformationcompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page10InformationcompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
